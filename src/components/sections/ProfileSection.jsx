import { GithubIcon, LinkedInIcon } from '../icons';
import { profileData } from '../../data/profileData';

const ICON_MAP = {
  linkedin: LinkedInIcon,
  github: GithubIcon,
};

function ProfileSection() {
  const emailContact = profileData.contacts.find((c) => c.icon === 'email');

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
      <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
        {profileData.resumeUrl && (
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-normal bg-oceanic text-white hover:bg-oceanic/90 transition-all duration-200 shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download CV</span>
          </a>
        )}
        {emailContact && (
          <a
            href={emailContact.url}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-normal bg-dark-60/80 border border-silk/15 text-silk hover:text-oceanic hover:border-oceanic/60 transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact Me</span>
          </a>
        )}
      </div>
    </header>
  );
}

export default ProfileSection;
