// src/pages/Home/HomePage.tsx
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-800 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200">
      
      {/* اللوغو الجديد في منتصف الصفحة تماماً */}
      <div className="flex items-center justify-center select-none scale-110 sm:scale-125 transition-transform duration-200">
        <img 
          src="/OfferLakTextOrng.svg" 
          alt="OfferLak Logo" 
          className="h-20 w-auto object-contain" 
        />
      </div>

    </div>
  );
};