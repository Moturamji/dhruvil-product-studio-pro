import pickerShot from "@/assets/colorpicker/picker.png";
import splashShot from "@/assets/colorpicker/splash.png";

/**
 * Color Picker — a small Flutter desktop (Windows) utility.
 * Personal demo build: runs locally, no account, no backend.
 */
export const colorPicker = {
  id: "colorpicker",
  title: "Color Picker — Windows Desktop Utility",
  shortTitle: "Color Picker",
  tagline:
    "A always-on-top Windows desktop app that picks any colour on screen and gives you HEX, RGB, HSL and HSV instantly.",
  status: "Demo build",
  category: "Desktop" as const,
  platform: "Windows / Flutter Desktop",
  role: "Developer / Product Builder",
  tags: ["Flutter", "Dart", "Windows", "Desktop"],
  overview:
    "Color Picker is a compact Flutter desktop utility for Windows. It sits beside your design or code window, grabs the colour under the cursor with a global shortcut, and shows every format you might need to paste — with one-tap copy and a running history of recent picks.",
  problem:
    "Sampling a colour usually means opening a heavy design tool, screenshotting, or hunting for a browser extension. The goal here was a tiny native window that stays out of the way, responds to a global hotkey, and never breaks your flow.",
  capabilities: [
    {
      title: "Global screen picking",
      body: "Alt + C picks the colour under the cursor from anywhere on the desktop — the window does not need focus.",
    },
    {
      title: "Every format at once",
      body: "HEX, RGB, HSL and HSV are computed and listed together, each with its own copy button, so the value can go straight into CSS, Flutter or a design tool.",
    },
    {
      title: "Live preview card",
      body: "A large swatch shows the picked colour with its HEX value rendered in a contrast-aware label on top.",
    },
    {
      title: "Pick history",
      body: "Recent colours are kept as a row of swatches so you can step back to an earlier pick without re-sampling.",
    },
    {
      title: "Always on top",
      body: "A pin toggle keeps the window floating above other applications while you work.",
    },
    {
      title: "Branded launch",
      body: "A native splash window with the app identity while the desktop shell and hotkey listener initialise.",
    },
  ],
  technical: [
    {
      label: "Framework",
      body: "Flutter desktop targeting Windows, compiled to a native executable with a custom compact window size.",
    },
    {
      label: "Window management",
      body: "Custom window sizing, always-on-top toggling and a lightweight portrait layout tuned for a side-by-side workflow.",
    },
    {
      label: "System integration",
      body: "A global keyboard shortcut and screen-pixel sampling read colour data from outside the app window.",
    },
    {
      label: "Colour maths",
      body: "A single source colour is converted on the fly into HEX, RGB, HSL and HSV representations.",
    },
    {
      label: "Clipboard",
      body: "Per-format copy actions write directly to the Windows clipboard for immediate paste.",
    },
  ],
  demonstrates: [
    "Flutter beyond mobile — a real Windows desktop build",
    "Native OS integration: global hotkeys, screen sampling, always-on-top windows",
    "Designing a dense, single-window utility UI",
    "Colour space conversion and clipboard handling",
  ],
  honesty:
    "This is a personal desktop utility I built for my own workflow — not a client project and not distributed through a store.",
  shots: [
    {
      src: pickerShot,
      alt: "Color Picker main window showing a picked colour with HEX, RGB, HSL and HSV values and a history row",
      title: "Picker window",
      caption: "Swatch, all four formats with copy buttons, history and the global-shortcut hint.",
      width: 403,
      height: 737,
    },
    {
      src: splashShot,
      alt: "Color Picker splash screen with app icon and loading indicator",
      title: "Launch splash",
      caption: "Branded startup window while the desktop shell and hotkey listener initialise.",
      width: 406,
      height: 743,
    },
  ],
};
