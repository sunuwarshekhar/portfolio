"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  MapPin,
  Calendar,
  Code,
  Database,
  Server,
  Palette,
  Cloud,
  Container,
  Workflow,
  Smartphone,
  ShoppingCart,
  Heart,
  Stethoscope,
  TrendingUp,
  Activity,
} from "lucide-react";
import Image from "next/image";
import nepmedsIcon from "../../public/nepmed.png";
import sybazzarIcon from "../../public/sybazzar.png";
import plussizeIcon from "../../public/plussize.jpeg";
import kollectIcon from "../../public/kollect.png";
import samsungIcon from "../../public/samsung.jpg";
import iofundIcon from "../../public/iofund.png";
import profileImg from "../../assets/profile.jpeg";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "React/Next.js", icon: Code, color: "bg-blue-500" },
    { name: "TypeScript", icon: Code, color: "bg-blue-600" },
    { name: "Node.js", icon: Server, color: "bg-green-600" },
    { name: "Express.js", icon: Server, color: "bg-gray-600" },
    { name: "MongoDB", icon: Database, color: "bg-green-500" },
    { name: "PostgreSQL", icon: Database, color: "bg-blue-700" },
    { name: "Firebase", icon: Database, color: "bg-orange-500" },
    { name: "GraphQL", icon: Workflow, color: "bg-pink-500" },
    { name: "Tailwind CSS", icon: Palette, color: "bg-teal-500" },
    { name: "AWS/Azure", icon: Cloud, color: "bg-purple-600" },
    { name: "Docker", icon: Container, color: "bg-blue-400" },
    { name: "Redux/Zustand", icon: Workflow, color: "bg-purple-500" },
  ];

  const projects = [
    {
      title: "SamsungPlaza",
      link: "https://www.samsungplaza.com.np/",
      favicon: samsungIcon,
      fallbackIcon: Smartphone,
      color: "bg-transparent p-1",
    },
    {
      title: "SyBazzar",
      link: "https://www.sybazzar.com/",
      favicon: sybazzarIcon,
      fallbackIcon: ShoppingCart,
      color: "bg-gray-100",
    },
    {
      title: "PlussizeNepal",
      link: "https://www.plussizenepal.com/",
      favicon: plussizeIcon,
      fallbackIcon: Heart,
      color: "bg-gray-100",
    },
    {
      title: "Nepmeds",
      link: "https://www.nepmeds.com.np/",
      favicon: nepmedsIcon,
      fallbackIcon: Stethoscope,
      color: "bg-gray-100 p-1",
    },
    {
      title: "IO-Fund",
      link: "#",
      favicon: iofundIcon,
      fallbackIcon: TrendingUp,
      color: "bg-white",
    },
    {
      title: "KollectAI",
      link: "#",
      favicon: kollectIcon,
      fallbackIcon: Activity,
      color: "bg-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300s ${
          isScrolled ? " backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`cursor-pointer capitalize transition-colors duration-200 hover:text-blue-400 ${
                      activeSection === item ? "text-blue-400" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden  backdrop-blur-md rounded-lg mt-2 py-4">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize hover:text-blue-400 hover:bg-blue-400/10 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 mt-12 md:mt-20">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 p-1">
              <Image
                src={profileImg}
                height={400}
                width={400}
                alt="Profile"
                className="w-full h-full rounded-full object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Shekhar Sunuwar
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-4 font-semibold">
              Full Stack Software Engineer
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              3+ years building scalable web applications with React, Next.js,
              Node.js, and modern cloud technologies
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/sunuwarshekhar"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shekhar-sunuwar-293449149/"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:forofficialshekhar@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m a passionate Full Stack Software Engineer with 3+ years
                of experience building scalable and interactive web
                applications. I specialize in JavaScript and TypeScript, with
                strong expertise in React, Next.js, and modern state management
                solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My experience spans the complete development lifecycle - from
                designing pixel-perfect UI components based on Figma designs to
                deploying robust backend APIs in cloud environments. I&apos;ve
                successfully delivered e-commerce platforms, SaaS products, and
                enterprise dashboards.
              </p>

              <div className="bg-white/5 rounded-lg p-4 mt-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  Professional Experience
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-medium">
                      Software Engineer - RPA Nepal
                    </p>
                    <p className="text-sm text-gray-400">July 2025 – Present</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Software Engineer - Waft Tech
                    </p>
                    <p className="text-sm text-gray-400">
                      May 2023 – July 2025
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      Software Engineer, Frontend - Hunchha Digital
                    </p>
                    <p className="text-sm text-gray-400">
                      March 2022 – April 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <MapPin size={20} className="text-blue-400 mr-2" />
                    <span className="text-sm text-gray-400">Location</span>
                  </div>
                  <p className="text-white font-semibold">Kathmandu, Nepal</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Calendar size={20} className="text-blue-400 mr-2" />
                    <span className="text-sm text-gray-400">Experience</span>
                  </div>
                  <p className="text-white font-semibold">3+ Years</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&h=400&fit=crop"
                  alt="Coding workspace"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-xl ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const FallbackIcon = project.fallbackIcon;
              return (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group hover:scale-105 cursor-pointer border border-transparent hover:border-blue-400/30"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-xl ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden`}
                    >
                      {project.favicon ? (
                        <Image
                          src={project.favicon}
                          alt={`${project.title} logo`}
                          width={200}
                          height={200}
                          className="w-full h-full object-contain rounded-lg"
                          //   onError={(e) => {
                          //     e.target.style.display = "none";
                          //     e.target.nextSibling.style.display = "block";
                          //   }}
                        />
                      ) : null}
                      <FallbackIcon
                        size={28}
                        className={`text-white ${
                          project.favicon ? "hidden" : "block"
                        }`}
                        style={{ display: project.favicon ? "none" : "block" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>
          <h2 className="text-2xl md:text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mt-12">
            And many more...
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and interesting
            projects. Let&apos;s discuss how we can bring your ideas to life!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">forofficialshekhar@gmail.com</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 text-blue-400 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+977 9813815431</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <Github className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/sunuwarshekhar</p>
            </div>
          </div>

          <a
            href="mailto:forofficialshekhar@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200"
          >
            <Mail className="mr-2" size={20} />
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-gray-400">© 2025 Shekhar Sunuwar.</p>
      </footer>
    </div>
  );
}
