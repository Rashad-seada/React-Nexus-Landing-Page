import { motion } from 'framer-motion';

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
];

export function TeamMembers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
          >
            {/* Glowing effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
            
            <motion.div
              className="relative w-48 h-48 mx-auto rounded-full overflow-hidden"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}