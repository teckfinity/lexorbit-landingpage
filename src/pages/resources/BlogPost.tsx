import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const posts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  content: string[];
  relatedPosts: number[];
}> = {
  "1": {
    title: "How AI is Transforming Legal Research in 2024",
    excerpt: "Discover how machine learning algorithms are revolutionizing the way attorneys find and analyze case law.",
    category: "AI & Legal Tech",
    author: "Sarah Chen",
    authorRole: "Head of Product",
    date: "December 8, 2024",
    readTime: "5 min read",
    content: [
      "The legal profession has always been rooted in precedent, careful analysis, and meticulous research. For decades, this meant hours spent in law libraries, poring over case reporters and legal digests. But 2024 marks a turning point in how attorneys approach legal research.",
      "Artificial intelligence is no longer a futuristic concept for the legal industry—it is here, and it is fundamentally changing how lawyers work. From natural language processing that understands complex legal queries to machine learning models that can predict case outcomes, AI is becoming an indispensable tool in the modern attorney's arsenal.",
      "## The Speed Revolution",
      "Perhaps the most immediate impact of AI on legal research is speed. What once took hours or even days can now be accomplished in minutes. At LexOrbit, we have seen attorneys reduce their research time by an average of 73% while actually improving the quality of their findings.",
      "This is not about replacing human judgment—it is about augmenting it. AI handles the heavy lifting of sifting through millions of cases, statutes, and regulations, while attorneys focus on strategy, analysis, and client relationships.",
      "## Beyond Keyword Matching",
      "Traditional legal research tools relied on keyword matching, which meant attorneys needed to guess which terms might appear in relevant cases. AI-powered research understands context and meaning. Ask a question in plain English, and the system understands what you are really looking for.",
      "For example, instead of searching for specific terms like 'negligence AND hospital AND duty of care', you can simply ask: 'What standard of care applies to emergency room physicians in California?' The AI understands the legal concepts involved and returns relevant authorities.",
      "## Predictive Analytics",
      "One of the most exciting developments is the use of AI for predictive analytics. By analyzing patterns in millions of cases, AI can now provide insights into likely outcomes, optimal strategies, and potential risks. This transforms legal research from a backward-looking exercise to a forward-looking strategic tool.",
      "## The Human Element",
      "Despite these advances, the human element remains crucial. AI is a tool that makes attorneys more effective, not a replacement for legal expertise. The best results come from combining AI capabilities with human insight, experience, and judgment.",
      "As we move further into 2024, the question is no longer whether to adopt AI-powered legal research, but how quickly you can integrate it into your practice to stay competitive.",
    ],
    relatedPosts: [2, 3, 4],
  },
  "2": {
    title: "5 Ways to Cut Your Research Time in Half",
    excerpt: "Practical strategies that top litigators use to maximize efficiency without sacrificing quality.",
    category: "Practice Tips",
    author: "Michael Roberts",
    authorRole: "Senior Legal Consultant",
    date: "December 5, 2024",
    readTime: "4 min read",
    content: [
      "Time is the most valuable resource for any attorney. Between client meetings, court appearances, and document preparation, there is never enough of it. That is why the most successful litigators are always looking for ways to work smarter, not harder.",
      "After interviewing dozens of top attorneys and analyzing research patterns from thousands of LexOrbit users, we have identified five strategies that consistently cut research time in half.",
      "## 1. Start with the End in Mind",
      "Before diving into research, take five minutes to clearly define what you need. What is the specific legal question? What jurisdiction applies? What type of authority do you need? This upfront investment saves hours of unfocused searching.",
      "## 2. Use Natural Language Queries",
      "Stop thinking in Boolean operators. Modern AI-powered research tools understand natural language. Instead of constructing complex search strings, simply ask your question as you would to a colleague. You will often find what you need faster.",
      "## 3. Leverage Citation Networks",
      "When you find a relevant case, do not stop there. Use citation mapping to discover related cases that cite or are cited by your case. This network approach often uncovers authorities you would never have found through traditional searching.",
      "## 4. Set Up Automated Alerts",
      "Instead of repeatedly searching for updates on key topics, set up automated alerts. Let the technology monitor for new developments while you focus on other work. When something relevant appears, you will be notified immediately.",
      "## 5. Use Templates and Saved Searches",
      "If you frequently research similar topics, create templates. Save your most effective searches and adapt them as needed. There is no reason to reinvent the wheel for each new matter.",
      "Implementing even a few of these strategies can dramatically improve your efficiency. The goal is not to spend less time on research—it is to spend your research time more effectively.",
    ],
    relatedPosts: [1, 4, 5],
  },
  "3": {
    title: "New Feature: Predictive Analytics Now Live",
    excerpt: "Our latest update brings powerful outcome prediction to help you make data-driven case decisions.",
    category: "Product Updates",
    author: "LexOrbit Team",
    authorRole: "Product Team",
    date: "December 2, 2024",
    readTime: "3 min read",
    content: [
      "We are excited to announce the launch of Predictive Analytics, one of our most requested features. Starting today, all Professional and Enterprise users can access AI-powered outcome predictions for their cases.",
      "## What is Predictive Analytics?",
      "Predictive Analytics uses machine learning to analyze patterns across millions of cases and provide insights into likely outcomes. By examining factors like case type, jurisdiction, judge history, and legal arguments, our AI can estimate success probabilities and suggest optimal strategies.",
      "## Key Features",
      "The new Predictive Analytics dashboard includes several powerful capabilities. Success probability scores give you a data-driven estimate of case outcomes based on similar historical cases. Settlement likelihood analysis helps you understand when settlement might be the best path forward.",
      "Duration estimates let you plan resources more effectively by understanding how long similar cases typically take. Strategy insights highlight which arguments have been most successful in similar cases.",
      "## How to Access",
      "Predictive Analytics is available in your dashboard under the Analytics tab. Simply enter your case details, and our AI will analyze the relevant factors and provide actionable insights within seconds.",
      "## Privacy and Security",
      "As with all LexOrbit features, your data is protected by bank-level encryption. Case details are never shared or used to train models without explicit consent. Your confidential information remains confidential.",
      "We cannot wait to see how Predictive Analytics helps you make better decisions for your clients. As always, we welcome your feedback as we continue to improve this feature.",
    ],
    relatedPosts: [1, 2, 5],
  },
  "4": {
    title: "The Future of Court Filings: What to Expect",
    excerpt: "Industry experts weigh in on upcoming changes to electronic filing systems across jurisdictions.",
    category: "Industry News",
    author: "Jennifer Walsh",
    authorRole: "Legal Technology Analyst",
    date: "November 28, 2024",
    readTime: "6 min read",
    content: [
      "Electronic filing has come a long way since the first courts began accepting digital submissions. But significant changes are on the horizon that will further transform how attorneys interact with the court system.",
      "We spoke with court administrators, legal technology experts, and practicing attorneys to understand what the future holds for e-filing.",
      "## Unified Filing Standards",
      "One of the biggest pain points for attorneys practicing across multiple jurisdictions is the lack of standardization. Each court system has different requirements, formats, and interfaces. That is beginning to change.",
      "Several initiatives are underway to create unified filing standards. The goal is to allow attorneys to file documents in the same format regardless of jurisdiction, with the system automatically adapting to local requirements.",
      "## AI-Powered Document Review",
      "Courts are beginning to implement AI systems that review filings for compliance before acceptance. These systems can catch formatting errors, missing signatures, and other common issues that currently result in rejected filings.",
      "## Real-Time Status Updates",
      "Future e-filing systems will provide real-time updates on document status. Instead of waiting days to confirm a filing was accepted, attorneys will receive instant confirmation and can track their documents through the court process.",
      "## Integration with Practice Management",
      "The next generation of e-filing systems will integrate seamlessly with practice management software. Deadlines will automatically populate, filing confirmations will sync with case files, and attorneys will have a unified view of all their court interactions.",
      "## Timeline for Changes",
      "While some of these improvements are already being piloted in select jurisdictions, widespread adoption is likely still 2-3 years away. However, attorneys should start preparing now by choosing technology partners who are actively developing these integrations.",
    ],
    relatedPosts: [1, 3, 5],
  },
  "5": {
    title: "Building Better Client Relationships with AI",
    excerpt: "How legal technology can help you provide faster, more transparent service to your clients.",
    category: "Practice Tips",
    author: "David Kim",
    authorRole: "Client Success Manager",
    date: "November 25, 2024",
    readTime: "4 min read",
    content: [
      "Client expectations have evolved dramatically. Today's clients expect faster responses, greater transparency, and more predictable outcomes. Legal AI is not just about efficiency—it is about meeting these elevated expectations.",
      "## Faster Responses",
      "When a client calls with a question, they expect an answer quickly. AI-powered research means you can often provide substantive responses in the same conversation, rather than promising to research and call back.",
      "This immediacy builds trust and demonstrates competence. Clients feel confident that their attorney has the tools and knowledge to handle their matter effectively.",
      "## Transparent Pricing",
      "One of the biggest sources of client frustration is unpredictable legal bills. By using AI to more accurately estimate research time and case complexity, you can provide more reliable cost estimates upfront.",
      "Some firms are even using predictive analytics to offer alternative fee arrangements with greater confidence, knowing they can accurately estimate the work involved.",
      "## Proactive Communication",
      "AI-powered monitoring tools can alert you to developments relevant to your clients before they become urgent. This allows you to reach out proactively with updates, rather than waiting for clients to ask.",
      "## Data-Driven Strategy Discussions",
      "When discussing strategy with clients, AI provides objective data to support recommendations. Instead of saying a case is strong based on experience alone, you can show success rates for similar cases.",
      "This transparency helps clients make informed decisions and builds trust in your judgment.",
      "## The Personal Touch",
      "Importantly, AI frees up time for what matters most—building personal relationships with clients. By handling routine research and monitoring tasks, AI allows attorneys to focus on understanding client needs and providing strategic guidance.",
      "The firms that thrive will be those that use AI not to replace human connection, but to enhance it.",
    ],
    relatedPosts: [1, 2, 4],
  },
};

