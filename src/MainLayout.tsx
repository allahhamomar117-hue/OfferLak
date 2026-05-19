// MainLayout.tsx
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navbar } from "./shared/Navbar";
import { Footer } from "./shared/Footer";
const MainLayout = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && (lang === "ar" || lang === "en")) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const isArabic = lang === "ar";

  return (
    <div
      className={`flex ${isArabic ? "flex-row-reverse" : "flex-row"} min-h-screen`}
    >
      {/* المحتوى */}
      <div className="flex flex-col flex-1 bg-gray-100">
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
