import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      {/* You can replace the SVG with your custom logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-20 h-20 text-blue-600" // Tailwind classes for styling
      >
        <circle cx="100" cy="100" r="70" fill="" stroke="currentColor" strokeWidth="20" />
        <text
          x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle"
          fontSize="40" fontWeight="bold" fill="currentColor"
        >
          LOGO
        </text>
      </svg>
    </div>
  );
};

export default Logo;
