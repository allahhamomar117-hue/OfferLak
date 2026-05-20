import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { lang } = useParams();

  // تعديل كلاس الـ Active ليصير باللون البرتقالي
  const isActive = (path: string) =>
    location.pathname === path
      ? "text-orange-500 font-bold"
      : "text-gray-550 hover:text-orange-550 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors duration-150";

  return (
    <nav className="bg-white/95 dark:bg-zinc-900/95 border-b border-gray-100 dark:border-zinc-800 sticky top-0 z-50 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-6">
            {/* اللوغو الجديد مستدعى مباشرة من مجلد public */}
            <Link to={`/${lang}`} className="flex items-center select-none group">
              <img 
                src="/OfferLakTextOrng.svg" 
                alt="OfferLak Logo" 
                className="h-8 w-auto group-hover:scale-105 transition-transform duration-150 object-contain"
              />
            </Link>

            {/* روابط التنقل */}
            <div className="flex gap-5 text-sm font-medium">
              <Link
                to={`/${lang}/terms`}
                className={isActive(`/${lang}/terms`)}
              >
                Terms of Use
              </Link>

              <Link
                to={`/${lang}/privacy`}
                className={isActive(`/${lang}/privacy`)}
              >
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};