'use client';

import { useEffect } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        console.log("Page theme changed:", theme, "resolvedTheme:", resolvedTheme);
        console.log("HTML class:", document.documentElement.className);
    }, [theme, resolvedTheme]);

    const projects = [
        {
            title: "BizPlay On-Premise",
            description: "Enterprise business management solution providing secure expense tracking and management services for BizPlay users.",
            image: "/images/bizplay_on_premise.webp",
            tech: ["Swift", "SwiftUI", "iOS", "Enterprise"]
        },
        {
            title: "BZP Expense",
            description: "Expense tracking and management system making expense monitoring and management easier.",
            image: "/images/bzpexpense.webp",
            tech: ["Swift", "iOS", "Expense Management"]
        },
        {
            title: "Digital Library",
            description: "Volunteer project: Designed UX/UI for digital library providing free e-books and videos to children and students.",
            image: "/images/digital_library.png",
            tech: ["UX/UI Design", "Digital Library", "Volunteer"]
        },
        {
            title: "TripPlus",
            description: "Travel planning and booking application",
            image: "/images/tripplus.webp",
            tech: ["iOS", "Travel", "Booking"]
        },
        {
            title: "WeCafe",
            description: "Cafe management and ordering system",
            image: "/images/wecafe.webp",
            tech: ["iOS", "Cafe Management", "Ordering"]
        }
    ];

    const skills = [
        { name: "Swift", level: 95 },
        { name: "SwiftUI", level: 90 },
        { name: "iOS Development", level: 95 },
        { name: "Project Leadership", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "MVVM Architecture", level: 90 },
        { name: "Clean Architecture", level: 85 },
        { name: "Team Collaboration", level: 90 }
    ];

    const languages = [
        { name: "English", level: "Professional" },
        { name: "Khmer", level: "Native" },
        { name: "Korean", level: "Intermediate" }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">


            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="relative inline-block">
                            <Image
                                src="/images/profile.png"
                                alt="Nem Sothea"
                                width={150}
                                height={150}
                                className="rounded-full mx-auto mb-6 border-4 border-blue-500 dark:border-white shadow-2xl"
                            />
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-white to-gray-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                            Nem Sothea
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
                            Senior iOS Engineer & Team Leader
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                            Senior iOS Engineer & Mobile Department Team Leader
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Senior iOS engineer specializing in enterprise mobile app development and team leadership at KOSIGN.
                            Expert in modern architecture patterns and mentoring. Currently pursuing advanced studies in AI and new technologies.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex gap-4 justify-center flex-wrap">

                        <a
                            href="#contact"
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Get In Touch
                        </a>

                        <a
                            href="#projects"
                            className="border-2 border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-white dark:hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                            View Projects
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        data-aos="fade-up"
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-blue-600 dark:bg-white mx-auto"></div>
                    </motion.div>

                    <motion.div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="grid md:grid-cols-2 gap-12 items-start"
                    >
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                Who I Am
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Hello! I'm <strong className="text-blue-600 dark:text-blue-300">Nem Sothea</strong> from Phnom Penh, Cambodia. I love creating impactful mobile experiences
                                and leading teams to produce high-quality iOS applications. My journey in technology has taken me from
                                hands-on development to mentoring and guiding others.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                I'm always focused on innovation and collaboration, specializing in enterprise iOS app architecture,
                                modern UI implementation, and team growth and mentoring.
                            </p>

                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Education</h4>
                            <div className="space-y-3 mb-6">
                                <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-200 dark:border-gray-600">
                                    <p className="font-semibold text-gray-900 dark:text-white">Master's degree of Science, Computer Science</p>
                                    <p className="text-blue-600 dark:text-blue-300">Asia Euro University (August - Present)</p>
                                </div>
                                <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg border border-purple-200 dark:border-gray-600">
                                    <p className="font-semibold text-gray-900 dark:text-white">Bachelor of Computer Science</p>
                                    <p className="text-purple-600 dark:text-purple-300">University of Phnom Penh (2011 - 2016)</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-center bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-200 dark:border-gray-600">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">7+</div>
                                    <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                                </div>
                                <div className="text-center bg-purple-50 dark:bg-gray-800 p-4 rounded-lg border border-purple-200 dark:border-gray-600">
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
                                    <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                                </div>
                                <div className="text-center bg-pink-50 dark:bg-gray-800 p-4 rounded-lg border border-pink-200 dark:border-gray-600">
                                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">Team</div>
                                    <div className="text-gray-600 dark:text-gray-300">Leader</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="space-y-2 mb-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-blue-600 dark:text-blue-300">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                className="bg-blue-600 dark:bg-white h-2 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
                                <div className="space-y-2">
                                    {languages.map((lang) => (
                                        <div key={lang.name} className="flex justify-between items-center">
                                            <span className="text-gray-600 dark:text-gray-300 font-medium">{lang.name}</span>
                                            <span className="px-3 py-1 bg-green-100 dark:bg-gray-800 text-green-600 dark:text-green-300 text-sm rounded-full border border-green-200 dark:border-gray-600">
                                                {lang.level}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        data-aos="fade-up"
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
                        <div className="w-24 h-1 bg-blue-600 dark:bg-white mx-auto"></div>
                    </motion.div>

                    <motion.div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-blue-600 dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                <svg className="w-8 h-8 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    KOSIGN [Korean International Software Development Network]
                                </h3>
                                <p className="text-lg text-blue-600 dark:text-blue-300 font-semibold mb-2">
                                    Senior iOS Engineer & Mobile Department Team Leader
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    March 2017 - Present | Phnom Penh, Cambodia
                                </p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Lead enterprise-level iOS app development using Swift and SwiftUI</li>
                                    <li>• Manage team operations as Mobile Department Team Leader</li>
                                    <li>• Implement and optimize modern architecture patterns (MVVM, Clean Architecture)</li>
                                    <li>• Pioneer in implementing modern iOS development practices</li>
                                    <li>• Focus on enterprise iOS app architecture and modern UI implementation</li>
                                    <li>• Design systems and RESTful API integration</li>
                                    <li>• Backend and system integration</li>
                                    <li>• Team mentoring and growth</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        data-aos="fade-up"
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                        <div className="w-24 h-1 bg-blue-600 dark:bg-white mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-105"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        data-aos="fade-up"
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                        <div className="w-24 h-1 bg-blue-600 dark:bg-white mx-auto"></div>
                        <p className="text-gray-600 dark:text-gray-300 mt-4">
                            I'm always interested in new opportunities and exciting projects.
                        </p>
                    </motion.div>

                    <motion.div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="flex justify-center items-center min-h-[400px]"
                    >
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Let&apos;s Connect
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 dark:bg-white rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                                        <p className="text-blue-600 dark:text-blue-300">010-552-563</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-purple-600 dark:bg-white rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                                        <p className="text-purple-600 dark:text-purple-300">nemsothea13@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-pink-600 dark:bg-white rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                                        <p className="text-pink-600 dark:text-pink-300">Phnom Penh, Cambodia</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <a
                                        href="https://linkedin.com/in/nem-sothea"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com/nemsothea"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 bg-gray-100 dark:bg-black text-center transition-colors duration-300">
                <p className="text-gray-600 dark:text-gray-400">
                    © 2025 Nem Sothea. All rights reserved.
                </p>
            </footer>
            {/* Scroll to Top Button */}
            <button
                id="scrollToTop"
                className="scroll-to-top"
                title="Scroll to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18,15 12,9 6,15"></polyline>
                </svg>
            </button>
        </div>
    );
}