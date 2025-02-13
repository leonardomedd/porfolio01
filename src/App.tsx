import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code2, Database, Github as Git, Layout, Monitor, Server } from 'lucide-react';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            <img 
               src="https://github.com/leonardomedd.png" 
               alt="Leonardo Medeiros de Almeida"
               className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
            />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Leonardo Medeiros de Almeida
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-gray-400 mb-8">Front-End Developer</p>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Get in Touch
          </a>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} className="text-gray-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm a passionate Front-End Developer with expertise in building modern, responsive web applications. 
            My focus is on creating exceptional user experiences using cutting-edge technologies and best practices 
            in web development.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            With a strong foundation in React.js and its ecosystem, I strive to deliver high-quality, 
            scalable solutions that meet both user needs and business objectives.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 size={32} />, name: 'React.js & Next.js', desc: 'Modern web frameworks' },
              { icon: <Monitor size={32} />, name: 'JavaScript', desc: 'Dynamic programming' },
              { icon: <Layout size={32} />, name: 'Tailwind CSS', desc: 'Responsive design' },
              { icon: <Database size={32} />, name: 'Firebase', desc: 'Backend services' },
              { icon: <Git size={32} />, name: 'Git', desc: 'Version control' },
              { icon: <Server size={32} />, name: 'REST APIs', desc: 'API integration' }
            ].map((skill, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                <div className="text-blue-500 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'EduLearn Platform',
                desc: 'Online learning platform built with Next.js, React, Firebase, and Tailwind CSS, featuring authentication, dark mode, student and instructor dashboards, and smooth animations.',
                image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800&h=500',
                link: 'https://github.com/leonardomedd/edulearn'
              },
              {
                title: 'Pet Shop E-commerce',
                desc: 'Fictional pet store e-commerce application built with React and Bootstrap.',
                image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800&h=500',
                link: 'https://github.com/leonardomedd/simple-petshop-website'
              }
            ].map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg block"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com/leonardomedd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/leonardo-medeiros-de-almeida-996302254/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={32} />
            </a>
            <a href="mailto:leonardomedd@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={32} />
            </a>
          </div>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Leonardo Medeiros de Almeida. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;