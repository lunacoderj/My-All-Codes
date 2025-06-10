import React, { useState, useEffect } from 'react';

function ReactProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/yourusername/repos?per_page=10&sort=updated") // Replace 'yourusername' with your GitHub username
      .then(res => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then(data => {
        const reactRepos = data.filter(repo => repo.language === "JavaScript" || repo.description?.toLowerCase().includes("react"));
        setRepos(reactRepos);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="pt-16 pb-20 max-w-[1200px] mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-8">ReactJS Projects</h2>
      {loading && <p className="text-gray-700">Loading projects...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      {!loading && !error && repos.length === 0 && <p className="text-gray-700">No React projects found.</p>}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map(repo => (
          <div key={repo.id} className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{repo.name}</h3>
            <p className="text-gray-600 mb-4">{repo.description || "No description provided."}</p>
            <p className="text-sm text-gray-500"><span className="font-semibold">Language: </span>{repo.language || "N/A"}</p>
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReactProjects;
