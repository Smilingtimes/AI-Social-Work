import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tight animate-background-pan">
        The Future of AI and Social Work
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400">
        A quick presentation on the key points and concerns from 2025 research, highlighting the intersection of technology and human services.
      </p>
    </header>
  );
};

export default Header;