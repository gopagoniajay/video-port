import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Ensemble Deep Learning for Emotion Recognition',
      subtitle: 'Multi-Modal Physiological Analysis from WESAD',
      date: 'Mar 2026',
      description: 'Developed a CNN-LSTM deep learning model enhanced with self-attention for recognizing human emotions using ECG (Electrocardiogram) and EDA (Electrodermal Activity) signals. Applied advanced time-series feature engineering and transfer learning to boost accuracy.',
      points: [
        'Built a custom CNN-LSTM model with self-attention for physiological time-series signals.',
        'Applied feature engineering and noise removal on the WESAD multi-modal dataset.',
        'Improved classification accuracy from 77.78% to 98.35% using transfer learning.',
        'Evaluated performance comprehensively using precision, recall, and F1-score metrics.'
      ],
      tags: ['CNN-LSTM', 'Self-Attention', 'Transfer Learning', 'Time-Series', 'TensorFlow', 'Python'],
      github: 'https://github.com/gopagoniajay/ensemble-deep-learning-approach-for-emotion-recogination'
    },
    {
      title: 'Forward Privacy Prevention System',
      subtitle: 'Secure Cryptographic Cloud Architecture',
      date: 'July 2025',
      description: 'Engineered an advanced forward privacy prevention system to safeguard sensitive user data stored in cloud environments, mitigating unauthorized access risks and ensuring security compliance.',
      points: [
        'Implemented advanced cryptographic algorithms in Python using secure encryption libraries.',
        'Ensured complete forward secrecy and data confidentiality with optimal latency.',
        'Validated on real-world datasets, reducing potential vulnerabilities by 25%.',
        'Optimized system resources to improve model scalability and request throughput.'
      ],
      tags: ['Cloud Security', 'Cryptography', 'Python', 'Resource Optimization', 'Data Secrecy'],
      github: 'https://github.com/gopagoniajay/Forward_privacy_preservation'
    }
  ];

  return (
    <section id="projects" className="bg-white text-gray-900 py-24 px-6 md:px-12 w-full relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[#ff2a2a] text-xs font-black tracking-[0.2em] uppercase">Featured Works</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2 tracking-tight">Recent Projects</h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm font-medium leading-relaxed">
            A showcase of deep learning models, mathematical algorithms, and secure software applications built to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid/List */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="group bg-[#fcfcfc] border border-gray-200 rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] hover:scale-[1.01] transition-all duration-500 flex flex-col lg:flex-row gap-10"
            >
              {/* Left Column: Title & Metadata */}
              <div className="lg:w-[40%] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-bold tracking-widest text-[#ff2a2a] uppercase bg-[#ff2a2a]/10 px-3 py-1 rounded-full">{project.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 mt-1.5 uppercase tracking-wider">{project.subtitle}</p>

                  <p className="text-sm text-gray-500 mt-6 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Detailed points & CTA */}
              <div className="lg:w-[60%] flex flex-col justify-between bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">

                <div className="flex flex-col gap-5">
                  <h4 className="text-xs font-black tracking-widest uppercase text-gray-400">Key Contributions</h4>
                  <ul className="flex flex-col gap-4">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-3 items-start text-sm md:text-base font-semibold text-gray-700 leading-snug">
                        {/* Checkmark icon */}
                        <svg className="w-5 h-5 text-[#ff2a2a] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Code Link */}
                <div className="mt-8 flex justify-end">
                  <a
                    href={project.github}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-[#ff2a2a] hover:shadow-[0_10px_20px_rgba(255,42,42,0.3)] font-bold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
