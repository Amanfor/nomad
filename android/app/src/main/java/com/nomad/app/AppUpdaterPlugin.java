package com.nomad.app;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.Settings;

import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;

@CapacitorPlugin(name = "AppUpdater")
public class AppUpdaterPlugin extends Plugin {

    private static final String APK_SUBPATH = "updates/nomad-update.apk";

    private long downloadId = -1;
    private BroadcastReceiver downloadReceiver;

    @Override
    public void load() {
        super.load();
        try {
            if (downloadReceiver == null) {
                downloadReceiver = new BroadcastReceiver() {
                    @Override
                    public void onReceive(Context context, Intent intent) {
                        try {
                            if (!DownloadManager.ACTION_DOWNLOAD_COMPLETE.equals(intent.getAction())) {
                                return;
                            }
                            long id = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
                            if (id != downloadId) {
                                return;
                            }
                            DownloadManager dm = (DownloadManager) getContext().getSystemService(Context.DOWNLOAD_SERVICE);
                            if (dm == null) {
                                notifyListeners("updateEvent", new JSObject().put("state", "failed"));
                                return;
                            }
                            DownloadManager.Query query = new DownloadManager.Query();
                            query.setFilterById(downloadId);
                            try (Cursor cursor = dm.query(query)) {
                                if (cursor != null && cursor.moveToFirst()) {
                                    int statusIdx = cursor.getColumnIndex(DownloadManager.COLUMN_STATUS);
                                    int status = statusIdx >= 0 ? cursor.getInt(statusIdx) : DownloadManager.STATUS_FAILED;
                                    if (status == DownloadManager.STATUS_SUCCESSFUL) {
                                        launchInstallIntent();
                                        notifyListeners("updateEvent", new JSObject().put("state", "ready"));
                                    } else {
                                        notifyListeners("updateEvent", new JSObject().put("state", "failed"));
                                    }
                                } else {
                                    notifyListeners("updateEvent", new JSObject().put("state", "failed"));
                                }
                            }
                        } catch (Exception e) {
                            notifyListeners("updateEvent", new JSObject().put("state", "failed"));
                        }
                    }
                };
                IntentFilter filter = new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE);
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                    getContext().registerReceiver(downloadReceiver, filter, Context.RECEIVER_EXPORTED);
                } else {
                    getContext().registerReceiver(downloadReceiver, filter);
                }
            }
        } catch (Exception ignored) {
        }
    }

    @PluginMethod
    public void download(PluginCall call) {
        try {
            String url = call.getString("url");
            if (url == null || url.isEmpty()) {
                call.reject("download: 'url' is required");
                return;
            }
            Context ctx = getContext();
            // Remove any stale APK so the install intent always points at the fresh file.
            try {
                File stale = new File(ctx.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), "updates/nomad-update.apk");
                if (stale.exists()) {
                    stale.delete();
                }
            } catch (Exception ignored) {
            }
            DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
            request.setTitle("nomad update");
            request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE);
            request.setDestinationInExternalFilesDir(ctx, Environment.DIRECTORY_DOWNLOADS, APK_SUBPATH);
            request.setMimeType("application/vnd.android.package-archive");
            DownloadManager dm = (DownloadManager) ctx.getSystemService(Context.DOWNLOAD_SERVICE);
            if (dm == null) {
                call.reject("download: DownloadManager unavailable");
                return;
            }
            downloadId = dm.enqueue(request);
            JSObject ret = new JSObject();
            ret.put("downloadId", downloadId);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("download failed: " + e.getMessage());
        }
    }

    @PluginMethod
    public void canRequestInstalls(PluginCall call) {
        try {
            boolean allowed = getContext().getPackageManager().canRequestPackageInstalls();
            JSObject ret = new JSObject();
            ret.put("allowed", allowed);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("canRequestInstalls failed: " + e.getMessage());
        }
    }

    @PluginMethod
    public void openInstallSettings(PluginCall call) {
        try {
            Context ctx = getContext();
            Intent intent = new Intent(
                Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                Uri.parse("package:" + ctx.getPackageName())
            );
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            ctx.startActivity(intent);
            JSObject ret = new JSObject();
            ret.put("opened", true);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("openInstallSettings failed: " + e.getMessage());
        }
    }

    private void launchInstallIntent() {
        Context ctx = getContext();
        File apk = new File(ctx.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), "updates/nomad-update.apk");
        Uri uri = FileProvider.getUriForFile(ctx, ctx.getPackageName() + ".fileprovider", apk);
        Intent install = new Intent(Intent.ACTION_VIEW);
        install.setDataAndType(uri, "application/vnd.android.package-archive");
        install.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
        ctx.startActivity(install);
    }
}
