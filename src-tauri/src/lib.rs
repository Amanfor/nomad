// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  // Linux black-screen workarounds. On Wayland (Intel/NVIDIA/Mesa) WebKitGTK's
  // DMABUF renderer often fails to build a framebuffer and the window opens
  // pure black — tauri-apps/tauri#9394, #10702. Verified locally: the same
  // build renders correctly through XWayland, so prefer X11 when a display is
  // available. Must be set before the webview is created so WebKitWebProcess
  // inherits them. Users can still override by exporting the variables.
  #[cfg(target_os = "linux")]
  {
    for (key, value) in [
      ("WEBKIT_DISABLE_DMABUF_RENDERER", "1"),
      ("WEBKIT_DISABLE_COMPOSITING_MODE", "1"),
    ] {
      if std::env::var(key).is_err() {
        std::env::set_var(key, value);
      }
    }
    // XWayland is present whenever DISPLAY is set; pure-Wayland sessions keep
    // their default backend instead of failing to open a display.
    if std::env::var("GDK_BACKEND").is_err() && std::env::var("DISPLAY").is_ok() {
      std::env::set_var("GDK_BACKEND", "x11");
    }
  }

  tauri::Builder::default()
    .plugin(tauri_plugin_updater::Builder::new().build())
    .plugin(tauri_plugin_process::init())
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
