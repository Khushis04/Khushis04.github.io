export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        <div className="card">
          <h3>Recipe Recommender</h3>
          <p>2M+ recipe dataset, FAISS search, and web app for smart cooking ideas.</p>
          <a href="https://github.com/Khushis04/recipe-suggesrtor-web">View on GitHub</a>
        </div>

        <div className="card">
          <h3>Smart Wardrobe</h3>
          <p>AI + fashion project suggesting outfits based on weather & trends.</p>
          <a href="https://github.com/Khushis04/wardrop-proj">View on GitHub</a>
        </div>

        <div className="card">
          <h3>Small Scale LLM</h3>
          <p>Trying to make a basic LLM to understand how an LLM works.</p>
          <a href="https://github.com/Khushis04/small-scale-llm">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}
