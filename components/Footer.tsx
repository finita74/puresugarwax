import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-950 text-teal-400 py-12 text-center">
      <div className="container mx-auto px-4">
        <p className="font-serif text-white text-xl mb-4">Pure Sugar Wax</p>
        <p className="text-sm mb-6">
          14701 Lee Hwy, Suite 101, Centreville, VA 20121
        </p>
        <div className="h-px w-24 bg-teal-900 mx-auto mb-6"></div>
        <p className="text-xs text-teal-600">
          © {new Date().getFullYear()} Pure Sugar Wax. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;