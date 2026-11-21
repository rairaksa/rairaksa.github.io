import Statistic from './Statistic';

function AboutSection() {
  return (
    <div className="about">
      <p className="font-light mt-4 leading-relaxed">
        Backend Engineer based in Bandung, Indonesia 🇮🇩. My journey in technology started with a Bachelor's degree in Informatics Engineering (S.Kom.) from Widyatama University and an early foundation in wireless networking and campus IT infrastructure—giving me a deep, ground-up understanding of how distributed systems communicate and scale.
        <br />
        <br />
        Over the past decade, I evolved from building enterprise and aviation systems into architecting high-throughput backend microservices in Go (Golang) with PostgreSQL, MySQL, Redis, and AWS (SNS, SQS, S3). Today, I combine resilient system architecture with Grafana observability, n8n automation, and AI-assisted engineering workflows to turn complex product challenges into fast, dependable software.
      </p>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <Statistic value="11+" description="Years experience" />
        <Statistic value="15+" description="Projects completed" />
        <Statistic value="5" description="Companies worked" />
      </div>
      <div className="mt-4">
        <a href="./file/cv.pdf" target="_blank" rel="noreferrer">
          <button className="px-2 py-2 flex gap-2 rounded-lg mx-auto border border-oceanic font-normal bg-oceanic text-silk hover:bg-dark-80 hover:text-oceanic">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutSection;
