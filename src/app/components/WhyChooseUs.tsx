import { Headphones, Users, FolderOpen, Award, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Briefcase,
      title: '100% Placement Support',
      description: 'Dedicated career counseling and placement assistance with top finance companies',
    },
    {
      icon: Users,
      title: 'Industry Expert Mentors',
      description: 'Learn from professionals working at Goldman Sachs, JP Morgan, and top firms',
    },
    {
      icon: FolderOpen,
      title: 'Live Projects',
      description: 'Hands-on experience with real-world financial modeling and data analysis',
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Globally recognized certifications to boost your career credentials',
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Learning',
      description: 'Personalized learning paths with AI-driven recommendations and analytics',
    },
    {
      icon: Headphones,
      title: 'Lifetime Support',
      description: '24/7 doubt resolution and access to exclusive alumni network',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Advantages</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              Why Choose Vitta Nipun?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to build a successful career in finance and technology
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-gradient-to-br from-white to-muted border border-border rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full" />
              <div className="bg-primary group-hover:bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors relative z-10 group-hover:scale-110 duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
