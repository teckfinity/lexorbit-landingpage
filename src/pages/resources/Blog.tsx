import { motion } from "framer-motion";
import { ArrowRight, Clock, User, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const categories = ["All", "AI & Legal Tech", "Practice Tips", "Industry News", "Product Updates"];

const posts = [
  {
    id: 1,
    title: "How AI is Transforming Legal Research in 2024",
    excerpt: "Discover how machine learning algorithms are revolutionizing the way attorneys find and analyze case law.",
    category: "AI & Legal Tech",
    author: "Sarah Chen",
    date: "Dec 8, 2024",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "5 Ways to Cut Your Research Time in Half",
    excerpt: "Practical strategies that top litigators use to maximize efficiency without sacrificing quality.",
    category: "Practice Tips",
    author: "Michael Roberts",
    date: "Dec 5, 2024",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 3,
    title: "New Feature: Predictive Analytics Now Live",
    excerpt: "Our latest update brings powerful outcome prediction to help you make data-driven case decisions.",
    category: "Product Updates",
    author: "LexOrbit Team",
    date: "Dec 2, 2024",
    readTime: "3 min",
    featured: false,
  },
  {
    id: 4,
    title: "The Future of Court Filings: What to Expect",
    excerpt: "Industry experts weigh in on upcoming changes to electronic filing systems across jurisdictions.",
    category: "Industry News",
    author: "Jennifer Walsh",
    date: "Nov 28, 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 5,
    title: "Building Better Client Relationships with AI",
    excerpt: "How legal technology can help you provide faster, more transparent service to your clients.",
    category: "Practice Tips",
    author: "David Kim",
    date: "Nov 25, 2024",
    readTime: "4 min",
    featured: false,
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation showBanner={true} />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F1419 0%, #1A2332 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 165, 116, 0.03) 2px, rgba(212, 165, 116, 0.03) 4px)' }} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link> */}
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
              The <span className="text-gold">Blog</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Insights on legal tech, practice tips, and industry trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 border-b border-charcoal/10">
          <div className="max-w-5xl mx-auto">
            <Link to={`/resources/blog/${featuredPost.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold">Featured</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-charcoal/70 mb-4 max-w-2xl">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-charcoal/50">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                  <span>{featuredPost.date}</span>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-charcoal/10 sticky top-0 bg-cream z-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-navy text-white"
                    : "bg-charcoal/5 text-charcoal/70 hover:bg-charcoal/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.filter(p => !p.featured).map((post, index) => (
              <Link key={post.id} to={`/resources/blog/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-xl border border-charcoal/5 hover:border-gold/30 hover:shadow-lg transition-all cursor-pointer h-full"
                >
                  <span className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy mt-3 mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-charcoal/50">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
