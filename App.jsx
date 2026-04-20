import React, { useState } from "react";
import * as Icons from "lucide-react";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "Deep Learning Specialist",
      org: "Andrew Ng",
      imgUrl: "https://i.postimg.cc/prh1PwNm/IMG-20260419-230142.jpg",
    },
    {
      title: "Machine Learning Expert",
      org: "Stanford",
      imgUrl: "https://i.postimg.cc/15L1VKJN/IMG-20260419-230059.jpg",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-pink-200 bg-gradient-to-tr from-sky-50 via-pink-50 to-purple-50">
      {/* Lightbox for Certificates */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors">
              <Icons.X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}

      {/* Header Section */}
      <header className="bg-gradient-to-r from-pink-400 via-purple-500 to-sky-400 text-white py-20 px-6 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center md:text-left">
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 border border-white/30 text-white text-[10px] font-bold mb-6 backdrop-blur-md uppercase tracking-widest">
            Engineering Portfolio 2024
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight italic leading-tight">
            Esraa Al-Droubi
          </h1>
          <div className="mb-8 border-l-4 border-sky-300 pl-6 bg-white/10 py-4 rounded-r-2xl backdrop-blur-sm">
            <p className="text-xl md:text-2xl font-bold text-white italic leading-snug">
              "In the world of code, I don’t just write scripts.. I architect
              the intelligence of the future."
            </p>
          </div>
          <p className="text-lg md:text-xl opacity-95 font-medium mb-10 max-w-2xl text-sky-50 italic">
            Applied Information Technology Engineer (BAIT) specializing in{" "}
            <span className="font-bold underline decoration-pink-300 underline-offset-4 text-white">
              Flutter Development
            </span>{" "}
            & striving to advance my expertise in{" "}
            <span className="font-bold text-white italic">
              Artificial Intelligence
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded-xl backdrop-blur-lg border border-white/30 text-sm font-bold shadow-sm">
              <Icons.Phone size={18} /> 0936718948
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded-xl backdrop-blur-lg border border-white/30 text-sm font-bold shadow-sm">
              <Icons.Languages size={18} /> English: Very Good
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Professional Summary */}
        <section className="relative p-8 md:p-12 bg-white/80 backdrop-blur-md rounded-[32px] shadow-xl shadow-purple-100/50 border border-white overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-pink-400 to-purple-500"></div>
          <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3 italic tracking-tight">
            <Icons.User size={28} className="text-pink-500" /> Professional
            Summary
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic font-medium">
            A high-achieving{" "}
            <span className="font-bold text-purple-600 underline decoration-pink-200">
              Applied IT Engineer (BAIT)
            </span>
            , Class of 2024 from <span className="font-bold">SVU</span>. I am a
            specialized{" "}
            <span className="text-sky-600 font-bold underline decoration-sky-200">
              Flutter Developer
            </span>{" "}
            with a solid foundation in building robust cross-platform mobile
            ecosystems and back-end architectures using{" "}
            <span className="text-purple-600 font-bold underline decoration-purple-200">
              .NET/C#
            </span>
            . Beyond mobile, I craft high-performance, responsive web interfaces
            using{" "}
            <span className="text-pink-500 font-bold underline decoration-pink-200">
              React.js
            </span>
            . Currently, I am passionately advancing my knowledge in{" "}
            <span className="text-pink-600 font-bold italic">
              Artificial Intelligence
            </span>{" "}
            through specialized certifications under{" "}
            <span className="font-black">Andrew Ng</span>. I am eager to merge
            my engineering mindset with my growing ML expertise in a
            professional{" "}
            <span className="text-sky-600 font-bold bg-sky-50 px-2 rounded-md border border-sky-100">
              AI Internship
            </span>
            .
          </p>
        </section>

        {/* Technical Arsenal (Skills) */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center md:text-left italic tracking-tight">
            Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Front-End",
                desc: "Flutter, React.js, HTML5, CSS3, JavaScript",
                color: "pink",
                icon: <Icons.Layout />,
              },
              {
                title: "Back-End",
                desc: "C#, .NET Framework, REST APIs",
                color: "purple",
                icon: <Icons.Server />,
              },
              {
                title: "Databases",
                desc: "Firebase, MySQL",
                color: "sky",
                icon: <Icons.Database />,
              },
              {
                title: "Tools",
                desc: "Git, GitHub, VS Code, Android Studio, Figma",
                color: "indigo",
                icon: <Icons.Wrench />,
              },
              {
                title: "Other Specialist Skills",
                desc: "UI/UX Design, Responsive Web Design, Debugging, Version Control",
                color: "rose",
                icon: <Icons.Settings />,
              },
              {
                title: "Strengths",
                desc: "Detail-oriented, Problem-solving, Fast learner, Teamwork",
                color: "teal",
                icon: <Icons.Zap />,
              },
            ].map((skill, i) => (
              <div
                key={i}
                className={`p-6 bg-white rounded-[24px] border-b-8 border-${skill.color}-400 shadow-lg hover:-translate-y-1 transition-all`}
              >
                <div className={`text-${skill.color}-500 mb-4`}>
                  {React.cloneElement(skill.icon, { size: 24 })}
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-xs uppercase tracking-widest italic">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects & Experience */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800 italic tracking-tight">
            Projects & Experience
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "E-Commerce App",
                tech: "Flutter",
                color: "pink",
                desc: "A fully integrated mobile shopping app developed entirely with Flutter (Front & Back). Allows users to browse products, add them to the cart, and complete purchases smoothly with an elegant user interface.",
              },
              {
                title: "Mobile Store App",
                tech: "C# / .NET",
                color: "sky",
                desc: "A mobile store management system built using C# and .NET, designed to display smartphones, manage inventory, and handle dynamic product data.",
              },
              {
                title: "Clinic App",
                tech: "Flutter",
                color: "purple",
                desc: "A Flutter-based app for clinic management that allows patients to book appointments, view doctors, and manage medical records.",
              },
              {
                title: "Delivery App",
                tech: "Flutter",
                color: "pink",
                desc: "A mobile delivery application developed with Flutter, providing real-time order tracking and delivery management.",
              },
              {
                title: "University Accounting System",
                tech: "C#",
                color: "sky",
                desc: "A simple accounting and data management system built using C#, applying core database concepts and user interface integration.",
              },
            ].map((proj) => (
              <div
                key={proj.title}
                className="group bg-white p-8 rounded-[24px] border border-slate-100 hover:border-pink-200 transition-all shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                <span
                  className={`text-${proj.color}-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block`}
                >
                  {proj.tech}
                </span>
                <h3 className="text-xl font-bold text-slate-800 italic group-hover:text-purple-600 transition-colors mb-3">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  {proj.desc}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-pink-400 to-sky-400 mt-4 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Education, Certs, & Personal Info */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Education & Languages */}
          <div className="space-y-6">
            <div className="bg-white/90 p-8 rounded-[24px] border border-purple-100 shadow-md">
              <Icons.GraduationCap size={32} className="text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-1 italic text-sm">
                Syrian Virtual University
              </h3>
              <p className="text-purple-600 text-xs font-bold uppercase tracking-wider mb-4">
                Bachelor’s in Applied IT (2024)
              </p>

              <hr className="my-4 border-slate-100" />

              <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-tighter italic flex items-center gap-2">
                <Icons.Globe size={16} /> Languages
              </h3>
              <div className="flex gap-4 text-xs font-bold italic">
                <span className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full border border-pink-100">
                  Arabic: Native
                </span>
                <span className="bg-sky-50 text-sky-600 px-3 py-1 rounded-full border border-sky-100">
                  English: Very Good
                </span>
              </div>
            </div>

            <div className="bg-white/90 p-8 rounded-[24px] border border-purple-100 shadow-md">
              <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-tighter italic flex items-center gap-2">
                <Icons.Heart size={16} className="text-rose-500" /> Interests
              </h3>
              <ul className="text-xs text-slate-500 italic space-y-2">
                <li>• Mobile and Web Application Development</li>
                <li>• UI/UX Design and User Experience</li>
                <li>• Artificial Intelligence and Emerging Technologies</li>
                <li>• Continuous Learning and Self-Development</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-purple-600 to-sky-500 p-8 rounded-[24px] text-white shadow-lg">
            <Icons.Award size={40} className="text-pink-300 mb-5" />
            <h2 className="text-xl font-bold mb-4 italic uppercase tracking-tight">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(cert.imgUrl)}
                  className="bg-white/10 p-4 rounded-xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-bold italic">{cert.title}</p>
                    <p className="text-[10px] opacity-70 uppercase tracking-widest">
                      {cert.org}
                    </p>
                  </div>
                  <Icons.ExternalLink
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            <p className="mt-6 text-[10px] opacity-60 italic leading-relaxed">
              * Click on a certification to view the original document.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400 italic mb-6">
            Esraa Al-Droubi
          </h2>
          <div className="flex justify-center gap-8 mb-8">
            <Icons.Mail
              size={24}
              className="text-pink-500 hover:scale-110 cursor-pointer"
            />
            <Icons.Info
              size={24}
              className="text-sky-500 hover:scale-110 cursor-pointer"
            />
          </div>
          <p className="text-white text-[10px] font-mono tracking-[0.6em] uppercase">
            Engineering the Future
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
