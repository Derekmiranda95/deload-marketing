export const APP_URL =
  (import.meta.env.PUBLIC_APP_URL as string | undefined) ??
  "https://app.deloadapp.io";

export const API_BASE_URL =
  (import.meta.env.PUBLIC_API_BASE_URL as string | undefined) ??
  "https://app.deloadapp.io";

const trimmedAppUrl = APP_URL.replace(/\/+$/, "");
export const SIGN_IN_URL = `${trimmedAppUrl}/sign-in`;
export const SIGN_UP_URL = `${trimmedAppUrl}/sign-up`;

export const TURNSTILE_SITE_KEY =
  (import.meta.env.PUBLIC_TURNSTILE_SITE_KEY as string | undefined) ?? "";

export const SITE_NAME = "deload";

export const SITE_DESCRIPTION =
  "The AI coaching platform for coaches who write their own training. Generate block-aware programs, edit in plain English, run your roster, and ship the program straight to your athletes' phones \u2014 all in one place.";

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// Three pillars used on the home page overview.
export const pillars = [
  {
    eyebrow: "Build",
    title: "Programs that sound like you wrote them.",
    body: "AI generation, plain-English edits, mesocycles \u00b7 deloads \u00b7 peaks, and a templates library you can pull from. RPE, RIR, and %1RM live inside the same block.",
  },
  {
    eyebrow: "Run",
    title: "A roster you can actually keep up with.",
    body: "Triage who needs attention, send structured check-ins, message athletes in-app, and catch high-RPE or off-target weeks before they become a problem.",
  },
  {
    eyebrow: "Ship",
    title: "An athlete app athletes actually open.",
    body: "Today's session on the phone, fast logging with RPE and PRs, an in-app chat assistant for quick questions \u2014 and you stay the coach of record.",
  },
];

// "What this absorbs for you" \u2014 the moments deload quietly takes off your plate.
export const absorbed = [
  {
    when: "Sunday night",
    what: "Writing next week's programs for every athlete on the roster.",
  },
  {
    when: "Tuesday, 9pm",
    what: "Rewriting a block because someone tweaked their back at Monday's session.",
  },
  {
    when: "Thursday morning",
    what: "Answering \u201Cwhat's my weight today?\u201D over text before the gym opens.",
  },
  {
    when: "Two weeks out from a meet",
    what: "Pulling intensities back into a peak without losing the work that got them there.",
  },
];

// Concrete capability bullets used on the home page "Built for real programming" block.
export const proofPoints = [
  "Powerlifting, weightlifting, hypertrophy, sport-specific \u2014 plus masters, HRT-aware, and post-surgical programming.",
  "RPE, RIR, and %1RM \u2014 mix them inside the same block without breaking the math.",
  "Mesocycles, deloads, and peaks that match the athlete in front of you.",
  "Edit any session inline; downstream weeks adjust to match.",
  "Drag-and-drop days and exercises; bulk-edit across sessions.",
  "Full edit history with one-click undo \u2014 you stay the coach of record.",
];

