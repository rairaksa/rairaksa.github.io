import Statistic from '../ui/Statistic';
import { profileData } from '../../data/profileData';

function AboutSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 font-light text-sm lg:text-base text-silk/90 leading-relaxed text-justify">
        {profileData.bio.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {profileData.stats.map((stat) => (
          <Statistic key={stat.description} value={stat.value} description={stat.description} />
        ))}
      </div>
      <div className="flex justify-center pt-1">
        <a
          href={profileData.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2.5 inline-flex items-center gap-2 rounded-lg border border-oceanic font-normal text-sm lg:text-base bg-oceanic text-silk hover:bg-transparent hover:text-oceanic transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}

export default AboutSection;
