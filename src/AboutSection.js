import Statistic from './Statistic';

function AboutSection() {
    return (
        <div className="about">
            <p className="font-light mt-4">
                Informatics Engineer alumnus at Widyatama University. Full-Stack Web Developer from Bandung, Indonesia 🇮🇩
                <br/>
                <br/>
                Currently working some Laravel project and learning ReactJS, ExpressJS and TailwindCSS. I'm also interested to UI Design and looking to collaborate on Open Source and/or Web Apps project.  
            </p>
            <div className="grid grid-cols-3 gap-2 mt-4">
                <Statistic value="7+" description="Years experience"/>
                <Statistic value="10+" description="Projects completed"/>
                <Statistic value="4" description="Companies worked"/>
            </div>
            <div className="mt-4">
                <a href="./file/cv.pdf" target="_blank">
                    <button className="px-2 py-2 flex gap-2 rounded-lg mx-auto border border-oceanic font-normal bg-oceanic text-silk hover:bg-dark-80 hover:text-oceanic">
                    <span className="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    Download Resume
                    </button>
                </a> 
            </div>
        </div>
    )
}

export default AboutSection;