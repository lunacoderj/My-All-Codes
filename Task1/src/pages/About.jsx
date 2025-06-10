import React from 'react';

function About() {
  return (
    <section className="pt-16 pb-20 max-w-[900px] mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-8">About Me</h2>
      <p className="mb-6 text-gray-700">
        I began my journey in web development during my B.Tech in Computer Science and Engineering specializing in AI & Machine Learning. Over the years, I have developed a deep passion for coding and creating seamless and responsive user interfaces.
      </p>
      <p className="mb-6 text-gray-700">
        During my internship at <span className="font-semibold">CompanyName</span>, I worked on front-end development projects, gaining hands-on experience with key web technologies and agile workflows.
      </p>
      <h3 className="text-2xl font-semibold mb-4">Technical Skills & Focus Areas</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>HTML, CSS, JavaScript, jQuery</li>
        <li>React.js & React Router</li>
        <li>Responsive & Mobile-First Design</li>
        <li>Git & Version Control</li>
        <li>UI/UX Principles & Accessibility</li>
      </ul>
    </section>
  );
}

export default About;
// This code defines an About component using React.
// It includes a brief introduction, technical skills, and focus areas.