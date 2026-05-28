import { TrendingUp, BarChart3, Wallet, Database, Laptop, BrainCircuit, Calculator, LineChart } from 'lucide-react';
import { motion } from 'motion/react';

export function CourseCategories() {
  const categories = [
    {
      icon: TrendingUp,
      title: 'Investment Banking',
      description: 'Learn M&A, valuations, and financial modeling',
      color: 'bg-blue-500',
    },
    {
      icon: LineChart,
      title: 'Financial Modeling',
      description: 'Master Excel and advanced modeling techniques',
      color: 'bg-green-500',
    },
    {
      icon: BarChart3,
      title: 'Stock Market',
      description: 'Technical analysis and trading strategies',
      color: 'bg-purple-500',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Python, ML, and data analytics for finance',
      color: 'bg-orange-500',
    },
    {
      icon: Laptop,
      title: 'FinTech',
      description: 'Blockchain, payments, and digital finance',
      color: 'bg-pink-500',
    },
    {
      icon: BrainCircuit,
      title: 'AI in Finance',
      description: 'Algorithmic trading and AI applications',
      color: 'bg-cyan-500',
    },
    {
      icon: Calculator,
      title: 'Accounting',
      description: 'Financial accounting and reporting',
      color: 'bg-indigo-500',
    },
    {
      icon: Wallet,
      title: 'Business Analytics',
      description: 'Data-driven decision making',
      color: 'bg-red-500',
    },
  ];

  return (
    <section id="courses" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              Explore Course Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of finance and technology programs designed for career success
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white border border-border rounded-2xl p-6 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className={`${category.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
