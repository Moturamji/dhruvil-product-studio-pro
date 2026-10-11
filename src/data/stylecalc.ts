import appIcon from "@/assets/stylecalc/app-icon.webp";
import shot06 from "@/assets/stylecalc/06-fast-accurate.webp";
import shot07 from "@/assets/stylecalc/07-perfect-accuracy.webp";
import shot08 from "@/assets/stylecalc/08-beautiful-themes.webp";
import shot09 from "@/assets/stylecalc/09-daily-use.webp";
import shot10 from "@/assets/stylecalc/10-calculate-easily.webp";

/**
 * StyleCalc — content mirrored from the official Google Play listing.
 * Source of truth: https://play.google.com/store/apps/details?id=com.fluttercraftone.stylecalc
 *
 * Screenshots and the app icon below are the real published Play Store assets
 * (downloaded from the listing). To swap in newer store assets, replace the
 * files in src/assets/stylecalc/ or point `src` at the official image URL.
 */

export const styleCalc = {
  name: "StyleCalc",
  developer: "Dhruvil Bhingradiya",
  platform: "Android",
  category: "Tools",
  packageName: "com.fluttercraftone.stylecalc",
  contentRating: "Rated for 3+",
  downloads: "10+ downloads",
  ads: "Contains ads",
  status: "Published on Google Play",
  lastUpdated: "January 13, 2026",
  playUrl:
    "https://play.google.com/store/apps/details?id=com.fluttercraftone.stylecalc",
  privacyUrl: "https://sites.google.com/view/stylecalc-privacy/home",
  supportEmail: "fluttercraftone@gmail.com",
  icon: appIcon,
  tagline: "A customizable calculator that matches your style.",
  description: [
    "StyleCalc is a modern and customizable calculator designed to match your style.",
    "Choose from beautifully crafted themes including Minimal, NeoCalc, Elegant, Liquid Glass, Dark Mode, and more. Whether you prefer a clean aesthetic or a bold neon look, StyleCalc transforms your daily calculations into a smooth and visually pleasing experience.",
  ],
  features: [
    "Multiple beautiful themes",
    "Minimal, Glass, Neon, Elegant and Dark styles",
    "Clean and premium UI",
    "Fast and smooth calculations",
    "Light and dark mode",
    "Simple and easy-to-use interface",
    "Large buttons",
    "Clear calculator display",
    "Customizable visual experience",
    "Designed for students and professionals",
    "Useful for everyday calculations",
  ],
  highlights: [
    {
      icon: "palette",
      title: "Multiple Themes",
      body: "Explore different visual styles including Minimal, NeoCalc, Elegant, Liquid Glass, Dark Mode and more.",
    },
    {
      icon: "zap",
      title: "Fast Calculations",
      body: "Designed for quick and smooth everyday calculations.",
    },
    {
      icon: "moon",
      title: "Light & Dark Mode",
      body: "Switch between light and dark experiences.",
    },
    {
      icon: "sparkles",
      title: "Premium UI",
      body: "Clean, modern and distraction-free interface.",
    },
    {
      icon: "smartphone",
      title: "Simple Experience",
      body: "Large buttons, clear display and intuitive controls.",
    },
  ],
  builtWith: [
    { name: "Flutter", note: "Cross-platform UI framework" },
    { name: "Dart", note: "Application language" },
    { name: "SharedPreferences", note: "Local theme persistence" },
    { name: "math_expressions", note: "Expression parsing & evaluation" },
  ],
  dataSafety: ["No data shared with third parties", "No data collected"],
  screenshots: [
    { src: shot06, alt: "StyleCalc screenshot — Fast and accurate results" },
    { src: shot07, alt: "StyleCalc screenshot — Built for perfect accuracy" },
    { src: shot08, alt: "StyleCalc screenshot — Beautiful calculator themes" },
    { src: shot09, alt: "StyleCalc screenshot — Designed for daily use" },
    { src: shot10, alt: "StyleCalc screenshot — Calculate everything easily" },
  ],
} as const;

export const styleCalcDetails: { label: string; value: string }[] = [
  { label: "App", value: styleCalc.name },
  { label: "Platform", value: styleCalc.platform },
  { label: "Category", value: styleCalc.category },
  { label: "Package", value: styleCalc.packageName },
  { label: "Developer", value: styleCalc.developer },
  { label: "Content rating", value: styleCalc.contentRating },
  { label: "Downloads", value: styleCalc.downloads },
  { label: "Ads", value: styleCalc.ads },
  { label: "Status", value: "Published" },
  { label: "Last updated", value: styleCalc.lastUpdated },
];
