import { useState } from "react";
import { Reveal } from "../components/Reveal.jsx";
import { Icon } from "../components/icons.jsx";
import { profile } from "../data/profile.js";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="screen">
      <Reveal as="div" className="screen-head">
        <h1>Contact</h1>
        <p>Say hello, or reach out about a project.</p>
      </Reveal>

      <div className="contact-grid">
        <Reveal as="section" className="panel">
          <h2>Send a message</h2>
          {sent ? (
            <div className="contact-success">
              <Icon name="arrowRight" size={16} />
              Thanks — this is a static demo form, so wire it up to your own
              backend or form service to actually receive messages.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" required placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} required placeholder="What's on your mind?" />
              </label>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          )}
        </Reveal>

        <Reveal as="section" className="panel" delay={100}>
          <h2>Find me elsewhere</h2>
          <div className="social-links">
            {profile.social.map((link) => (
              <a
                key={link.label}
                className="social-link"
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <Icon name={link.icon} size={18} />
                <span>{link.label}</span>
                <Icon name="external" size={14} className="social-link-ext" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