const postsList = [
  { id: 1, title: "How AI is Transforming Legal Research in 2024", category: "AI & Legal Tech" },
  { id: 2, title: "5 Ways to Cut Your Research Time in Half", category: "Practice Tips" },
  { id: 3, title: "New Feature: Predictive Analytics Now Live", category: "Product Updates" },
  { id: 4, title: "The Future of Court Filings: What to Expect", category: "Industry News" },
  { id: 5, title: "Building Better Client Relationships with AI", category: "Practice Tips" },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts[id || "1"];

  if (!post) {
    return (
      <div className="min-h-screen bg-cream">
        <Navigation showBanner={true} />
        <div className="pt-32 pb-20 px-4 text-center">
          <h1 className="text-2xl font-bold text-navy">Post not found</h1>
          <Link to="/resources/blog" className="text-gold hover:underline mt-4 inline-block">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = post.relatedPosts.map(relId => postsList.find(p => p.id === relId)).filter(Boolean);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation showBanner={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 165, 116, 0.03) 2px, rgba(212, 165, 116, 0.03) 4px)' }} />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <Link to="/resources/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-white">{post.author}</span>
                  <span className="text-white/40"> · {post.authorRole}</span>
                </div>
              </div>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Action Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-10 pb-6 border-b border-charcoal/10"
          >
            <button className="flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors">
              <Bookmark className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center gap-2 text-charcoal/60 hover:text-gold transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
          </motion.div>

          {/* Content */}
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-heading text-2xl font-bold text-navy mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-charcoal/80 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </motion.article>

          {/* Author Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-6 bg-white rounded-2xl border border-charcoal/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                <span className="font-heading text-xl font-bold text-gold">{post.author.charAt(0)}</span>
              </div>
              <div>
                <p className="font-semibold text-navy">{post.author}</p>
                <p className="text-sm text-charcoal/60 mb-2">{post.authorRole}</p>
                <p className="text-sm text-charcoal/70">
                  Writing about legal technology, AI, and the future of legal practice.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="font-heading text-xl font-bold text-navy mb-6">Related Articles</h3>
            <div className="grid gap-4">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost?.id}
                  to={`/resources/blog/${relPost?.id}`}
                  className="group p-4 bg-white rounded-xl border border-charcoal/10 hover:border-gold/30 transition-all flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs font-medium text-gold">{relPost?.category}</span>
                    <p className="font-medium text-navy group-hover:text-gold transition-colors">
                      {relPost?.title}
                    </p>
                  </div>
                  <ArrowLeft className="w-4 h-4 text-charcoal/30 rotate-180 group-hover:text-gold transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
