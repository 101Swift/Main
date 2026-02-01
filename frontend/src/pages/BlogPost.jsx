import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";

const blogContent = {
  "how-long-does-seo-take": {
    title: "How Long Does SEO Take to Work?",
    description: "The honest answer about SEO timelines. Learn when you can realistically expect to see results from SEO efforts.",
    date: "2024-12-15",
    readTime: "5 min read",
    category: "SEO Basics",
    content: [
      {
        type: "paragraph",
        text: "It's the first question every business owner asks: \"How long until I see results?\" The honest answer is: it depends. But let me give you a realistic timeline based on what we see with our clients."
      },
      {
        type: "heading",
        text: "The Short Answer"
      },
      {
        type: "paragraph", 
        text: "For most local businesses, you can expect to see meaningful improvements in 3-6 months. Some quicker wins might appear in 4-8 weeks, but significant ranking changes typically take longer."
      },
      {
        type: "heading",
        text: "What Affects the Timeline?"
      },
      {
        type: "list",
        items: [
          "Your current website condition - A brand new site takes longer than improving an existing one",
          "Competition in your area - \"Plumber London\" is harder than \"Plumber Guildford\"",
          "Your Google history - Sites with penalties or issues take longer to recover",
          "How much work is needed - Some sites need minor tweaks, others need major overhauls"
        ]
      },
      {
        type: "heading",
        text: "A Realistic Timeline"
      },
      {
        type: "paragraph",
        text: "Month 1-2: Technical fixes, Google Business Profile optimisation, foundation work. You might see small movements but nothing dramatic."
      },
      {
        type: "paragraph",
        text: "Month 3-4: Content improvements take effect. You'll start appearing for longer, less competitive keywords. Phone might start ringing a bit more."
      },
      {
        type: "paragraph",
        text: "Month 5-6: Compound growth kicks in. More keywords ranking, more visibility, more enquiries. This is where it gets exciting."
      },
      {
        type: "paragraph",
        text: "Month 6+: Continued growth. Rankings stabilise and improve. You're now competing for the bigger keywords."
      },
      {
        type: "heading",
        text: "Why Does It Take So Long?"
      },
      {
        type: "paragraph",
        text: "Google is cautious. It doesn't want to rank a website highly only to find out it's rubbish. So it watches, waits, and gradually increases your visibility as you prove yourself trustworthy."
      },
      {
        type: "paragraph",
        text: "Think of it like a new employee. You wouldn't give them the keys to the company on day one. Google works the same way."
      },
      {
        type: "heading",
        text: "Red Flags: Anyone Promising Instant Results"
      },
      {
        type: "paragraph",
        text: "If someone promises page 1 rankings in 30 days, run away. Either they're lying, or they're using techniques that will get you penalised later. Good SEO is a marathon, not a sprint."
      }
    ]
  },
  "local-seo-checklist": {
    title: "Local SEO Checklist: 10 Things You Can Do Today",
    description: "A practical, jargon-free local SEO checklist for UK businesses. Improve your Google visibility with these simple steps.",
    date: "2024-12-10",
    readTime: "7 min read",
    category: "Guides",
    content: [
      {
        type: "paragraph",
        text: "You don't need to be an SEO expert to improve your local visibility. Here are 10 things you can do today - no technical knowledge required."
      },
      {
        type: "heading",
        text: "1. Claim Your Google Business Profile"
      },
      {
        type: "paragraph",
        text: "If you haven't claimed your Google Business Profile (the box that appears when people search for your business), do it now. It's free and it's the single most important thing for local visibility. Go to business.google.com to get started."
      },
      {
        type: "heading",
        text: "2. Complete Every Section"
      },
      {
        type: "paragraph",
        text: "Don't leave anything blank. Add your hours, services, description, photos, and service areas. Google rewards completeness."
      },
      {
        type: "heading",
        text: "3. Get Your NAP Consistent"
      },
      {
        type: "paragraph",
        text: "NAP = Name, Address, Phone. Make sure these are identical everywhere online - your website, Google, Facebook, Yell, everywhere. \"123 High Street\" and \"123 High St\" are different to Google."
      },
      {
        type: "heading",
        text: "4. Add Photos Regularly"
      },
      {
        type: "paragraph",
        text: "Businesses with photos get 42% more direction requests. Add photos of your work, your team, your premises. Aim for at least one new photo per week."
      },
      {
        type: "heading",
        text: "5. Ask for Reviews"
      },
      {
        type: "paragraph",
        text: "Reviews are huge for local SEO. After every job, ask happy customers to leave a Google review. Make it easy - send them a direct link."
      },
      {
        type: "heading",
        text: "6. Respond to All Reviews"
      },
      {
        type: "paragraph",
        text: "Good or bad, respond to every review. It shows you're active and care about customers. Keep responses professional, even for negative reviews."
      },
      {
        type: "heading",
        text: "7. Add Your Services to Your Website"
      },
      {
        type: "paragraph",
        text: "Each service you offer should have its own page. \"Boiler Installation\" and \"Boiler Repair\" are different searches - treat them as different pages."
      },
      {
        type: "heading",
        text: "8. Include Your Location in Key Places"
      },
      {
        type: "paragraph",
        text: "Your town/city should appear in your page titles, headings, and naturally throughout your content. \"Plumber in Reading\" not just \"Plumber\"."
      },
      {
        type: "heading",
        text: "9. Make Sure You're Mobile-Friendly"
      },
      {
        type: "paragraph",
        text: "Over 60% of local searches happen on phones. If your site is hard to use on mobile, you're losing customers. Test it on your phone - can you easily find your number and call?"
      },
      {
        type: "heading",
        text: "10. Add Your Business to Local Directories"
      },
      {
        type: "paragraph",
        text: "Yell, Thomson Local, Yelp, industry-specific directories. Each listing is a signal to Google that you're a legitimate local business."
      }
    ]
  },
  "google-business-profile-tips": {
    title: "Google Business Profile: 7 Tips to Get More Customers",
    description: "Maximise your free Google Business Profile with these 7 proven tips. Get more calls and enquiries from Google Maps.",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Google",
    content: [
      {
        type: "paragraph",
        text: "Your Google Business Profile is one of the most powerful free tools available. Yet most businesses barely use it. Here's how to make it work harder for you."
      },
      {
        type: "heading",
        text: "1. Choose the Right Primary Category"
      },
      {
        type: "paragraph",
        text: "Your primary category is crucial. Be specific - \"Emergency Plumber\" will outperform \"Plumber\" for emergency searches. You can add secondary categories too, but your primary one carries the most weight."
      },
      {
        type: "heading",
        text: "2. Write a Keyword-Rich Description"
      },
      {
        type: "paragraph",
        text: "You get 750 characters. Use them wisely. Include your main services, areas you cover, and what makes you different. Natural language, not keyword stuffing."
      },
      {
        type: "heading",
        text: "3. Add All Your Services with Descriptions"
      },
      {
        type: "paragraph",
        text: "Google lets you list services with descriptions and prices. Fill this out completely. It helps Google understand what you do and shows customers exactly what you offer."
      },
      {
        type: "heading",
        text: "4. Post Weekly Updates"
      },
      {
        type: "paragraph",
        text: "Google Business has a 'Posts' feature - like social media for your profile. Share offers, news, tips. Active profiles rank better than dormant ones."
      },
      {
        type: "heading",
        text: "5. Add Q&A Content"
      },
      {
        type: "paragraph",
        text: "You can add your own questions and answers. Think about what customers commonly ask and add them. This content appears prominently and builds trust."
      },
      {
        type: "heading",
        text: "6. Use the Booking/Quote Button"
      },
      {
        type: "paragraph",
        text: "If you can take bookings or quote requests online, set up the booking button. It makes it one-click easy for customers to contact you."
      },
      {
        type: "heading",
        text: "7. Check Your Insights"
      },
      {
        type: "paragraph",
        text: "Google tells you how people find you, what they search for, and what actions they take. Check monthly and learn what's working."
      }
    ]
  },
  "website-mistakes-costing-customers": {
    title: "5 Website Mistakes That Are Costing You Customers",
    description: "Common website problems that drive visitors away. Learn what might be wrong with your site and how to fix it.",
    date: "2024-11-28",
    readTime: "4 min read",
    category: "Web Design",
    content: [
      {
        type: "paragraph",
        text: "Your website might look fine to you, but small problems can drive customers away. Here are the five mistakes we see most often."
      },
      {
        type: "heading",
        text: "1. No Clear Call-to-Action"
      },
      {
        type: "paragraph",
        text: "Visitors land on your site. Then what? If there's no obvious \"Call Now\" or \"Get a Quote\" button, they'll leave. Every page needs a clear next step."
      },
      {
        type: "heading",
        text: "2. Phone Number Hidden or Missing"
      },
      {
        type: "paragraph",
        text: "Your phone number should be visible on every page, ideally in the header. On mobile, it should be tap-to-call. If people have to hunt for how to contact you, they won't bother."
      },
      {
        type: "heading",
        text: "3. Slow Loading Speed"
      },
      {
        type: "paragraph",
        text: "If your site takes more than 3 seconds to load, you're losing visitors. 40% of people abandon sites that take longer. Test yours at Google's PageSpeed Insights."
      },
      {
        type: "heading",
        text: "4. Not Mobile-Friendly"
      },
      {
        type: "paragraph",
        text: "More than half of web traffic is mobile. If your site is hard to use on a phone - tiny text, buttons too close together, horizontal scrolling - you're losing half your potential customers."
      },
      {
        type: "heading",
        text: "5. No Trust Signals"
      },
      {
        type: "paragraph",
        text: "Would you hire someone with no reviews, no photos of their work, no evidence they're legitimate? Neither would your customers. Add reviews, accreditations, photos of completed work, and team photos."
      },
      {
        type: "heading",
        text: "The Good News"
      },
      {
        type: "paragraph",
        text: "All of these are fixable. Some you can do yourself, others might need professional help. But fixing them will directly impact how many enquiries you get."
      }
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="bg-[#0A0A0A] pt-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#FF5500]">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] pt-20" data-testid="blog-post-page">
      <SEO 
        title={post.title}
        description={post.description}
        canonical={`/blog/${slug}`}
      />
      
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#FF5500] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#FF5500] text-xs font-medium uppercase tracking-wider bg-[#FF5500]/10 px-3 py-1">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {post.content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index} className="text-zinc-300 text-lg leading-relaxed mb-6">{block.text}</p>;
            }
            if (block.type === "heading") {
              return <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-4">{block.text}</h2>;
            }
            if (block.type === "list") {
              return (
                <ul key={index} className="space-y-3 mb-6">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-[#FF5500] flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#121212] border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3">Need Help With Your Website?</h3>
          <p className="text-zinc-400 mb-6">Get a free review and see how we can help you get more customers from Google.</p>
          <Link to="/contact">
            <Button className="bg-[#FF5500] hover:bg-[#FF5500]/90 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-none">
              Get a Free Review
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}
