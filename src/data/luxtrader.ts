import homeFree from "@/assets/luxtrader/home-free-courses.jpg";
import homePromo from "@/assets/luxtrader/home-promotions.jpg";
import courses from "@/assets/luxtrader/courses.jpg";
import courseFree from "@/assets/luxtrader/course-details-free.jpg";
import coursePremium from "@/assets/luxtrader/course-details-premium.jpg";
import dailyTips from "@/assets/luxtrader/daily-tips.png";
import profile from "@/assets/luxtrader/profile.jpg";
import splash from "@/assets/luxtrader/splash.jpg";
import adminAnalytics from "@/assets/luxtrader/admin/analytics.jpg";
import adminCourses from "@/assets/luxtrader/admin/courses.jpg";
import adminLessons from "@/assets/luxtrader/admin/lessons.jpg";
import adminEnrollments from "@/assets/luxtrader/admin/enrollments.jpg";
import adminStudents from "@/assets/luxtrader/admin/students.jpg";
import adminDailyTips from "@/assets/luxtrader/admin/daily-tips-admin.jpg";
/**
 * Lux Trader — production trading-education platform.
 * Flutter app + custom admin panel + Node.js backend & video pipeline + Firebase.
 * No download counts, revenue figures or invented metrics anywhere.
 */

