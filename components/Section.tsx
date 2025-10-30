import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-6 shadow-lg hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="text-blue-400 mr-3">{icon}</div>
        <h2 className="text-2xl font-bold text-cyan-300">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;