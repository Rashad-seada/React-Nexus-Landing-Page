import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Founded with a vision to revolutionize software development',
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Established presence in key tech hubs worldwide',
    gradient: 'from-blue-600/20 to-purple-600/20',
  },
  {
    year: '2018',
    title: 'Innovation Award',
    description: 'Recognized for breakthrough AI solutions',
    gradient: 'from-pink-600/20 to-blue-600/20',
  },
  {
    year: '2023',
    title: 'Industry Leader',
    description: 'Ranked among top software companies globally',
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
];

interface JourneyTimelineProps {
  inView: boolean;
}

export function JourneyTimeline({ inView }: JourneyTimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Glowing line */}
      <motion.div
        className="absolute left-[28px] top-0 bottom-0 w-px"
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="h-full bg-gradient-to-b from-purple-600/50 via-pink-600/50 to-purple-600/50 blur-sm" />
      </motion.div>

      <div className="relative space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative pl-16"
          >
            {/* Year marker */}
            <motion.div
              className="absolute left-0 w-14 h-14"
              whileHover={{ scale: 1.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-lg" />
              <div className="relative w-full h-full glass-effect rounded-full flex items-center justify-center border border-white/10">
                <span className="text-white font-bold">{milestone.year}</span>
              </div>
            </motion.div>

            {/* Content card */}
            <motion.div
              className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${milestone.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-gray-400">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}