import { Calendar, Clock, Users, ArrowRight, Video } from 'lucide-react';
import { motion } from 'motion/react';

export function WebinarSection() {
  const webinars = [
    {
      title: 'Breaking into Investment Banking in 2026',
      speaker: 'Vikram Malhotra',
      designation: 'VP, Morgan Stanley',
      date: 'June 5, 2026',
      time: '7:00 PM IST',
      attendees: 2450,
      status: 'Upcoming',
      type: 'Free Masterclass',
    },
    {
      title: 'AI & Machine Learning in Finance',
      speaker: 'Dr. Sneha Kapoor',
      designation: 'Head of AI, Citi',
      date: 'June 8, 2026',
      time: '6:30 PM IST',
      attendees: 1890,
      status: 'Upcoming',
      type: 'Workshop',
    },
    {
      title: 'Career Transition to FinTech',
      speaker: 'Arjun Reddy',
      designation: 'Founder, PayNext',
      date: 'June 12, 2026',
      time: '8:00 PM IST',
      attendees: 3120,
      status: 'Limited Seats',
      type: 'Career Session',
    },
  ];

  return (
    <section id="webinars" className="py-16 sm:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Learn from Experts</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
              Upcoming Webinars & Workshops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Free live sessions with industry leaders and career guidance from top professionals
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <motion.div
              key={webinar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group"
            >
              <div className="h-40 bg-gradient-to-br from-secondary to-[#6B9427] relative flex items-center justify-center">
                <Video className="text-white w-16 h-16 opacity-80" />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary">{webinar.type}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    webinar.status === 'Limited Seats'
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-white/20 backdrop-blur-sm text-white'
                  }`}>
                    {webinar.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4 line-clamp-2 group-hover:text-secondary transition-colors">
                  {webinar.title}
                </h3>

                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-border">
                  <div className="text-3xl">👤</div>
                  <div>
                    <p className="font-semibold text-primary">{webinar.speaker}</p>
                    <p className="text-sm text-muted-foreground">{webinar.designation}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar size={18} className="text-secondary" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock size={18} className="text-secondary" />
                    <span>{webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users size={18} className="text-secondary" />
                    <span>{webinar.attendees.toLocaleString()} registered</span>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all group-hover:bg-secondary">
                  Register Free
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
            View All Webinars
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
