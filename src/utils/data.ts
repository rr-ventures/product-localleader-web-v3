const services = [
  {
    title: "Become #1 — Not Just Get More Leads",
    features: [
      "Dominate your local area on Google",
      "Be the first name locals call",
      "Leave competitors behind permanently",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "No Ad Spend Required",
    features: [
      "Everything organic — no Google Ads budget",
      "No Facebook spend on top",
      "Your monthly package does the work",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-6 h-6"><path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.5 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>`,
  },
  {
    title: "Build a Business Asset",
    features: [
      "Rankings that compound over time",
      "You own your Google presence",
      "Worth more than just your time on the tools",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`,
  },
  {
    title: "Done For You, Every Month",
    features: [
      "We handle everything — you just do your trade",
      "Monthly optimisation and reporting",
      "No marketing knowledge required",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-6 h-6"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`,
  },
  {
    title: "Results in the First 30 Days",
    features: [
      "Most clients see movement within a month",
      "Some get calls within 2 weeks",
      "No waiting 6 months for anything to happen",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="w-6 h-6"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V256c0-13.3-10.7-24-24-24z"/></svg>`,
  },
  {
    title: "You Keep the Results",
    features: [
      "Organic rankings stay even if you pause",
      "Reviews don't vanish when you stop paying",
      "No lock-in — stay because it works",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="w-6 h-6"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>`,
  },
];

const solutions = [
  {
    title: "Top of Google Maps",
    description:
      "When locals search nearby, we position your business in the Google Maps top 3 so you're seen first and called first. More visibility means more ready-to-book enquiries.",
    icon: "map",
  },
  {
    title: "First Page of Google",
    description:
      "We execute SEO strategy each month, build and optimise content, and improve technical signals so your site ranks higher for the searches that matter in your area.",
    icon: "search",
  },
  {
    title: "5-Star Review Engine",
    description:
      "We set up a consistent review system that turns happy clients into fresh 5-star proof. Strong review volume and quality increase trust before a customer even calls.",
    icon: "star",
  },
];

const solutionsBusiness = [
  {
    title: "Top of Google Maps",
    description:
      "When nearby customers search, we position your business in the Google Maps top 3 so you're discovered first and contacted first. Visibility drives qualified enquiries.",
    icon: "map",
  },
  {
    title: "First Page of Google",
    description:
      "We run a monthly SEO strategy, publish and improve ranking-focused content, and strengthen technical SEO so your business climbs higher in local search results.",
    icon: "search",
  },
  {
    title: "5-Star Review Engine",
    description:
      "We build a simple review system that consistently collects recent 5-star feedback from happy clients. More social proof builds trust and improves conversion.",
    icon: "star",
  },
];

const faqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most businesses see movement in the first 30 days. Some get calls within 2 weeks just from the Google Maps work alone. We won't promise you overnight miracles, but we also won't string you along for six months before anything happens.",
  },
  {
    question: "I've been burned by marketing agencies before. Why is this different?",
    answer:
      "We understand — most tradies have been. The difference is what we build. Your Google ranking, your Maps presence, your reviews — these are assets that belong to you. They don't disappear overnight if you stop working with us. We're not renting you leads. We're building something permanent.",
  },
  {
    question: "Is the monthly fee really worth it?",
    answer:
      "We currently offer a founding rate well below standard pricing (see the pricing section). What's your average job worth? For most tradies, one extra quality job from Google covers the monthly fee. Unlike ads, there's no extra ad spend stacked on top. You're investing in maps rankings, SEO growth, and a review engine that compounds over time.",
  },
  {
    question: "Can't I just do this myself?",
    answer:
      "You could. Most tradies try for a week, get flat out with real jobs, and it never gets done. We do this full time, every week, for trade businesses specifically. The tools, the process, and the consistency are already built — you just get the results.",
  },
  {
    question: "I'm too busy right now — do I really need more work?",
    answer:
      "The best time to build this is when you're busy. Word of mouth dries up. Seasons change. The pipeline you build now is what keeps your phone ringing when things slow down. Don't wait until it's quiet to start.",
  },
  {
    question: "What trades do you work with?",
    answer:
      "Plumbers, electricians, builders, landscapers, concreters, painters, roofers, tilers — any trade that relies on local customers finding them on Google. If your customers search for you online, we can help.",
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "No lock-in. Month-to-month. You stay because it works, not because you're trapped. We're confident enough in what we do that we don't need to lock you in to keep you.",
  },
  {
    question: "What exactly do you do each month?",
    answer:
      "Every month we run your local SEO strategy, build and optimise ranking-focused content, improve your on-site SEO, manage your Google Business Profile, run your review engine, track rankings, and report clearly on what moved and what's next.",
  },
  {
    question: "Do I need a website to work with you?",
    answer:
      "No — either way works. If you already have a website, we'll optimise it. If you don't, our in-house web design team can design a brand-new site for you and make sure it's built to rank properly.",
  },
  {
    question: "How is Local Leader different from other digital marketing agencies?",
    answer:
      "Most agencies promise more leads. We promise you become the dominant tradie in your area — the one everyone calls first, the one competitors can't touch. We're also 100% organic — no Google Ads, no Facebook spend on top of your retainer. And we work exclusively with Australian trade businesses, so we know your market.",
  },
];

const faqsBusiness = [
  {
    question: "How long until I see results?",
    answer:
      "Most businesses see movement in the first 30 days. Some see enquiry improvements even earlier from Maps work. We don't promise overnight miracles, but we also don't drag things out without traction.",
  },
  {
    question: "I've been burned by marketing agencies before. Why is this different?",
    answer:
      "We build durable digital assets you keep: your rankings, your Maps visibility, and your review profile. We're not renting you short-term leads. We're building long-term local authority.",
  },
  {
    question: "Is the monthly fee really worth it?",
    answer:
      "We currently offer a founding rate well below standard pricing (see the pricing section). What's one new quality client worth to your business? For most service providers, one extra client from Google covers the monthly fee. You're investing in maps rankings, SEO growth, and review authority that compounds.",
  },
  {
    question: "Can't I just do this myself?",
    answer:
      "You can, but consistency is the hard part. Most owners start, then client delivery takes over. We do this every month with a proven process so your growth doesn't stall.",
  },
  {
    question: "I'm too busy right now — do I really need more work?",
    answer:
      "Busy periods are exactly when you should strengthen visibility. Demand shifts, referrals fluctuate, and seasons change. Building your pipeline now keeps enquiries steady when things cool down.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with local service businesses that rely on nearby customers finding them on Google. If your ideal clients search online before reaching out, we can help.",
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "No lock-in. Month-to-month. You stay because the results are working, not because you're stuck in a long agreement.",
  },
  {
    question: "What exactly do you do each month?",
    answer:
      "Each month we run your local SEO strategy, create and optimise ranking content, improve your on-site SEO, manage your Google Business Profile, run your review engine, track ranking movement, and report outcomes clearly.",
  },
  {
    question: "Do I need a website to work with you?",
    answer:
      "No — either way is fine. If you already have a website, we'll optimise it. If you don't, our in-house web design team can build a professional site ready for SEO growth.",
  },
  {
    question: "How is Local Leader different from other digital marketing agencies?",
    answer:
      "Most agencies sell activity. We focus on becoming the obvious local choice in your market through Maps, Search, and Reviews. We stay organic-first and execution-focused, with reporting in plain English.",
  },
];

const solutionsAgency = [
  {
    title: "Top of Google Maps",
    description:
      "When a potential vendor searches 'best real estate agent near me,' Google shows 3 results on the map. If you're not in those top 3, you're losing listing presentations you didn't even know you were invited to. We get you there — and keep you there.",
    icon: "map",
  },
  {
    title: "First Page of Google",
    description:
      "When sellers search 'property appraisal [suburb]' or 'sell my house [suburb],' you show up first. Not the franchise down the street. Not a comparison site. You. Vendor-intent organic traffic that brings appraisal requests every day.",
    icon: "search",
  },
  {
    title: "5-Star Review Engine",
    description:
      "We build you a system that generates real Google reviews from happy clients — consistently, automatically. 84% of vendors shortlist agents based on their Google presence before making a single phone call. More reviews means more trust means more appraisals.",
    icon: "star",
  },
];

const testimonialsAgency = [
  {
    quote:
      "Within 6 weeks of optimising my Google profile, I was getting 3–4 appraisal requests a week from people who found me directly — not through OpenAgent.",
    name: "James R.",
    trade: "Listing Agent",
    location: "Northern Beaches, NSW",
    reviewAge: "1 week ago",
  },
  {
    quote:
      "I'd been paying $300/month to RateMyAgent and getting nothing but price-shoppers. Now vendors call me because I'm the top-ranked agent in my suburb on Google.",
    name: "Michelle K.",
    trade: "Buyer's Agent",
    location: "Gold Coast, QLD",
    reviewAge: "2 weeks ago",
  },
  {
    quote:
      "We went from 22 Google reviews to 89 in three months. My phone rings before I even start prospecting in the morning.",
    name: "Daniel S.",
    trade: "Sales Agent",
    location: "Melbourne, VIC",
    reviewAge: "3 weeks ago",
  },
  {
    quote:
      "I'd been burned by two generic agencies before. These guys actually understand real estate — and showed me the data from day one. No BS.",
    name: "Sarah L.",
    trade: "Independent Agent",
    location: "Brisbane, QLD",
    reviewAge: "1 month ago",
  },
];

const faqsAgency = [
  {
    question: "How long until I see results?",
    answer:
      "Google Maps rankings typically start moving within 4–6 weeks. The review engine starts generating new reviews from your first completed transactions after setup. Unlike portal ads or comparison site fees, every month of work compounds — your rankings get stronger over time, not weaker.",
  },
  {
    question: "I've been burned by marketing agencies before. Why is this different?",
    answer:
      "We understand — most agents have. The difference is what we measure. You'll get a monthly rank map showing exactly where you sit for vendor-intent keywords like 'best real estate agent in [suburb]' and 'property appraisal [suburb]' across your service area. No vague impressions reports. No vanity metrics. We're month-to-month — if we're not delivering, you walk.",
  },
  {
    question: "Is the monthly fee really worth it?",
    answer:
      "We currently offer a founding rate well below standard pricing (see the pricing section). One extra listing from an inbound Google lead covers many months of the service fee. At $900K sale price and 2.2% commission, that's roughly $20K GCI from a single transaction. Compare that to the $3,000–$4,000/month agents already pay in portal fees that don't build any lasting digital asset. The ROI math is asymmetric.",
  },
  {
    question: "I get all my business from referrals — do I really need this?",
    answer:
      "Referrals are unscalable and unpredictable. They dry up during slow markets and when you stop actively networking. Agents who rely solely on referrals have no inbound engine running when they need it most. Competitors who invest in local SEO are compounding their advantage every month — while referral-dependent agents are grinding outbound prospecting.",
  },
  {
    question: "Can't I just do this myself?",
    answer:
      "You could. Most agents try, then a listing presentation takes over, then auction prep, then settlement follow-ups — and it never gets done. We run this process every month with a system built specifically for real estate. The consistency is the asset.",
  },
  {
    question: "I'm too busy right now — do I really need more appraisals?",
    answer:
      "The best time to build this is when you're busy. Market conditions shift, vendor confidence fluctuates, and the pipeline you build now is what keeps your phone ringing during the next slow patch. Don't wait until it's quiet to start.",
  },
  {
    question: "What types of agents do you work with?",
    answer:
      "Listing agents, buyer's agents, boutique agency operators, and independent agents across Australia. If you serve a local area and want more inbound leads from vendor-intent Google searches rather than chasing comparison site referrals, we can help.",
  },
  {
    question: "Do I need to sign a contract?",
    answer:
      "No lock-in. Month-to-month from day one. We're confident enough in what we do that we don't need to trap you in a 12-month retainer to keep your business.",
  },
  {
    question: "What exactly do you do each month?",
    answer:
      "Every month we run your local SEO strategy, build and optimise vendor-intent content for your suburbs, manage your Google Business Profile, run your review engine, track keyword rankings, and send you a plain-English rank map showing exactly where you sit across your service area.",
  },
  {
    question: "How is Local Leader different from other digital marketing agencies?",
    answer:
      "Most agencies apply generic SEO to agent websites and report on traffic. We focus on vendor-intent keyword dominance — the searches that actually generate appraisal requests, not buyer inquiries. We're real estate specific, organic-first, and we measure success by appraisal volume, not website traffic.",
  },
];

export { services, solutions, solutionsBusiness, faqs, faqsBusiness, solutionsAgency, testimonialsAgency, faqsAgency };
