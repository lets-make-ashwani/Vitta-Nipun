import { ArrowRight, TrendingUp, Users, Award, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Students' },
    { icon: TrendingUp, value: '₹12 LPA', label: 'Avg Package' },
    { icon: Award, value: '95%', label: 'Placements' },
    { icon: Building2, value: '500+', label: 'Companies' },
  ];

  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-br from-primary via-primary to-[#084158] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">India's Leading Finance Institute</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build Your Career in{' '}
              <span className="text-secondary">Finance & Technology</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              Master finance, fintech, and data analytics with industry experts. Get placed in top companies with guaranteed placement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg">
                Explore Courses
                <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all">
                Book Free Counselling
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-center"
                >
                  <stat.icon className="mx-auto mb-2 text-secondary" size={24} />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="mx-auto mb-4 text-secondary" size={120} />
                <p className="text-white text-xl font-semibold">Finance Education Excellence</p>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-3xl rotate-12 opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-3xl -rotate-12 opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