export const luxTrader = {
  id: "luxtrader",
  title: "Lux Trader",
  shortTitle: "Lux Trader",
  tagline: "Trading education platform",
  status: "Client delivery",
  category: "Full-Stack" as const,
  platform: "Flutter · Admin panel · Node.js · Firebase",
  role: "Full-stack product developer",
  client: "Delivered for a client",
  domain: "Trading education / EdTech / FinTech",
  tags: ["Flutter", "Node.js", "Firebase", "HLS", "Razorpay"],
  link: "https://play.google.com/store/apps/details?id=com.pixellink.luxtrader",
  hero: "A production-grade trading education ecosystem combining a Flutter mobile application, custom admin panel, Node.js video-processing infrastructure, Firebase backend services, HLS streaming, dynamic payments and analytics.",
  overview:
    "Lux Trader is an online trading education platform where users learn through structured courses, video lessons and daily trading tips across stock market, forex, cryptocurrency and options. The platform supports both free and paid courses, with purchases handled through Razorpay.",
  delivery: [
    "Flutter mobile application",
    "Custom admin panel",
    "Node.js backend / admin API",
    "Node.js video-processing server",
    "Firebase backend services",
    "Dynamic payment configuration",
    "HLS video delivery",
    "Daily tips & notifications",
  ],

  highlights: [
    {
      title: "Flutter mobile app",
      body: "Production learning application with structured courses, secure video learning, progress tracking, payments and notifications.",
    },
    {
      title: "Custom admin panel",
      body: "Centralised platform management for courses, lessons, users, payments, analytics, tips and promotional content.",
    },
    {
      title: "Node.js video infrastructure",
      body: "Dedicated Node.js backend for video processing, transcoding and HLS generation.",
    },
    {
      title: "HLS streaming",
      body: "High-quality source videos converted into multiple resolutions and HLS streams for efficient video delivery.",
    },
    {
      title: "Dynamic payments",
      body: "Payment configuration managed dynamically from the admin panel without hardcoding account configuration into the mobile application.",
    },
    {
      title: "Firebase backend",
      body: "Authentication, Firestore, Storage, Cloud Functions and Messaging integrated into the production architecture.",
    },
    {
      title: "Learning analytics",
      body: "Course progress, user activity, payment information and platform analytics available through the admin dashboard.",
    },
  ],

  /** Section 2 — mobile screens (empty, screenshot-ready frames). */
  appScreens: [
    { label: "Home", note: "Promotional sections and featured learning, driven from the admin panel." },
    { label: "Course listing", note: "Free and paid courses grouped by learning area." },
    { label: "Course details", note: "Curriculum, lesson list, pricing and enrolment state." },
    { label: "Lesson / video", note: "HLS playback with selectable quality variants." },
    { label: "Progress", note: "Continue learning from the last watched lesson." },
    { label: "Daily tips", note: "Educational trading tips published from the admin panel." },
    { label: "Payment", note: "Razorpay checkout driven by dynamic backend configuration." },
    { label: "Profile", note: "Account, purchased courses and learning activity." },
  ],

  productExperience: [
    "Discover courses across stock market, forex, crypto and options",
    "Learn through structured lessons inside each course",
    "Watch HD video lessons with quality options",
    "Track progress and continue from where learning stopped",
    "Access free courses and purchase premium ones",
    "Receive daily educational trading tips",
    "Receive notifications for new tips and content",
    "Manage profile, purchased courses and reviews",
  ],

  /** Section 3 — admin panel screens (empty laptop frame). */
  adminScreens: [
    { label: "Dashboard", note: "Platform activity at a glance." },
    { label: "Analytics", note: "User growth, enrolments, learning activity and payment information." },
    { label: "Users", note: "Registered users, enrolled courses, progress and purchases." },
    { label: "Courses", note: "Create, edit, price, publish and unpublish courses." },
    { label: "Lessons", note: "Upload videos and thumbnails, order lessons, track processing status." },
    { label: "Payments", note: "Payment records and platform payment information." },
    { label: "Payment configuration", note: "Switch the active payment configuration without an app release." },
    { label: "Promotions", note: "Banners, brand ads, upcoming courses and home-page content." },
  ],

  videoPipeline: [
    "1080p source video",
    "Node.js processing server",
    "720p / 480p / other variants",
    "HLS generation",
    "Firebase Storage",
    "Flutter HLS player",
  ],
  videoNote:
    "The dedicated Node.js server handled the computationally intensive transcoding and HLS packaging. Firebase Storage was used for storing and delivering the processed assets — Cloud Functions were never the transcoding layer.",

  paymentFlow: [
    "Admin panel",
    "Dynamic payment configuration",
    "Secure backend",
    "Flutter application",
    "Razorpay",
  ],
  paymentNote:
    "Payment configuration could be updated from the admin panel without rebuilding and republishing the mobile application. Sensitive values stayed server-side — never bundled into the Flutter build.",

  firebase: [
    { label: "Authentication", body: "User accounts, sign-in and session handling." },
    {
      label: "Cloud Firestore",
      body: "Users, courses, lessons, progress, payments, payment configuration, tips and home-page content.",
    },
    { label: "Storage", body: "Video assets, HLS segments, thumbnails and images." },
    { label: "Cloud Functions", body: "Firebase-side serverless operations — not video transcoding." },
    { label: "Cloud Messaging", body: "Notifications and daily educational-tip delivery." },
  ],

  contentManagement: [
    "Courses and pricing",
    "Lessons, videos and ordering",
    "Daily trading tips",
    "Brand advertisements",
    "Promotional banners",
    "Upcoming course promotions",
    "Featured home-page content",
  ],
  contentFlow: ["Admin panel", "Content management", "Firestore", "Flutter home page"],
  tipsFlow: ["Admin creates tip", "Backend / Firebase", "Notification", "User receives update", "Tip in app"],

  architecture: [
    {
      layer: "Client",
      items: ["Flutter mobile application"],
    },
    {
      layer: "Backend",
      items: ["Node.js backend / admin API", "Node.js video processing"],
    },
    {
      layer: "Cloud infrastructure",
      items: [
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Storage",
        "Cloud Functions",
        "Firebase Messaging",
      ],
    },
  ],

  security: [
    "Sensitive configuration handled server-side, never inside the Flutter build",
    "Encryption applied to sensitive values before storage, with server-side use when required",
    "Node.js backend mediated secure configuration handling",
    "Firebase Functions used for required server-side Firebase operations",
  ],

  outcome:
    "From the mobile learning experience to administration, secure payments, video processing and cloud infrastructure, Lux Trader was delivered as a complete production-ready platform.",
  outcomePoints: [
    "Production Flutter application",
    "Custom admin panel",
    "Node.js backend",
    "Node.js video processing",
    "HLS streaming",
    "Firebase infrastructure",
    "Dynamic payment configuration",
    "Course management",
    "Lesson management",
    "User management",
    "Progress tracking",
    "Analytics",
    "Daily tips",
    "Notifications",
    "Dynamic promotional content",
  ],
};

