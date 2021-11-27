import './App.css';
import ProfileSection from './ProfileSection';
import SectionTitle from './SectionTitle';
import AboutSection from './AboutSection';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';

function App() {
  return (
    <div className="App relative bg-dark-60 font-josefin text-silk px-2 lg:px-0 py-2 lg:py-8">
      <div className="card w-full md:w-1/3 h-auto mx-auto bg-dark-80 pt-24 pb-8 px-4 lg:px-8">
        <section className="profile">
          <ProfileSection />
        </section>
        <section className="about mt-8">
          <SectionTitle title='About' />
          <AboutSection />
        </section>
        <section className="skills mt-8">
          <SectionTitle title="Skills"></SectionTitle>
          <SkillSection />
        </section>
        <section className="experience mt-8">
          <SectionTitle title="Experiences"></SectionTitle>
          <ExperienceSection />
        </section>
        <section className="portfolio mt-8">
          <SectionTitle title="Portfolio"></SectionTitle>
          <PortfolioSection />
        </section>
        <section className="contact mt-8">
          <SectionTitle title="Get in touch!" />
          <ContactSection />
        </section>
        <section className="flex justify-center mt-8">
          <span className="font-light">© Rai Raksa Muhamad</span>
        </section>
      </div>
    </div>
  );
}

export default App;
