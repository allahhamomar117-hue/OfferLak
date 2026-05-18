// MainRoutes.jsx

import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './MainLayout';

import { HomePage } from './pages/Home/HomePage';
import { TermsPage } from './pages/Terms/TermsPage';
import { PrivacyPage } from './pages/Privacy/PrivacyPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ar" replace />} />

      <Route path="/:lang" element={<MainLayout />}>

        {/* الصفحة الرئيسية */}
        <Route index element={<HomePage />} />

        {/* صفحات ثانية */}
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />

      </Route>
    </Routes>
  );
};

export default MainRoutes;