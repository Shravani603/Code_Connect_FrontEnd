import React from "react";
import { Link } from "react-router-dom";
import SiteNav from "../components/SiteNav";

const features = [
  { title: "Real-time collaboration", text: "Everyone in a room sees code changes the moment they happen, powered by WebSockets." },
  { title: "Instant rooms", text: "Create a room with one click and share the Room ID. No sign-up required." },
  { title: "Live presence", text: "See who is in the room and who is typing right now." },
  { title: "Run your code", text: "Execute code from the editor and view the output without leaving the page." },
];

const steps = [
  "Create a new room or paste an invitation Room ID.",
  "Choose a username and join.",
  "Write code together and run it in real time.",
];

function About() {
  return (
    <div className="homepage aboutpage">
      <SiteNav />
      <main className="aboutMain">
        <section className="aboutHero">
          <h1>Pair programming, <span className="gradientText">simplified.</span></h1>
          <p>
            Code Connect is a real-time collaborative code editor that lets you and your
            teammates write, share and run code together from anywhere.
          </p>
          <Link to="/" className="btn primaryBtn">Get started</Link>
        </section>

        <section className="aboutSection">
          <h2>Features</h2>
          <div className="featureGrid">
            {features.map((f) => (
              <div className="featureCard" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="aboutSection">
          <h2>How it works</h2>
          <ol className="stepsList">
            {steps.map((s, i) => (
              <li key={s}><span className="stepNum">{i + 1}</span>{s}</li>
            ))}
          </ol>
        </section>
      </main>
      <footer>
        <h4>
          Built &nbsp;by&nbsp;
          <a href="https://github.com/Shravani603">Shravani</a>
        </h4>
      </footer>
    </div>
  );
}

export default About;