/* ------------------------------------------------------------------ */
/* Real application screenshots                                        */
/* ------------------------------------------------------------------ */


export type LuxShot = {
  src: string;
  label: string;
  note: string;
  width: number;
  height: number;
  /** Screenshots taller than the device viewport scroll inside the frame. */
  long: boolean;
};

const shot = (
  src: string,
  label: string,
  note: string,
  width: number,
  height: number,
): LuxShot => ({ src, label, note, width, height, long: height / width > 2.35 });

export const luxShots = {
  homeFree: shot(
    homeFree,
    "Home — free learning",
    "Featured banner, popular courses and the free-course rail, all ordered from the admin panel.",
    1080,
    2400,
  ),
  homePromo: shot(
    homePromo,
    "Home — promotions",
    "The same home surface with premium courses and brand advertisement slots published by the admin.",
    1080,
    2400,
  ),
  courses: shot(
    courses,
    "Course catalogue",
    "Search with All / Free / Premium filters across stock market, forex, crypto and options.",
    1080,
    2400,
  ),
  courseFree: shot(
    courseFree,
    "Course details — free",
    "Free enrolment path: about, curriculum and locked-content states before enrolling.",
    1080,
    2400,
  ),
  coursePremium: shot(
    coursePremium,
    "Course details — premium",
    "Paid path with backend-driven pricing, discount and Razorpay checkout entry point.",
    1080,
    2400,
  ),
  dailyTips: shot(
    dailyTips,
    "Daily tips",
    "Admin-published educational tips delivered day by day, with push notifications.",
    853,
    1844,
  ),
  profile: shot(
    profile,
    "Profile",
    "Purchased courses, certificates, purchase history, downloads and account controls.",
    1080,
    2917,
  ),
  splash: shot(splash, "Brand launch", "Branded splash and identity used across the application.", 1080, 2400),
} as const;

/* ------------------------------------------------------------------ */
/* Admin panel screenshots (web · laptop frames)                       */
/* ------------------------------------------------------------------ */

export type LuxAdminShot = {
  src: string;
  label: string;
  note: string;
  width: number;
  height: number;
  /** Taller than the 16/10 laptop viewport → scrolls inside the screen. */
  long: boolean;
};

const adminShot = (
  src: string,
  label: string,
  note: string,
  width: number,
  height: number,
): LuxAdminShot => ({ src, label, note, width, height, long: height / width > 0.68 });

export const luxAdminShots: readonly LuxAdminShot[] = [
  adminShot(
    adminAnalytics,
    "Analytics",
    "Revenue, active students, enrolments and conversion, with revenue-over-time, lesson engagement and payment-method breakdowns.",
    1794,
    1077,
  ),
  adminShot(
    adminCourses,
    "Courses",
    "Full catalogue with level and visibility filters, pricing, lesson counts and publish state.",
    1794,
    932,
  ),
  adminShot(
    adminLessons,
    "Lessons",
    "Video lessons per course with duration and ordering, wired to the Node.js processing pipeline.",
    1794,
    932,
  ),
  adminShot(
    adminEnrollments,
    "Enrolments",
    "Course purchases granting access, with amount paid, learner progress and status.",
    1794,
    932,
  ),
  adminShot(
    adminStudents,
    "Students",
    "Registered learners with contact details, activity recency and account status.",
    1794,
    983,
  ),
  adminShot(
    adminDailyTips,
    "Daily tips / broadcasts",
    "One-way broadcast composer used to publish educational tips and push them to every learner.",
    1794,
    932,
  ),
];
