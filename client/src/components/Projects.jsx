import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Khushis04/repos")
      .then(res => res.json())
      .then(data => {
        // Optional: filter out forks or unwanted repos
        const filtered = data.filter(repo => !repo.fork);
        setRepos(filtered);
      })
      .catch(err => console.log("GitHub API Error:", err));
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="grid">
        {repos.map(repo => (
          <div className="card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

