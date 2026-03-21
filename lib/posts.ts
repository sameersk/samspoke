export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  readingTime: string;
  category: string;
  featured: boolean;
  image: string;
  content: string;
}

const posts: Post[] = [
  {
    title: "Could You Over-Rely on Analytics?",
    slug: "over-relying-on-analytics",
    excerpt:
      "Data is definitive — or so we think. A deep dive into the cognitive biases that make even careful analysts see patterns that aren't there, and what to do about it.",
    date: "March 21, 2026",
    author: "Sameer",
    readingTime: "7 min read",
    category: "Data & Analytics",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
    content: `
      <p>I'm someone who looks to data and numbers far more often than most people around me. Even for simple daily questions — say, clothing choices — I'm swayed more by large-scale studies that show correlations between a pattern and how it's perceived than by a garment's flashiness. I feel confident making decisions for myself (and advising others) only after I've seen the data speak. After all, when you see an analysis based on real-world data, how could it be misleading? If anything is misleading, it's intuition. Take air travel: many people feel nervous about flying purely for emotional reasons. If they leaned on data, they'd know air travel is in fact the safest mode of transport by far.</p>

      <p>Recently, someone planted a question in my head: is it possible to over-rely on analytics or data? At first, the question sounded counterintuitive. Data is definitive, and if it's reliably sourced, it simply reports the truth it observed. But dig a little deeper and you find strong cases where data — or, more precisely, our use of it — has misled people and caused large-scale impact.</p>

      <p>Consider eBay. For a long time, internal dashboards showed a tight correlation between the number of digital ads a user saw and the likelihood that user would purchase. Budgets swelled accordingly. Only when the company ran careful holdout tests did the flaw come into focus: many of those ads were being shown to people already on their way to buy — brand searchers and loyal users. Ad exposure and purchase moved together, but the ads weren't <em>causing</em> most of the purchases. Correlation had been mistaken for causation, and expensive decisions followed.</p>

      <p>Let's consider another example. A study of the incidence of kidney cancer in the 3,141 counties of the United States reveals a remarkable pattern. The counties in which the incidence of kidney cancer is lowest are mostly rural, sparsely populated, and located in traditionally Republican states in the Midwest, the South, and the West.</p>

      <p>If you take a moment to analyse these results, your mind might conclude that rural life — clean air and water, fresh food — protects against cancer. But now consider the counties with the <em>highest</em> incidence. They, too, tend to be mostly rural, sparsely populated, and in those same regions. A second, equally tempting story appears: perhaps rural poverty and limited access to care drive higher cancer rates. Both stories can't be true in the way they're framed.</p>

      <p>What's really going on is nothing more than the law of small numbers. When sample sizes are small — as they often are in sparsely populated counties — rates bounce around more because of randomness. Small samples produce more extreme values at both ends. The correct lesson is not that rural life prevents cancer or causes it, but that we should be wary of dramatic statistics from small denominators. Weighting by population, reporting uncertainty, or using hierarchical models that "shrink" noisy estimates toward the average tends to wash away the illusion.</p>

      <p>None of this means you need advanced statistical training to avoid these fallacies. What it highlights is a deeper issue: our brains are predisposed to find patterns in everything around us — even when none exist. Far too often, analysts and business managers alike fall prey to the mind's tendency to suppress doubt and craft narratives from whatever information is at hand. When we extract "insights" from charts and quantitative summaries, it can feel like rigorous, critical thinking — but it's often the brain's fast, pattern-seeking system drawing associations and spinning stories, while the hard-thinking, sceptical system that questions the numbers stays suppressed.</p>

      <p>This tendency has produced enormous losses: militaries seeing patterns where none exist and adopting ineffective strategies; large educational institutions launching sweeping reforms, only to discover they had done the opposite of improving outcomes for students.</p>

      <p>Despite this, managers and analysts today are under intense pressure to find "actionable insights," even when they're scarce. As a result, they end up building narratives out of randomness. And because finding patterns in random events enlists the same cognitive machinery a fortune-teller uses to read meaning into a shuffled deck of cards, the hurried insights that result can be about as reliable as a psychic reading — only far more expensive.</p>

      <h2>What to do about it</h2>

      <p>Many of these pitfalls can be avoided by being deliberately sceptical of the stories your mind has constructed. Start by framing questions causally: compared with doing nothing — or with the best alternative — what difference does this action actually make? Whenever possible, build a credible counterfactual with randomised experiments, staggered rollouts, or geo-holdouts. When you can't randomise, use quasi-experimental methods and be explicit about the assumptions they require. Measure incrementality rather than simple correlation.</p>

      <p>Ground the numbers in plain facts: always show how many cases you're basing a claim on, add a range rather than a single number, and when tiny groups are noisy, "borrow strength" from related groups to smooth the variance. Then stress-test the result — shift the date window, remove a quirky segment, try a different reasonable model. If the effect vanishes under small nudges, it isn't sturdy.</p>

      <p>But the spreadsheet alone is never enough. Crosscheck patterns against what users and frontline teams report. Make sure incentives don't reward metric-gaming. Above all, be frank about uncertainty — give a range and the assumptions behind it, not a single magic number. Starting with the caveats is proven to shift the audience's focus away from narrative-weaving and toward critical thinking about the numbers themselves.</p>

      <p>Data is one of the most powerful tools we have. The goal isn't to trust it less — it's to use it more honestly.</p>
    `,
  },
  {
    title: "Powerless Communication",
    slug: "powerless-communication",
    excerpt:
      "Counter-intuitively, the speakers who project hesitation and doubt often persuade more effectively than those who project authority. Here's the science behind it.",
    date: "March 14, 2026",
    author: "Sameer",
    readingTime: "6 min read",
    category: "Productivity",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop&q=80",
    content: `
      <p>For discussing communication, probably the best scenario to start with is debating. Debating is all about persuasion. Especially in the absence of the ability to prove the credibility of facts, it solely depends on your inherent ability to do so. Adjudicating (or judging) in a debate involves a panel persuading each other about who won — and then convincing the losing teams why they lost, all within 15 minutes. Hence it's very common to receive advice on adjudication that you <em>must</em> be confident and display authority so that listeners don't doubt you — they believe you instead.</p>

      <p>A few months ago, my college sent a contingent to participate in ABP (Asia's largest debating tournament), as we do every year. We also had a good number of breaks. But what was peculiar this time was that the participant who ended up breaking as an adjudicator was the opposite of what I just described. They often sounded neither courageous nor confident — rather, as a friend described it, nervous and timid. So this break seemed confusing to a lot of us.</p>

      <p>Was the adjudicator so good that despite their nervousness, everyone was willing to score them very well? That's probably part of it. But what's more likely is that these typically undesirable traits acted as an <em>advantage</em> rather than a deterrent in convincing people. This is an instance of what's commonly referred to as <strong>powerless communication</strong> — the opposite of powerful communication.</p>

      <p>Powerless communication involves expressing doubt and uncertainty rather than authority and confidence. It often involves markers such as:</p>

      <ul>
        <li><strong>Hesitations:</strong> "well," "um," "uh," "you know"</li>
        <li><strong>Hedges:</strong> "kinda," "sorta," "maybe," "probably," "I think"</li>
        <li><strong>Disclaimers:</strong> "this may be a bad idea, but…"</li>
        <li><strong>Tag questions:</strong> "that's interesting, isn't it?" or "that's a good idea, right?"</li>
        <li><strong>Intensifiers:</strong> "really," "very," "quite"</li>
      </ul>

      <p>This form of communication tends to benefit people in more than one scenario — which sounds counterintuitive. How can speaking less assertively, revealing weakness, and expressing doubt help you persuade others?</p>

      <p>What happens in practice is that when people expose the chinks in their armour, it gives listeners the impression that they are honest and not trying to be deceptive or overly polished. It creates the perception that they're trying to help and understand rather than being slick. This builds trust, and trust builds credibility. It can also foster admiration when a person puts forward ideas vulnerably rather than hiding behind a veneer of authority.</p>

      <h2>The competence caveat</h2>

      <p>But there's a critical twist: all of this only works when the speaker also demonstrates genuine competence. In an experiment led by psychologist Elliot Aronson, participants listened to quiz audition tapes — half featuring average performers, half featuring experts (those scoring above 90%). Participants overwhelmingly favoured the experts. But there was a wrinkle: a subset of the auditioners were made to stumble accidentally. When an average performer showed clumsiness, they were perceived as annoying. When an expert stumbled, participants found them <em>more</em> likeable — more human, less distant. The pratfall, as Aronson called it, made the highly competent person warmer without undermining their credibility.</p>

      <p>The implication is precise: powerless communication is a tool for the competent, not a crutch for the uncertain. If you genuinely know what you're talking about, showing a little vulnerability can close the gap between expertise and relatability. Without underlying competence, it just looks like uncertainty.</p>

      <h2>Questions over declarations</h2>

      <p>Another way people with powerless communication styles persuade more effectively is by expressing ideas as questions rather than declarations. Instead of saying "You should focus tonight," they might say "Are you willing to lose tonight?" When something is stated assertively, people tend to receive it with scepticism. Put forward as a question, people are more receptive — because the non-assertive framing allows the other person to feel they've arrived at the conclusion on their own terms, reducing psychological reactance. One study found that simply asking people "Are you going to vote?" increased their actual likelihood of voting by 41% — not because the question conveyed information, but because it invited reflection.</p>

      <p>Like the pratfall effect, this too has a condition: it only works when people feel good about the intent behind the question. A leading question from someone who seems manipulative produces the opposite effect.</p>

      <h2>Negotiation</h2>

      <p>When it comes to negotiation, powerful communicators tend to push hard — presenting arguments forcefully and trying to get the other side to capitulate. Powerless communicators do something different: they ask questions, acknowledge concerns, and look for shared ground. Rather than bargaining, they explore. This approach often leads to agreements that actually hold, because the other party doesn't feel steamrolled into a position they'll later resent.</p>

      <p>The takeaway isn't to become timid in all your conversations. It's to recognise that projecting confidence isn't the only path to persuasion. The most effective communicators know when to assert and when to step back — and it's often in those moments of stepping back that the deepest trust is built.</p>
    `,
  },
  {
    title: "Why AI Will Reshape Every Business in the Next 5 Years",
    slug: "why-ai-will-reshape-business",
    excerpt:
      "Artificial intelligence is no longer a technology story — it's a business strategy story. Here's why every company, regardless of industry, needs to reckon with it now.",
    date: "March 15, 2026",
    author: "Sameer",
    readingTime: "5 min read",
    category: "AI & Technology",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=600&fit=crop&q=80",
    content: `
      <p>For most of the past decade, artificial intelligence was framed as a technology problem. The question was whether the models were good enough, whether the data pipelines were reliable, whether the infrastructure could scale. Those questions are largely settled. The new question — the one that will determine winners and losers over the next five years — is whether your business can actually use AI to do something that matters.</p>

      <p>That shift from a technology question to a strategy question changes almost everything about how companies should be thinking about AI. It moves the conversation from the IT department to the boardroom, from capability-building to competitive positioning, from "can we do this?" to "should we do this, and how fast?"</p>

      <h2>The compression of competitive advantage</h2>

      <p>One of the most underappreciated effects of AI is how quickly it commoditises things that used to be sources of durable advantage. Writing, coding, analysis, customer service, basic design — these are increasingly things AI can do adequately, which means they can no longer serve as meaningful differentiators on their own.</p>

      <p>What this creates is a kind of floor-raising effect across industries. The baseline quality of content, software, and service rises, which means any competitive advantage has to come from somewhere above the baseline — from taste, from judgment, from relationships, from the parts of the value chain that require genuine human insight or institutional knowledge.</p>

      <h2>The talent reallocation problem</h2>

      <p>Companies that adopt AI effectively don't just get faster versions of what they already do. They get the opportunity to redirect human attention toward higher-leverage work. A lawyer who used to spend 30% of their time on contract review can now spend that 30% on client strategy. An analyst who used to build reports from scratch can now focus on the questions those reports should be answering.</p>

      <p>This is the opportunity — but it's also the challenge. Reallocating talent toward higher-leverage work requires knowing what higher-leverage work looks like, which requires strategic clarity that many organisations don't have. The companies that will benefit most from AI are the ones that already have a clear sense of where human judgment creates the most value.</p>

      <h2>The compounding effect</h2>

      <p>Perhaps the most important thing to understand about AI adoption is that it compounds. Companies that start integrating AI into their workflows now will, in two to three years, have meaningfully better models trained on their own data, meaningfully more refined processes, and meaningfully more experience at deploying AI responsibly. Companies that wait will face a gap that gets harder to close over time — not because the technology is inaccessible, but because the organisational learning required to use it well takes time that can't be compressed.</p>

      <p>This isn't an argument for rushing. It's an argument for starting deliberately, with clear hypotheses about where AI creates value in your specific context, and building from there. The goal isn't AI adoption for its own sake — it's sustainable competitive advantage, with AI as one of the tools that creates it.</p>
    `,
  },
  {
    title: "The Sustainability Paradox: Growth vs. Green",
    slug: "sustainability-paradox-growth-vs-green",
    excerpt:
      "Every company wants to be sustainable. Most also want to grow. These two goals aren't always compatible — and the companies being honest about that tension are the ones making real progress.",
    date: "March 8, 2026",
    author: "Sameer",
    readingTime: "6 min read",
    category: "Sustainability",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop&q=80",
    content: `
      <p>The sustainability commitments of most large companies share a common structure: ambitious long-term targets, a set of near-term initiatives that don't quite add up to those targets, and a great deal of careful language about "progress" and "pathways." The gap between the stated ambition and the actual trajectory is rarely discussed directly. This is a problem — not because the companies are insincere, but because the gap reflects a genuine tension that isn't being honestly confronted.</p>

      <p>The tension is this: most sustainability interventions, when done properly, increase costs in the short term. And most companies are under continuous pressure to grow revenue and manage costs. These two forces pull in opposite directions, and pretending they don't is one of the reasons corporate sustainability has a credibility problem.</p>

      <h2>The honest version of the problem</h2>

      <p>Consider what it actually takes to decarbonise a manufacturing operation. You need to audit your full value chain, which is expensive and time-consuming. You need to switch suppliers, which involves renegotiating contracts and accepting higher input costs. You need to invest in new equipment, which ties up capital. And you need to do all of this while maintaining the output levels your business model requires. The companies that have actually done this will tell you it's not a quick win — it's a multi-year, capital-intensive programme that requires genuine organisational commitment.</p>

      <p>The companies that haven't done this but want to appear to have done it will tell you about their carbon offsets and their renewable energy certificates. These aren't worthless, but they're also not the same thing as actually reducing emissions, and conflating the two is a form of dishonesty — even when it's well-intentioned.</p>

      <h2>What real progress looks like</h2>

      <p>The companies making the most credible progress on sustainability tend to share a few characteristics. First, they've accepted that some of their current business model may be incompatible with their sustainability commitments, and they're making structural changes rather than cosmetic ones. Second, they're being specific about what they're measuring and how — not hiding behind aggregate numbers that obscure the details. Third, they're willing to talk about the parts that are hard, including the tensions between growth and sustainability, rather than presenting only the successes.</p>

      <p>None of this is comfortable. It requires admitting that progress is slower than you'd like, that some goals may be incompatible, and that the path isn't entirely clear. But it's the only version of sustainability leadership that actually builds trust — with customers, with investors, and with the people inside the organisation who have to execute on these commitments every day.</p>
    `,
  },
  {
    title: "The Productivity Trap: Why Doing More Often Means Achieving Less",
    slug: "productivity-trap",
    excerpt:
      "The most productive people aren't the ones with the longest to-do lists. They're the ones who've figured out which tasks actually matter — and have the discipline to ignore the rest.",
    date: "March 1, 2026",
    author: "Sameer",
    readingTime: "5 min read",
    category: "Productivity",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=600&fit=crop&q=80",
    content: `
      <p>There's a version of productivity that looks like activity: back-to-back meetings, an inbox cleared by end of day, a to-do list that grows and shrinks in roughly equal measure. This version of productivity feels productive. It's rarely actually productive.</p>

      <p>The confusion between activity and output is one of the most persistent problems in knowledge work, and it's getting worse. The tools designed to make us more productive — email, Slack, project management software — are also extraordinarily effective at generating the kind of activity that crowds out the work that matters. Every notification is a small interruption. Every meeting is an hour that isn't being spent on something else. Every task on a list is a decision about whether it deserves to be there.</p>

      <h2>The asymmetry of output</h2>

      <p>Most knowledge workers have experienced the phenomenon where one day of focused, uninterrupted work produces more than an entire week of ordinary busyness. This isn't because they worked harder that day — it's because they worked on the right things, in the right conditions, without the constant context-switching that fragments attention and depletes decision-making capacity.</p>

      <p>This asymmetry — where a small number of high-quality hours can produce more than many low-quality ones — is one of the most important and least acted-upon facts about knowledge work. Acting on it requires doing fewer things, saying no more often, and accepting the discomfort of appearing less busy than your colleagues. These are not easy things to do in most organisations.</p>

      <h2>The list problem</h2>

      <p>To-do lists, in their standard form, are a technology for capturing tasks. They're not a technology for prioritising them, which is the harder and more important problem. A list of 50 items is not a productivity system — it's an anxiety system. It creates the illusion of control while making it harder to identify the two or three things that actually need to happen today.</p>

      <p>The people who manage this well tend to use some version of the same approach: they distinguish between tasks that move the needle on things that matter and tasks that maintain the status quo, and they protect time for the former even when the latter is more urgent. Urgency and importance are not the same thing, and treating them as if they are is one of the most reliable ways to spend years being busy without making meaningful progress on anything.</p>

      <h2>The permission problem</h2>

      <p>Ultimately, the productivity trap is partly an organisational problem. In most workplaces, busyness is rewarded more visibly than output — it's easier to see that someone is in meetings all day than it is to see that they've spent a week on something important that hasn't shipped yet. Fixing this requires managers who can distinguish between the two and who explicitly create the conditions for focused work, including protecting their team's time, being selective about what gets put in front of people, and modelling the behaviour themselves.</p>

      <p>The goal isn't to work less. It's to make the work that gets done worth doing.</p>
    `,
  },
  {
    title: "What Data Can't Tell You About Your Customers",
    slug: "what-data-cant-tell-you",
    excerpt:
      "Analytics can tell you what customers do. It struggles to tell you why. And the gap between those two things is where most product and marketing decisions go wrong.",
    date: "February 22, 2026",
    author: "Sameer",
    readingTime: "5 min read",
    category: "Data & Analytics",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80",
    content: `
      <p>Every product team has a version of the same argument. On one side: the data shows that users who complete onboarding are 3x more likely to retain. On the other: something about the onboarding feels off — the drop-off at step three is hard to explain, and the qualitative feedback from users suggests the whole flow feels like too much too soon. The data side tends to win, because data sounds more objective. The qualitative side is often right.</p>

      <p>This isn't an argument against data. It's an argument for understanding what data can and can't do. Analytics tells you what happened — which features were used, which funnels converted, which cohorts retained. It's very good at this. What it struggles to tell you is why any of that happened, what it felt like to be the person on the other end of those numbers, and what would have happened if you'd done something different.</p>

      <h2>The what vs. the why</h2>

      <p>Consider churn. A dashboard can tell you the rate at which customers are leaving, which segments are leaving fastest, and approximately when in the customer lifecycle churn tends to happen. What it can't tell you is what those customers were actually experiencing in the weeks before they left — what was frustrating them, what alternatives they were considering, what would have changed their mind.</p>

      <p>This is information you can only get by talking to people. Not surveying them — the response rates are too low and the questions too leading — but actually talking to them, listening to what they say and what they don't say, following up on the things that don't quite make sense. This is slower and messier than pulling a report, which is probably why most teams don't do it enough.</p>

      <h2>The silent majority problem</h2>

      <p>Data reflects the behaviour of people who stayed — who continued to use the product long enough to generate data. The people who left early, who never converted, who bounced after one session and never came back, are largely invisible in most analytics systems. Their absence from the data doesn't mean their perspective is unimportant — it often means the opposite.</p>

      <p>Some of the most important product insights come from understanding why people didn't choose you, didn't finish the onboarding, or signed up and never came back. These insights require actively going out to find those people, which is hard, or designing data collection that captures early-stage behaviour before users disengage, which requires thinking about measurement as part of the product design rather than an afterthought.</p>

      <h2>Using both</h2>

      <p>The best product and marketing teams treat data and qualitative research as complementary rather than competing. Data surfaces patterns that deserve investigation. Qualitative research explains those patterns and generates hypotheses that data can test. Neither is sufficient on its own, and the teams that treat one as the answer tend to build good-looking dashboards with questionable decisions downstream.</p>

      <p>The discipline is in knowing which question you're trying to answer and which tool is appropriate for answering it — and being honest when the tool you prefer isn't the right one for the job.</p>
    `,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}
