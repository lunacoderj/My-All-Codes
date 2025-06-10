import React from 'react';

function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "Portfolio Static Site",
      description: "A responsive portfolio website built with HTML, CSS, and vanilla JavaScript showcasing my projects and skills.",
      img: "https://via.placeholder.com/400x250?text=Portfolio+Static",
      liveDemo: "https://example.com/portfolio-static",
      github: "https://github.com/yourprofile/portfolio-static",
    },
    {
      id: 2,
      title: "Todo List App",
      description: "A todo list built with HTML, CSS, and jQuery allowing users to add, edit, and delete tasks dynamically.",
      img: "https://via.placeholder.com/400x250?text=Todo+List",
      liveDemo: "https://example.com/todo-list",
      github: "https://github.com/yourprofile/todo-list",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A dashboard displaying real-time weather data using HTML, CSS, and JavaScript with API integration.",
      img: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
      liveDemo: "https://example.com/weather-dashboard",
      github: "https://github.com/yourprofile/weather-dashboard",
    }
  ];

  return (
    <section className="pt-16 pb-20 max-w-[1200px] mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Projects</h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((proj) => (
          <div key={proj.id} className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2 text-gray-900">{proj.title}</h3>
              <p className="text-gray-600">{proj.description}</p>
              <div className="mt-4">
                <a href={proj.liveDemo} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Live Demo</a> | 
                <a href={proj.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline"> GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
