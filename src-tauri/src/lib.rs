// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  // Linux blank-window workarounds. On Wayland (Intel/NVIDIA/Mesa) WebKitGTK's
  // DMABUF renderer often fails to build a framebuffer and the window opens
  // pure black — tauri-apps/tauri#9394, #10702. Must be set before the webview
  // is created so WebKitWebProcess inherits them. Users can still override.
  #[cfg(target_os = "linux")]
  for (key, value) in [
    ("WEBKIT_DISABLE_DMABUF_RENDERER", "1"),
    ("WEBKIT_DISABLE_COMPOSITING_MODE", "1"),
  ] {
    if std::env::var(key).is_err() {
      std::env::set_var(key, value);
    }
  }

  tauri::Builder::default()
    .plugin(tauri_plugin_updater::Builder::new().build())
    .plugin(tauri_plugin_process::init())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
