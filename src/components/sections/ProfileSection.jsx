import { GithubIcon, LinkedInIcon } from '../icons';
import { profileData } from '../../data/profileData';

const ICON_MAP = {
  linkedin: LinkedInIcon,
  github: GithubIcon,
};

function ProfileSection() {
  return (
    <header className="w-full flex flex-col items-center text-center gap-4">
      <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden ring-2 ring-oceanic/60 ring-offset-4 ring-offset-dark-80 shadow-lg">
        <img
          className="w-full h-full object-cover bg-dark-60"
          src={profileData.avatar}
          alt={profileData.name}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl lg:text-2xl font-bold text-silk/90">Hi!</p>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
          I'm <span className="text-oceanic">{profileData.shortName}</span>
        </h1>
        <p className="font-light text-lg lg:text-xl text-silk/85">{profileData.role}</p>
      </div>
      <div className="flex items-center justify-center gap-3 pt-1">
        {profileData.socials.map((social) => {
          const IconComponent = ICON_MAP[social.icon];
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className="w-9 h-9 p-1.5 rounded-lg bg-dark-60/80 border border-silk/10 text-silk hover:text-oceanic hover:border-oceanic/60 transition-all duration-200"
            >
              <IconComponent />
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default ProfileSection;
