// src/components/shared/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6 mt-12 text-center text-sm text-gray-400" dir="ltr">
      <p>© {new Date().getFullYear()} OfferLak. All rights reserved.</p>
    </footer>
  );
};