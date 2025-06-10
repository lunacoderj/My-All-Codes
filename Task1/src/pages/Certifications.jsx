import React from 'react';

function Certifications() {
  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
      link: "https://www.freecodecamp.org/certification/yourprofile/responsive-web-design"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
      link: "https://www.freecodecamp.org/certification/yourprofile/javascript-algorithms-and-data-structures"
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2023",
      link: "https://www.udemy.com/certificate/yourprofile/react"
    }
  ];

  return (
    <section className="pt-16 pb-20 max-w-[900px] mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Certifications & Workshops</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-black"
            aria-label={`View certification ${cert.name} from ${cert.issuer}`}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{cert.name}</h3>
            <p className="text-gray-600">{cert.issuer} - {cert.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
