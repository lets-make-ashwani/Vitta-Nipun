import { Building2, TrendingUp, Users, Award, Briefcase, Target } from 'lucide-react';
import { motion } from 'motion/react';

export function PlacementSection() {
  const companies = [
    'Goldman Sachs', 'JP Morgan', 'Morgan Stanley', 'Deloitte', 'KPMG', 'EY',
    'PwC', 'ICICI Bank', 'HDFC Bank', 'Axis Bank', 'Kotak Mahindra', 'Citi',
  ];

  const highlights = [
    { icon: TrendingUp, value: '₹18 LPA', label: 'Highest Package' },
    { icon: Users, value: '95%', label: 'Placement Rate' },
    { icon: Building2, value: '500+', label: 'Hiring Partners' },
    { icon: Briefcase, value: '3,000+', label: 'Students Placed' },
  ];

  const features = [
    {
      icon: Target,
      title: '100% Placement Assistance',
      description: 'Dedicated placement cell with personalized career guidance',
    },
    {
      icon: Award,
      title: 'Top Company Placements',
      description: 'Direct recruitment from Fortune 500 and leading startups',
    },
    {
      icon: Briefcase,
      title: 'Resume & Interview Prep',
      description: 'Expert-led sessions to ace your dream job interview',
    },
  ];

  return (
    <section id="placements" className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary to-[#084158] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Career Success</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              Placements That Matter
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join thousands of successful alumni working at top finance and tech companies worldwide
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
            >
              <item.icon className="mx-auto mb-4 text-secondary" size={40} />
              <p className="text-4xl font-bold text-white mb-2">{item.value}</p>
              <p className="text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-12 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Hiring Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform"
              >
                <p className="text-primary font-semibold text-sm text-center">{company}</p>
              </motion.div>
            ))}
          </div>
        </div> */}

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
            >
              <feature.icon className="text-secondary mb-4" size={40} />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
