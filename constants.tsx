import React from 'react';

const icons = {
  Applications: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Benefits: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Challenges: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  Skills: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M12 14L8 12" />
    </svg>
  ),
  Outlook: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Sources: (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
    </svg>
  ),
  Reflection: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export const sectionsData = [
  {
    title: 'Current AI Applications',
    icon: icons.Applications,
    points: [
      'Documentation & Admin Automation (e.g., FormFlow AI Assistant).',
      'Predictive Analytics & Risk Assessment, especially in child welfare.',
      '24/7 Mental Health Support via AI Chatbots (e.g., Woebot, Wysa).',
      'Enhanced Case Management Software (e.g., CaseWorthy, Binti).',
      'AI-Powered Training & Education simulations (e.g., Empathy Helper).',
    ],
  },
  {
    title: 'Opportunities & Benefits',
    icon: icons.Benefits,
    points: [
      'Enhanced efficiency, freeing up time for direct client engagement.',
      'Data-driven decision-making for better client outcomes.',
      'Scalable 24/7 mental health services for underserved populations.',
      'Improved resource allocation by identifying at-risk individuals early.',
      'Early detection of mental health conditions through pattern analysis.',
    ],
  },
  {
    title: 'Ethical Challenges & Risks',
    icon: icons.Challenges,
    points: [
      'Algorithmic Bias & Discrimination from biased training data.',
      'Major Privacy & Confidentiality concerns with sensitive client data.',
      'Lack of Transparency in "black box" algorithms, impacting accountability.',
      'The Digital Divide may deepen social and economic disparities.',
      'Balancing AI recommendations with irreplaceable professional human judgment.',
    ],
  },
  {
    title: 'Essential Skills in the AI Era',
    icon: icons.Skills,
    points: [
      'Irreplaceable Human Skills: Empathy, emotional intelligence, and critical thinking.',
      'Core Competencies: Communication, cultural competence, and ethical decision-making.',
      'New Technical Skills: AI literacy and effective prompt engineering.',
      'Critical evaluation of AI-generated outputs for bias and accuracy.',
      'Integration of AI insights with professional judgment and experience.',
    ],
  },
  {
    title: 'Future Career Outlook',
    icon: icons.Outlook,
    points: [
      'Strong Job Security: 7% projected growth through 2032.',
      'AI as a Partner: Augmenting and transforming work, not replacing social workers.',
      'Emerging Roles: AI implementation specialists and data justice advocates.',
      'New Opportunities: Technology trainers and policy advisors for AI regulation.',
      'Focus Shift: From routine tasks to complex human connection, empathy, and ethical judgment.',
    ],
  },
    {
    title: 'Key Sources (2025)',
    icon: icons.Sources,
    points: [
      'Peer-Reviewed: Australian Social Work journal, SAGE Journals, Journal of Evidence Based Social Work.',
      'Professional Orgs: NASW, CSWE, and Univ. of Minnesota Center for Advanced Studies in Child Welfare.',
      'Industry Reports: NCT Inc., Social Current, and Public Publications Group.',
      'Innovation/Tech: Reports on platforms like Empathy Helper and FormFlow AI Assistant.',
    ],
  },
];

export const reflectionData = {
  title: 'Reflection',
  icon: icons.Reflection,
  text: `One of the most surprising things about AI in Social work is how it is used to analyze data, enhancing social workers' ability to assess potential issues within communities and among individuals. Human skills in social work will remain essential because artificial intelligence will never be able to grasp the nuances of the human experience required to help those in need. As social workers, we must ensure that our use of AI does not violate the NASW code of ethics and that we apply the EPIC model, utilizing AI E) ethics and justice; (P) policy development and advocacy; (I) intersectoral collaboration; and (C) community engagement and empowerment when utilizing these tools. As I continue to advance in my career, I will surround myself with technology and learn as much as possible to ensure that when the time comes, I can use technology for good.`
};