import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function BlogSection() {
  const blogs = [
    {
      title: 'Top 10 Skills Every Investment Banker Needs in 2026',
      excerpt: 'Discover the essential skills and certifications that top investment banks are looking for in new hires.',
      category: 'Career Advice',
      date: 'May 20, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      href: '/blog/article?id=investment-banking',
    },
    {
      title: 'How AI is Transforming Financial Analysis',
      excerpt: 'Explore the latest AI tools and techniques revolutionizing the finance industry and how to leverage them.',
      category: 'Technology',
      date: 'May 18, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      href: '/blog/article?id=ai-finance',
    },
    {
      title: 'Breaking into FinTech: A Complete Guide',
      excerpt: 'Learn about the booming fintech sector and how to transition your career into this exciting field.',
      category: 'Industry Trends',
      date: 'May 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
      href: '/blog/article?id=fintech',
    },
  ];

  return (
    <section id="blogs" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Latest Insights</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              Finance & Career Blog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the finance industry
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
            >
              <a href={blog.href} target="_blank" rel="noopener noreferrer" className="block relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </a>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-secondary" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-secondary" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <a href={blog.href} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                    {blog.title}
                  </h3>
                </a>

                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>

                <a href={blog.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary font-semibold flex items-center gap-2 transition-colors group-hover:translate-x-2 duration-300 w-fit">
                  Read More
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
            View All Articles
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
