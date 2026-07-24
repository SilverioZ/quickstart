import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Quickstart</h1>
        <p>My first React app, deployed on Netlify.</p>
      </header>

      <main>
        <section>
          <h2>A picture</h2>
          <img
            src="https://picsum.photos/seed/quickstart/700/400"
            alt="Random placeholder"
          />
        </section>

        <section>
          <h2>A video</h2>
          <video controls width="100%">
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              type="video/mp4"
            />
            Your browser doesn't support video.
          </video>
        </section>

        <section>
          <h2>About this</h2>
          <p>
            This is a simple Create React App project I'm using to learn how
            to deploy a site on Netlify.
          </p>
        </section>
      </main>

      <footer>
        <p>Built with React · Deployed on Netlify</p>
      </footer>
    </div>
  );
}