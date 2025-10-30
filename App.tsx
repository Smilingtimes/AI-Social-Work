import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import BulletPoint from './components/BulletPoint';
import { sectionsData, reflectionData } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans antialiased">
      <div className="relative isolate overflow-hidden">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-blue-900/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64.6%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 1.4% 98.2%, 8.2% 91.5%, 14.9% 74.4%, 24.1% 54.1%, 38.6% 0.1%, 50.2% 34.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header />

          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm">
                <div className="relative aspect-[9/16] w-full group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative aspect-[9/16] w-full bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-blue-800/30">
                        <video
                            className="w-full h-full object-cover"
                            src="https://i.imgur.com/TS5m1Gx.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            title="Futuristic abstract background video"
                        ></video>
                    </div>
                </div>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-800/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">{reflectionData.icon}</div>
                    <h2 className="text-2xl font-bold text-cyan-300">{reflectionData.title}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                    {reflectionData.text}
                </p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectionsData.map((section) => (
              <Section key={section.title} title={section.title} icon={section.icon}>
                <ul className="space-y-3">
                  {section.points.map((point, index) => (
                    <BulletPoint key={index}>{point}</BulletPoint>
                  ))}
                </ul>
              </Section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;