// src/pages/Home/HomePage.tsx
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200">
      
      {/* قسم اللوغو في منتصف الصفحة تماماً */}
      <div className="flex items-center gap-3 select-none scale-110 sm:scale-125 transition-transform duration-200">
        {/* الدائرة البرتقالية مع إشارة النسبة المئوية */}
        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl font-black shadow-md">
          %
        </div>
        
        {/* اسم التطبيق مدمج باللون البرتقالي */}
        <span className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
          ffer<span className="text-orange-500">Lak</span>
        </span>
      </div>

    </div>
  );
};