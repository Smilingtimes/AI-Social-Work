import React, { ReactNode } from 'react';

interface BulletPointProps {
  children: ReactNode;
}

const BulletPoint: React.FC<BulletPointProps> = ({ children }) => {
  return (
    <li className="flex items-start">
      <svg
        className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span className="text-gray-300">{children}</span>
    </li>
  );
};

export default BulletPoint;