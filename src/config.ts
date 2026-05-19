export const APP_URL =
  (import.meta.env.PUBLIC_APP_URL as string | undefined) ??
  "https://app.deloadapp.io";

export const SITE_NAME = "deload";

export const SITE_DESCRIPTION =
  "Programming software for coaches who write their own training. deload absorbs the Sunday-night planning, the Tuesday rewrites, and the morning text answers — so you can keep the relationship.";

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

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

export const proofPoints = [
  "Powerlifting, weightlifting, hypertrophy, sport-specific.",
  "RPE, RIR, and %1RM \u2014 mix them inside the same block.",
  "Mesocycles, deloads, and peaks that match the athlete in front of you.",
  "Edit any session inline; the rest of the block adjusts to match.",
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
    q: "What's the pricing?",
    a: "Free during private beta \u2014 no card required. When public pricing lands you'll see it inside the app before anything is charged.",
  },
];
