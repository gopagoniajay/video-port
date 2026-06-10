import React from 'react';
import awsCert from '../assets/certificates/AWS Certified Developer.pdf';
import llmAppsCert from '../assets/certificates/Building LLM Applications With Prompt Engineering.pdf';
import mlOrgCert from '../assets/certificates/Building a Machine Learning Ready Organization.pdf';
import dataAnalysisCert from '../assets/certificates/Data Analysis with Python.pdf';
import genAICert from '../assets/certificates/Generative AI for Data Science.pdf';

const getSkillIcon = (name) => {
  const icons = {
    'Python': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" viewBox="0 0 110 110" fill="currentColor">
        <path d="M55 2.5C26 2.5 27.8 15 27.8 15L28 27.8H55.8V31.8H20C20 31.8 2.5 30.3 2.5 59C2.5 87.7 17.2 86.2 17.2 86.2H32.2V73.8C32.2 73.8 31 57.5 47.5 57.5H75C75 57.5 92.5 59.2 92.5 35C92.5 10.8 77.8 12.2 77.8 12.2L68 12.2V24.5C68 24.5 67 36.8 54 36.8C41 36.8 38.2 24.5 38.2 24.5V10.8C38.2 10.8 35.8 2.5 55 2.5ZM43 14C45.2 14 47 12.2 47 10C47 7.8 45.2 6 43 6C40.8 6 39 7.8 39 10C39 12.2 40.8 14 43 14ZM55 107.5C84 107.5 82.2 95 82.2 95L82 82.2H54.2V78.2H90C90 78.2 107.5 79.7 107.5 51C107.5 22.3 92.8 23.8 92.8 23.8H77.8V36.2C77.8 36.2 79 52.5 62.5 52.5H35C35 52.5 17.5 50.8 17.5 75C17.5 99.2 32.2 97.8 32.2 97.8L42 97.8V85.5C42 85.5 43 73.2 56 73.2C69 73.2 71.8 85.5 71.8 85.5V99.2C71.8 99.2 74.2 107.5 55 107.5ZM67 96C64.8 96 63 97.8 63 100C63 102.2 64.8 104 67 104C69.2 104 71 102.2 71 100C71 97.8 69.2 96 67 96Z" />
      </svg>
    ),
    'SQL': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
        <path d="M3 12A9 3 0 0 0 21 12"></path>
      </svg>
    ),
    'TensorFlow': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" viewBox="0 0 100 115" fill="currentColor">
        <path d="M50 0L8.66 25v50L50 100l41.34-25V25L50 0z" fillOpacity="0.2" stroke="currentColor" strokeWidth="4" />
        <path d="M50 20L22 36.2v32.4L50 85l28-16.4V36.2L50 20z" />
      </svg>
    ),
    'Scikit-Learn': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"></circle>
        <circle cx="12" cy="5" r="3"></circle>
        <circle cx="5" cy="12" r="3"></circle>
        <circle cx="19" cy="12" r="3"></circle>
        <circle cx="12" cy="19" r="3"></circle>
        <path d="M12 8v1m-4 3h1m3 4v-1m4-3h-1"></path>
      </svg>
    ),
    'Pandas': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="3" y1="15" x2="21" y2="15"></line>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="15" y1="3" x2="15" y2="21"></line>
      </svg>
    ),
    'NumPy': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
    'Matplotlib': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M18 20V10M12 20V4M6 20v-6"></path>
      </svg>
    ),
    'Seaborn': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    'Jupyter Notebook': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path>
      </svg>
    ),
    'GitHub Actions': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <circle cx="18" cy="18" r="3"></circle>
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 15V9a4 4 0 0 0-4-4H9m0 10h4a4 4 0 0 0 4-4v-1"></path>
      </svg>
    ),
    'VS Code': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M16 18l6-6-6-6M8 6L2 12l6 6M12 2v20"></path>
      </svg>
    ),
    'Excel': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
      </svg>
    ),
    'HTML': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M16 18l6-6-6-6M8 6L2 12l6 6"></path>
      </svg>
    ),
    'CSS': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    'JavaScript': (
      <span className="text-[9px] font-black text-[#ff2a2a] tracking-tighter shrink-0">JS</span>
    ),
    'Excellent Communication': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    'TeamWork': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    'Problem-Solving': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.808 13.064a3 3 0 0 1-5.122-2A8 8 0 1 1 18.067 15a3 3 0 0 1-5.122 2z"></path>
      </svg>
    ),
    'Critical Thinking': (
      <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  };
  return icons[name] || (
    <svg className="w-4 h-4 shrink-0 text-[#ff2a2a]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
};

