import React from 'react';

const Experience = () => {
  const internship = {
    role: 'Machine Learning Intern',
    company: 'Cloud Technologies',
    location: 'Hyderabad, Telangana',
    duration: 'May 5 – May 30',
    bullets: [
      'Developed and trained ML models using Python libraries (e.g., Scikit-learn, Pandas, NumPy) for tasks such as data classification, regression, and prediction.',
      'Performed data preprocessing and feature engineering to clean, transform, and optimize datasets for better model performance.',
      'Implemented and evaluated model performance using metrics like accuracy, precision, recall, and R² score, and optimized hyperparameters for improved results.'
    ]
  };

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
      institution: 'Institute of Aeronautical Engineering',
      location: 'Hyderabad, India',
      duration: 'Expected Graduation: May 2027',
      gpa: 'GPA: 7.6/10.0'
    },
    {
      degree: 'Diploma in Computer Science and Engineering',
      institution: 'Vathsalya Institute of Science and Technology',
      location: 'Hyderabad, India',
      duration: 'Completed: May 2024',
      gpa: 'GPA: 7.5/10.0'
    }
  ];

  return (
    <section id="experience" className="bg-black text-white py-24 px-6 md:px-12 w-full relative overflow-hidden">
      
      {/* Decorative stars */}
      <div className="absolute top-1/4 left-10 text-[#ff2a2a] opacity-10 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#ff2a2a] text-xs font-black tracking-[0.2em] uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 tracking-tight">Experience & Education</h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Internship */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="text-2xl font-black text-[#ff2a2a] border-b border-gray-800 pb-3">Internships</h3>
            
            <div 
              data-aos="fade-right"
              className="relative pl-8 border-l border-gray-800 flex flex-col gap-4"
            >
              {/* Point Indicator */}
              <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-[#ff2a2a] shadow-[0_0_10px_#ff2a2a]"></div>
              
              <div>
                <span className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest">{internship.duration}</span>
                <h4 className="text-xl font-bold text-white mt-1">{internship.role}</h4>
                <p className="text-sm font-semibold text-[#ff2a2a]">{internship.company} <span className="text-gray-500 font-normal">| {internship.location}</span></p>
              </div>

              <ul className="flex flex-col gap-3.5 mt-2">
                {internship.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm text-gray-400 font-medium leading-relaxed relative pl-4">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <h3 className="text-2xl font-black text-white border-b border-gray-800 pb-3">Education</h3>
            
            <div className="flex flex-col gap-12 border-l border-gray-800 pl-8 relative">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  data-aos="fade-left"
                  data-aos-delay={index * 150}
                  className="relative flex flex-col gap-2"
                >
                  {/* Point Indicator */}
                  <div className="absolute top-1.5 -left-[38px] w-3 h-3 rounded-full bg-white border border-black shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
                  
                  <div>
                    <span className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest">{edu.duration}</span>
                    <h4 className="text-lg md:text-xl font-bold text-white mt-1 leading-snug">{edu.degree}</h4>
                    <p className="text-sm font-semibold text-gray-300">{edu.institution} <span className="text-gray-500 font-normal">| {edu.location}</span></p>
                  </div>
                  
                  <div className="inline-block self-start mt-1 text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#ff2a2a]">
                    {edu.gpa}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