// Full feature inventory, grouped by who uses it. Drives the /features page.
export const featureGroups = [
  {
    eyebrow: "For the coach \u2014 programming",
    title: "Write the block, then let the block write itself.",
    body: "Generate a first draft from a plain-English brief, then refine in chat. Block-aware periodization, mixed intensity schemes, and a templates library you can pull from \u2014 not a workout-tracker pretending to coach.",
    points: [
      "AI program generation from a free-text brief \u2014 sport, level, equipment, constraints.",
      "Chat-based refinement: \u201Cmake Wednesday upper-body focused,\u201D \u201Ccut volume 15% next week.\u201D",
      "Density planning across heavy / accessory / deload / conditioning day roles.",
      "Templates and protocols catalogue you can duplicate or apply as a block.",
      "Mesocycles, deloads, peaks, and taper logic that matches the meet date.",
    ],
  },
  {
    eyebrow: "For the coach \u2014 editing",
    title: "Plain-English edits that ripple.",
    body: "Tell it the constraint \u2014 a tweaked back, a missed week, a meet that just moved \u2014 and the affected weeks rewrite themselves. The rest of the block stays exactly where you left it.",
    points: [
      "Inline grid for sets, reps, RPE, rest, tempo, and cues.",
      "Same-family swaps and exercise substitutions keep the intent intact.",
      "Drag-and-drop to reorder days or move exercises between sessions.",
      "Multi-session bulk editing and week / day duplication.",
      "Full edit history with one-click undo and revert.",
    ],
  },
  {
    eyebrow: "For the coach \u2014 roster",
    title: "Triage the roster, don't refresh it.",
    body: "A high-level view that surfaces who needs attention this week \u2014 by logging consistency, divergence from target, or sustained high RPE. Then deal with each athlete one click deep.",
    points: [
      "Roster dashboard with \u201CNeeds attention\u201D triage and headshots.",
      "Per-athlete history: PRs, RPE trends, check-ins, edit log.",
      "Automatic high-RPE advisories and target-divergence alerts.",
      "Structured check-ins (in-app or email) that land in your inbox.",
      "Per-athlete distance units \u2014 lbs / mi or kg / m \u2014 set once.",
    ],
  },
  {
    eyebrow: "For the coach \u2014 communication",
    title: "Messaging that doesn't live in your texts.",
    body: "Athletes message in-app. You see the session that triggered the question. The AI assistant handles the easy ones so you can spend your replies on the real conversations.",
    points: [
      "In-app inbox tied to the specific session or week in question.",
      "Welcome-note automation when an athlete first joins.",
      "Athlete-side AI assistant for \u201Cwhat's my weight today?\u201D-class questions.",
      "Read receipts and unread badges that don't gamify you.",
    ],
  },
  {
    eyebrow: "For the athlete \u2014 mobile",
    title: "An app athletes actually open.",
    body: "Clean, quiet, built around the next set \u2014 not gamified streaks. Athletes see today's session, log it in seconds, and message you when something's off.",
    points: [
      "iOS and Android via the Deload mobile app.",
      "Fast in-gym logging: sets, reps, weight, RPE \u2014 with automatic PR detection.",
      "Today's session up top, with warm-up, main work, accessories, and cool-down clearly laid out.",
      "Profile photo, common-lift trends, and a chat tab tied to their coach.",
      "Auto-regulated targets based on the previous session's feel and performance.",
    ],
  },
  {
    eyebrow: "For the team",
    title: "Org-ready when you're not the only coach.",
    body: "Bring on additional coaches, share defaults across the team, and keep an audit trail of every admin action \u2014 without losing the per-coach voice the AI learned.",
    points: [
      "Invite coaches single or via CSV; track who's accepted.",
      "Org-level defaults for automations and preferences \u2014 with per-coach overrides.",
      "Admin impersonation for support, every action audit-logged.",
      "Per-org branding and shared protocol library.",
    ],
  },
  {
    eyebrow: "Billing",
    title: "Get paid without leaving the app.",
    body: "Built-in Stripe billing for athlete packages \u2014 deposits, late-cancel fees, and automated charges \u2014 so the money side stops being a second tool.",
    points: [
      "Stripe-backed athlete packages and subscriptions.",
      "Deposit capture and late-cancel fee automation.",
      "Self-serve invoicing for one-off charges.",
    ],
  },
  {
    eyebrow: "Populations",
    title: "Programming that respects who's in front of you.",
    body: "Retrieval-backed protocols for the populations general tools quietly skip. The AI pulls the right protocol into the prompt so the program isn't generic.",
    points: [
      "Powerlifting, weightlifting, hypertrophy, and sport-specific prep.",
      "Masters athletes, bone-density-aware programming, and fall-prevention GPP.",
      "Trans athletes across the HRT spectrum (on / off / pre / post-surgical).",
      "Hypogonadal men with or without TRT, including post-prostate-cancer cases.",
    ],
  },
];

export const faqs = [
  {
    q: "Does it really sound like me?",
    a: "It learns from how you actually write \u2014 your phrasing, your set/rep cadence, the cues you reach for. The first program is a starting point; it adapts as you edit.",
  },
  {
    q: "What about athletes with quirks \u2014 meet preps, injuries, in-season volume cuts?",
    a: "All of that is in scope. You tell it the constraint in plain English and it rebuilds the affected weeks; the rest of the block stays.",
  },
  {
    q: "What does the athlete actually see?",
    a: "A clean mobile app with today's session, fast logging, and a chat tab tied to you. There's also an in-app AI assistant for quick questions so you're not answering \u201Cwhat's my weight today?\u201D at 7am.",
  },
  {
    q: "Do I have to import my whole roster to try it?",
    a: "No. Sign up, create one athlete, generate one block, and see whether the voice is right. No spreadsheet import, no setup call.",
  },
  {
    q: "What's the pricing?",
    a: "Free during private beta \u2014 no card required. When public pricing lands you'll see it inside the app before anything is charged.",
  },
];
