import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';

export function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "The Future of Investment Banking in 2026",
      excerpt: "Discover how automation and AI are reshaping the investment banking landscape and what skills you need to stay ahead.",
      author: "Vitta Nipun Experts",
      date: "Oct 15, 2025",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
      category: "Investment Banking"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Financial Modeling",
      excerpt: "Financial modeling is becoming more accurate and predictive. Learn about the new tools every analyst should master.",
      author: "Tech Team",
      date: "Oct 12, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "FinTech"
    },
    {
      id: 3,
      title: "Top 5 Essential Skills Every Finance Data Scientist Needs",
      excerpt: "Bridge the gap between data science and finance with these top 5 essential skills demanded by recruiters today.",
      author: "Career Cell",
      date: "Oct 08, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "Data Science"
    },
    {
      id: 4,
      title: "Mastering the Stock Market: A Beginner's Guide",
      excerpt: "Start your trading journey with solid fundamentals. Learn the core principles of stock market investing and risk management.",
      author: "Trading Desk",
      date: "Oct 05, 2025",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
      category: "Stock Market"
    },
    {
      id: 5,
      title: "Why Business Analytics is the New Gold Rush",
      excerpt: "Companies are generating more data than ever. Find out why business analysts are highly sought after in the corporate world.",
      author: "Industry Experts",
      date: "Oct 01, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      category: "Business Analytics"
    },
    {
      id: 6,
      title: "Top Placement Strategies for Finance Students",
      excerpt: "Ace your interviews with these proven placement strategies tailored specifically for modern finance and tech companies.",
      author: "Placement Cell",
      date: "Sep 28, 2025",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      category: "Career Guidance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Insights & Trends</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mt-2 mb-4">
                Finance & Career Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert insights, career advice, and the latest trends in Finance, Technology, and Data Science.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden flex-shrink-0 cursor-pointer">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2 cursor-pointer hover:text-secondary transition-colors">{blog.title}</h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">{blog.excerpt}</p>
                  <button className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto w-fit">
                    Read Article <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-sm">
              Load More Articles
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}