package com.nomad.app;

import android.os.Bundle;
import android.view.KeyEvent;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onBackPressed() {
        // Let the web UI handle back (returns to home / closes overlays)
        // instead of exiting the app immediately.
        if (bridge != null && bridge.getWebView() != null) {
            bridge.getWebView().evaluateJavascript(
                "window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));",
                null
            );
        } else {
            super.onBackPressed();
        }
    }
}
