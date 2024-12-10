import { motion } from 'framer-motion';
import { BarChart2, Calendar, Users, ArrowUp, ArrowDown, Activity, Clock } from 'lucide-react';
import { useState } from 'react';
import { AdminHeader } from '../components/admin/AdminHeader';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { StatsCard } from '../components/admin/StatsCard';
import { GlowingGradient } from '../components/solutions/GlowingGradient';

const stats = [
  { label: 'Total Employees', value: '150+', icon: Users, trend: '+12%', isPositive: true },
  { label: 'Active Projects', value: '25', icon: Calendar, trend: '+5%', isPositive: true },
  { label: 'Performance', value: '95%', icon: BarChart2, trend: '-2%', isPositive: false },
  { label: 'Response Time', value: '2.5h', icon: Clock, trend: '+15%', isPositive: true },
];

const recentActivity = [
  {
    id: 1,
    type: 'project',
    title: 'E-commerce Platform Milestone',
    description: 'Phase 1 development completed',
    time: '2 hours ago',
    icon: Activity,
  },
  {
    id: 2,
    type: 'employee',
    title: 'New Employee Onboarding',
    description: 'Sarah Johnson joined the team',
    time: '4 hours ago',
    icon: Users,
  },
  {
    id: 3,
    type: 'project',
    title: 'Client Meeting Scheduled',
    description: 'Tech Solutions Inc. project review',
    time: '6 hours ago',
    icon: Calendar,
  },
];

const projectMetrics = [
  { name: 'Web Development', value: 45 },
  { name: 'Mobile Apps', value: 30 },
  { name: 'Cloud Solutions', value: 15 },
  { name: 'AI Integration', value: 10 },
];

export function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-black relative">
      <GlowingGradient />
      
      <AdminSidebar isOpen={isSidebarOpen} />

      <div className={`${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 relative`}>
        <AdminHeader 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <StatsCard
                key={stat.label}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                trend={stat.trend}
                isPositive={stat.isPositive}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Project Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 rounded-xl col-span-2"
            >
              <h2 className="text-xl font-bold text-white mb-6">Project Distribution</h2>
              <div className="space-y-4">
                {projectMetrics.map((metric) => (
                  <div key={metric.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{metric.name}</span>
                      <span className="text-primary-400">{metric.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="space-y-4">
                {['Create Project', 'Add Employee', 'Schedule Meeting', 'Generate Report'].map((action) => (
                  <motion.button
                    key={action}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 text-left text-gray-300 hover:text-white rounded-lg transition-colors"
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary-500/20">
                    <activity.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{activity.title}</h3>
                    <p className="text-gray-400 text-sm">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}