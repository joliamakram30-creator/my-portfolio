import React, { useState } from 'react';

export default function App() {
  const [activeSkillTab, setActiveSkillTab] = useState('technical');

  // مهاراتك
  const skills = {
    technical: [
      'Flutter & Dart', 'React.js', 'Python & Flask', 'JavaScript (ES6+)', 
      'Node.js', 'RESTful APIs', 'PostgreSQL / Databases', 'Tailwind CSS', 
      'HTML5 & CSS3', 'Git & GitHub', 'State Management (Provider/BLoC)'
    ],
    soft: [
      'Problem Solving', 'Teamwork & Collaboration', 'Effective Communication',
      'Continuous Learning', 'Time Management', 'Attention to Detail'
    ]
  };

  // قائمة جميع مشاريعك
  const projects = [
    {
      id: 1,
      title: 'Re-Tadweer (Full Stack Platform)',
      description: 'منصة متكاملة لإعادة التدوير والخدمات البيئية، تشمل واجهة مستخدم تفاعلية (Frontend) ونظام خلفي قوي (Backend RESTful API) مع إدارة البيانات.',
      techStack: ['React.js', 'Python', 'Flask', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
      isFullStack: true,
      frontendLink: 'https://github.com/joliamakram30-creator/Re-Tadweer-Frontend',
      backendLink: 'https://github.com/joliamakram30-creator/re_tadweer_backend_1',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Pet Adoption App',
      description: 'تطبيق موبايل مخصص لتسهيل عملية تبني الحيوانات الأليفة (القطط والكلاب) واستعراض تفاصيلها والعناية بها بتصميم عصري وتجربة مستخدم سلسة.',
      techStack: ['Flutter', 'Dart', 'UI/UX', 'Mobile App'],
      isFullStack: false,
      githubLink: 'https://github.com/joliamakram30-creator/pet-adoption-app1',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'E-Commerce Flutter App',
      description: 'تطبيق متجر إلكتروني للموبايل يتيح للمستخدمين تصفح الملابس والأحذية والمنتجات، إضافتها للسلة، ومتابعة الشراء بواجهة جذابة وأداء سريع.',
      techStack: ['Flutter', 'Dart', 'REST API', 'State Management'],
      isFullStack: false,
      githubLink: 'https://github.com/joliamakram30-creator/ecommerce-flutter-app',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5idkvFC47UtTYlmv57W-b6yROWJzVP_Zo87xmJvm4A&s=10'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12 transition-all">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Header / Hero Section */}
        <header className="text-center space-y-6 pt-8">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium animate-pulse">
            Welcome to my Portfolio ✨
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-200 tracking-tight">
            Julia Makram Zarif
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-300">
            Flutter Developer | Full Stack Web Developer
          </p>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            مُطوّرة تطبيقات موبايل ومواقع ويب متكاملة. شغوفة ببناء واجهات مستخدم جذابة وأنظمة قوية عالية الأداء.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>
        </header>

        {/* 1. About Me Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-xl hover:border-slate-700 transition-all duration-300">
          <div className="max-w-3xl mx-auto space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white text-center mb-6">About Me</h2>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              مرحباً! أنا <strong className="text-blue-400">جوليا مكرم ظريف</strong>، مطورة متخصصّة في بناء تطبيقات الموبايل باستخدام <strong className="text-emerald-400">Flutter</strong> وتطبيقات الويب المتكاملة <strong className="text-emerald-400">Full Stack</strong>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              أجمع بين التصميم الإبداعي والحلول البرمجية القوية. أعمل دائماً على تطبيق أفضل ممارسات كتابة الكود (Clean Code) وتوفير تجربة مستخدم سلسة وممتعة عبر مختلف الشاشات والمنصات.
            </p>
          </div>
        </section>

        {/* 2. Skills Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">My Skills</h2>

          {/* Skill Tabs */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveSkillTab('technical')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeSkillTab === 'technical'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveSkillTab('soft')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeSkillTab === 'soft'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Soft Skills
            </button>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills[activeSkillTab].map((skill, index) => (
              <span
                key={index}
                className="bg-slate-900/90 border border-slate-800 px-5 py-2.5 rounded-xl text-slate-200 text-sm font-medium hover:border-blue-500/60 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 3. Featured Projects Section */}
        <section id="projects" className="space-y-10">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-md font-mono border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex flex-wrap gap-3">
                  {project.isFullStack ? (
                    <>
                      <a
                        href={project.frontendLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl text-xs font-semibold transition duration-300 transform hover:scale-105 border border-slate-700"
                      >
                        Frontend Code
                      </a>
                      <a
                        href={project.backendLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-semibold transition duration-300 transform hover:scale-105 shadow-md shadow-emerald-600/20"
                      >
                        Backend Code
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-xl text-sm font-medium transition duration-300 transform hover:scale-105 border border-slate-700"
                    >
                      GitHub Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact Us Section */}
        <section id="contact" className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Contact Us / Let's Connect!</h2>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
            يسعدني دائماً التراسل لبناء مشاريع جديدة أو الانضمام لفرص عمل ممتازة. تواصل معي عبر البريد أو الروابط التالية:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="mailto:jooliamakram736@gmail.com"
              className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/julia-makram-394171418?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white px-7 py-3.5 rounded-xl font-medium border border-slate-700 transition-all duration-300 transform hover:scale-105"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/joliamakram30-creator"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white px-7 py-3.5 rounded-xl font-medium border border-slate-700 transition-all duration-300 transform hover:scale-105"
            >
              GitHub Profile
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}