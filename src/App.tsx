import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminBlogsPage } from './pages/admin/AdminBlogsPage';
import { AdminProjectRequestsPage } from './pages/admin/AdminProjectRequestsPage';
import { AdminContactFormsPage } from './pages/admin/AdminContactFormsPage';
import { AdminEmployeesPage } from './pages/admin/AdminEmployeesPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/blogs" element={<AdminBlogsPage />} />
        <Route path="/admin/project-requests" element={<AdminProjectRequestsPage />} />
        <Route path="/admin/contact-forms" element={<AdminContactFormsPage />} />
        <Route path="/admin/employees" element={<AdminEmployeesPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;