const Skills = () => {
  const codingProfiles = [
    { 
      name: 'LeetCode', 
      count: '100+ Problems Solved', 
      color: 'from-orange-500/20 to-yellow-600/10', 
      border: 'border-orange-500/30',
      url: 'https://leetcode.com/u/gopagoniajay/' 
    },
    { 
      name: 'HackerRank', 
      count: '50+ Problems Solved', 
      color: 'from-green-500/20 to-emerald-600/10', 
      border: 'border-green-500/30',
      url: 'https://www.hackerrank.com/profile/ajaygopagoni6' 
    },
    { 
      name: 'GeeksforGeeks', 
      count: '60+ Problems Solved', 
      color: 'from-green-600/20 to-teal-700/10', 
      border: 'border-green-600/30',
      url: 'https://www.geeksforgeeks.org/profile/ajaygopgtn1' 
    },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'SQL'],
    },
    {
      title: 'Libraries & Frameworks',
      skills: ['TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['Jupyter Notebook', 'GitHub Actions', 'VS Code', 'Excel'],
    },
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Soft Skills',
      skills: ['Excellent Communication', 'TeamWork', 'Problem-Solving', 'Critical Thinking'],
    },
  ];

  const certifications = [
    { title: 'Generative AI for Data Science', issuer: 'Microsoft', date: 'May 2025', pdf: genAICert },
    { title: 'Building a Machine Learning Ready Organization', issuer: 'AWS', date: 'April 2025', pdf: mlOrgCert },
    { title: 'Building LLM Applications With Prompt Engineering', issuer: 'NVIDIA', date: 'July 2025', pdf: llmAppsCert },
    { title: 'AWS Certified Developer', issuer: 'Infosys', date: 'May 2025', pdf: awsCert },
    { title: 'Data Analysis with Python', issuer: 'IBM', date: 'April 2025', pdf: dataAnalysisCert },
  ];

  return (
    <section id="skills" className="bg-[#080808] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#ff2a2a] text-xs font-black tracking-[0.2em] uppercase">Expertise & Badges</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 tracking-tight">Skills & Certifications</h2>
        </div>

        {/* Coding Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {codingProfiles.map((profile, index) => (
            <a 
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className={`p-6 rounded-2xl bg-gradient-to-br ${profile.color} border ${profile.border} backdrop-blur-md hover:scale-[1.05] transition-all duration-300 shadow-lg block group`}
            >
              <h4 className="text-xl font-bold text-gray-300 mb-1 flex items-center justify-between">
                {profile.name}
                {/* External link icon */}
                <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h4>
              <p className="text-2xl font-black text-white tracking-tight">{profile.count}</p>
            </a>
          ))}
        </div>

        {/* Skills & Certs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Skills Columns */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <h3 className="text-2xl font-black text-[#ff2a2a] border-b border-gray-800 pb-3">Technical Toolkit</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div 
                  key={category.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <h4 className="text-sm font-bold tracking-wider text-gray-400 uppercase mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-full bg-white/5 border border-white/10 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-white transition-all duration-300 cursor-default group"
                      >
                        {getSkillIcon(skill)}
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>



          </div>

          {/* Right: Certifications Timeline */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h3 className="text-2xl font-black text-white border-b border-gray-800 pb-3">Certifications</h3>
            
            <div className="flex flex-col gap-6">
              {certifications.map((cert, index) => (
                <a 
                  key={cert.title}
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                  className="flex gap-4 items-start group cursor-pointer hover:bg-white/5 p-3 -m-3 rounded-xl transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  {/* Badge point icon */}
                  <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#ff2a2a] group-hover:border-red-500 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#ff2a2a] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  
                  {/* Cert details */}
                  <div className="flex-1 flex flex-col gap-0.5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors leading-tight">{cert.title}</h4>
                      <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      {cert.issuer} <span className="mx-2">•</span> {cert.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
