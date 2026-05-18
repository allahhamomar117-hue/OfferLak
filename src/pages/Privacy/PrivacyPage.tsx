// src/pages/PrivacyPage.tsx
import React from 'react';
import { privacyData } from './privacyData'; // تأكد من مطابقة مسار البيانات عندك

export const PrivacyPage: React.FC = () => {
  return (
    /* التنسيق ltr لأن النص قانوني باللغة الإنجليزية */
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8" dir="ltr">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* رأس الصفحة - Header باللون البرتقالي المتدرج للبراند */}
        <header className="bg-gradient-to-r from-orange-500 to-amber-600 p-8 sm:p-10 text-white text-left">
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-orange-100 text-sm font-medium">
            Last Updated: May 18, 2026
          </p>
        </header>

        {/* محتوى الصفحة - Layout */}
        <div className="flex flex-col md:flex-row gap-8 p-6 sm:p-10">
          
          {/* القائمة الجانبية للتنقل السريع - Sidebar */}
          <aside className="md:w-1/4">
            <div className="sticky top-24 bg-gray-50 p-5 rounded-xl border border-gray-100 hidden md:block">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Privacy Sections
              </h2>
              <nav className="space-y-1">
                {privacyData.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50/50 rounded-lg transition-colors duration-200"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* النصوص والبنود - Main Content */}
          <main className="md:w-3/4 flex-1">
            <div className="space-y-10">
              {privacyData.map((section) => (
                <section 
                  key={section.id} 
                  id={section.id} 
                  className="scroll-mt-24 border-b border-gray-100 pb-8 last:border-0 last:pb-0"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-orange-500 rounded-full inline-block"></span>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => {
                      // تمييز النص التحذيري المهم (IMPORTANT) ليظهر بشكل جذاب داخل صندوق برتقالي دافئ
                      const isImportant = paragraph.startsWith("IMPORTANT:");
                      return (
                        <p 
                          key={idx} 
                          className={`leading-relaxed text-justify text-[15px] ${
                            isImportant 
                              ? "text-orange-900 bg-orange-50/60 p-4 rounded-xl border border-orange-100/70 font-medium" 
                              : "text-gray-600"
                          }`}
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
};