import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const articlesData: Record<string, any> = {
  'investment-banking': {
    title: 'Top 10 Skills Every Investment Banker Needs in 2026',
    category: 'Career Advice',
    date: 'May 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    content: (
      <>
        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-8">
          The landscape of investment banking is evolving rapidly. As we approach 2026, automation, AI, and shifting global markets are reshaping what top tier banks expect from their analysts and associates. 
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">1. Advanced Financial Modeling</h2>
        <p className="mb-6 leading-relaxed">
          While financial modeling has always been the bread and butter of investment banking, the complexity has increased. Today's bankers must be proficient in multi-scenario modeling, LBOs, and M&A modeling with extreme precision and speed.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">2. Data Analytics and Python</h2>
        <p className="mb-6 leading-relaxed">
          Excel is no longer enough. The modern investment banker needs to be comfortable with large datasets. Familiarity with Python, Pandas, and data visualization tools is quickly moving from a "nice-to-have" to a mandatory requirement.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">3. AI Tool Proficiency</h2>
        <p className="mb-6 leading-relaxed">
          Banks are heavily integrating AI for due diligence, pitchbook creation, and market research. Knowing how to effectively prompt and utilize financial AI tools can cut hours of grunt work down to minutes.
        </p>
      </>
    )
  },
  'ai-finance': {
    title: 'How AI is Transforming Financial Analysis',
    category: 'Technology',
    date: 'May 18, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    content: (
      <>
        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-8">
          Artificial Intelligence is no longer just a buzzword in the financial sector; it is a fundamental driver of modern financial analysis, risk assessment, and algorithmic trading.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">1. Predictive Analytics</h2>
        <p className="mb-6 leading-relaxed">
          AI models can analyze historical data to predict future market trends with unprecedented accuracy. By processing thousands of variables simultaneously, these models uncover hidden patterns that human analysts might miss.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">2. Natural Language Processing (NLP)</h2>
        <p className="mb-6 leading-relaxed">
          Financial analysts now use NLP algorithms to instantly parse through earnings reports, news articles, and social media sentiment. This allows firms to gauge market sentiment and react to news in real-time.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">3. Automated Risk Management</h2>
        <p className="mb-6 leading-relaxed">
          Machine learning algorithms are dramatically improving credit scoring and fraud detection. By continuously learning from new transactions, AI systems can flag anomalous behavior and adjust risk models dynamically.
        </p>
      </>
    )
  },
  'fintech': {
    title: 'Breaking into FinTech: A Complete Guide',
    category: 'Industry Trends',
    date: 'May 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    content: (
      <>
        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-8">
          The Financial Technology (FinTech) sector is booming, bridging the gap between traditional banking and modern digital experiences. Here is how you can pivot your career into this dynamic industry.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">1. Understand the Intersection</h2>
        <p className="mb-6 leading-relaxed">
          FinTech requires a unique blend of domain knowledge. You do not just need to understand financial regulations and markets; you must also grasp how technology like cloud computing and mobile architectures deliver these services.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">2. Build Technical Fluency</h2>
        <p className="mb-6 leading-relaxed">
          Even if you are aiming for a non-technical role like Product Manager or Operations, basic technical fluency is required. Learn SQL for data extraction, understand API integrations, and familiarize yourself with Agile methodologies.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">3. Embrace Blockchain and DeFi</h2>
        <p className="mb-6 leading-relaxed">
          Decentralized Finance (DeFi) and blockchain technology are disrupting traditional payment gateways and lending platforms. A foundational understanding of smart contracts and crypto-economics will make you stand out to modern FinTech recruiters.
        </p>
      </>
    )
  }
};

export function BlogPostPage() {
  const [article, setArticle] = useState(articlesData['investment-banking']);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id && articlesData[id]) {
      setArticle(articlesData[id]);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary mb-8 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to all articles
          </a>

          {/* Article Header */}
          <header className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                {article.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-6 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-secondary" />
                  <span className="font-medium text-primary">Vitta Nipun Experts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-secondary" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-secondary" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg"
          >
            <img 
              key={article.image} // Re-triggers animation on image change
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none text-muted-foreground"
          >
            {article.content}
            
            {/* Social Share */}
            <div className="flex items-center justify-between border-t border-b border-border py-6 mt-12">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Share2 size={20} />
                Share this article
              </div>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-primary">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-primary">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-white transition-colors text-primary">
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}