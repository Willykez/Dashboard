import { Reveal } from "../components/Reveal.jsx";
import { SkillBar } from "../components/SkillBar.jsx";
import { profile, skills } from "../data/profile.js";

const categories = Array.from(new Set(skills.map((s) => s.category)));

export function About() {
  return (
    <div className="screen">
      <Reveal as="div" className="screen-head">
        <h1>About</h1>
        <p>A bit more about how I work.</p>
      </Reveal>

      <Reveal as="section" className="panel">
        <h2>Bio</h2>
        <p className="bio-text">{profile.bio}</p>
      </Reveal>

      <Reveal as="section" className="panel">
        <h2>Skills</h2>
        <div className="skills-groups">
          {categories.map((cat) => (
            <div key={cat} className="skills-group">
              <h3>{cat}</h3>
              {skills
                .filter((s) => s.category === cat)
                .map((s, i) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 80} />
                ))}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
