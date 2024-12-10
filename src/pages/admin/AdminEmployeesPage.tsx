import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Plus, Trash2, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { EmployeeForm } from '../../components/admin/employees/EmployeeForm';
import { GlowingGradient } from '../../components/solutions/GlowingGradient';

const initialEmployees = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@nexustech.com',
    role: 'Admin',
    department: 'Management',
    status: 'Active',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@nexustech.com',
    role: 'Developer',
    department: 'Engineering',
    status: 'Active',
    joinDate: '2024-02-01',
  },
];

export function AdminEmployeesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [employees, setEmployees] = useState(initialEmployees);

  const handleCreateEmployee = (employee: any) => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        ...employee,
        status: 'Active',
        joinDate: new Date().toISOString().split('T')[0],
      },
    ]);
  };

  const handleDeleteEmployee = (id: number) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">Employees</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              Add Employee
            </motion.button>
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Name</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Email</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Role</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Department</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Join Date</th>
                    <th className="px-6 py-4 text-right text-sm text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <motion.tr
                      key={employee.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-white/5 hover:bg-white/5"
                    >
                      <td className="px-6 py-4 text-white">{employee.name}</td>
                      <td className="px-6 py-4 text-gray-300">{employee.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          employee.role === 'Admin'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {employee.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{employee.department}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                          {employee.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{employee.joinDate}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-gray-400 hover:text-white"
                          >
                            <Edit2 className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteEmployee(employee.id)}
                            className="p-2 text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <EmployeeForm
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleCreateEmployee}
          />
        )}
      </AnimatePresence>
    </div>
  );
}