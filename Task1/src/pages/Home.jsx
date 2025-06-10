import React from 'react';

function Home() {
  return (
    <section className="pt-16 pb-20 max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">Bellana Jagadeesh</h1>
        <p className="text-xl font-semibold text-gray-700 mb-6">Web Developer | B.Tech in CSE (AI & ML)</p>
        <p className="text-gray-600 max-w-md mb-6">
          Passionate about responsive web design and front-end development, I love crafting user-friendly and visually stunning digital experiences that engage and inspire.
        </p>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-700 transition" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition" aria-label="GitHub">GitHub</a>
        </div>
      </div>
      <div className="flex-shrink-0 w-64 h-64 rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <img src="https://via.placeholder.com/150" alt="Bellana Jagadeesh" className="object-cover w-full h-full" />
      </div>
    </section>
  );
}

export default Home;
// This code defines a Home component using React.