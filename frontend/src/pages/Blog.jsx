import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "how-long-does-seo-take",
    title: "How Long Does SEO Take to Work?",
    excerpt: "The honest answer: it depends. But here's a realistic timeline for when you can expect to see results from SEO.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "SEO Basics"
  },
  {
    slug: "local-seo-checklist",
    title: "Local SEO Checklist: 10 Things You Can Do Today",
    excerpt: "A simple, jargon-free checklist to improve your local search visibility. No technical knowledge required.",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Guides"
  },
  {
    slug: "google-business-profile-tips",
    title: "Google Business Profile: 7 Tips to Get More Customers",
    excerpt: "Your Google Business Profile is free and powerful. Here's how to make it work harder for your business.",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Google"
  },
  {
    slug: "website-mistakes-costing-customers",
    title: "5 Website Mistakes That Are Costing You Customers",
    excerpt: "Common website problems that drive visitors away - and how to fix them without spending a fortune.",
    date: "2024-11-28",
    readTime: "4 min read",
    category: "Web Design"
  }
];

export default function Blog() {
  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="blog-page">
      <SEO 
        title="Blog - SEO Tips & Web Design Guides"
        description="Practical tips and guides on SEO, web design, and getting more customers online. No jargon, just actionable advice for UK businesses."
        canonical="/blog"
      />
      
      {/* Hero */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-[#FF5500] text-sm font-medium uppercase tracking-widest mb-4 block">
              Blog
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6">
              Tips & Guides
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Practical advice on getting more customers online. No jargon, just stuff that works.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`bg-[#121212] border border-white/10 p-8 hover:border-[#FF5500] transition-all duration-300 group ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#FF5500] text-xs font-medium uppercase tracking-wider bg-[#FF5500]/10 px-3 py-1">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#FF5500] transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-400 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-[#FF5500] text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
