import './App.css';
import SectionTitle from './components/ui/SectionTitle';
import {
  ProfileSection,
  AboutSection,
  SkillSection,
  ExperienceSection,
  EducationSection,
  PortfolioSection,
  ContactSection,
} from './components/sections';
import { profileData } from './data/profileData';

function App() {
  return (
    <div className="App min-h-screen bg-dark-60 font-josefin text-silk px-3 sm:px-6 py-4 sm:py-10">
      <main className="card w-full max-w-xl mx-auto bg-dark-80 rounded-2xl shadow-2xl border border-silk/5 pt-12 pb-10 px-5 sm:px-8">
        <section className="profile">
          <ProfileSection />
        </section>

        <section className="about mt-10">
          <SectionTitle title="About" />
          <AboutSection />
        </section>

        <section className="skills mt-10">
          <SectionTitle title="Skills" />
          <SkillSection />
        </section>

        <section className="experience mt-10">
          <SectionTitle title="Experiences" />
          <ExperienceSection />
        </section>

        <section className="education mt-10">
          <SectionTitle title="Education" />
          <EducationSection />
        </section>

        <section className="portfolio mt-10">
          <SectionTitle title="Portfolio" />
          <PortfolioSection />
        </section>

        <section className="contact mt-10">
          <SectionTitle title="Get in touch!" />
          <ContactSection />
        </section>

        <footer className="flex justify-center mt-10 pt-6 border-t border-silk/10">
          <span className="font-light text-sm text-silk/60">© {profileData.name}</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
