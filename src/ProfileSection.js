import Github from './icons/Github';
import LinkedIn from './icons/LinkedIn';

function ProfileSection() {
    return (
        <div className="w-full h-auto flex flex-col items-center gap-4 lg:gap-8">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                <img className="w-full h-full bg-dark-60" src="./assets/img/rai.jpg"/>
            </div>
            <div className="flex flex-col">
            <p className="text-2xl lg:text-3xl font-bold">Hi!</p>
            <p className="text-2xl lg:text-3xl font-bold">I'm <span class="text-oceanic">Rai Raksa M</span></p>
            <p className="font-light text-xl">Fullstack Web Developer</p>
            </div>
            <div className="flex gap-2 text-silk -mt-4">
                <span className="w-10 h-10 w-8 h-8 hover:text-oceanic transition-all ease-in-out">
                    <a href="https://linkedin.com/rairaksa" target="_blank"> 
                        <LinkedIn />
                    </a>
                </span>
                <span className="w-10 h-10 w-8 h-8 hover:text-oceanic transition-all ease-in-out">
                    <a href="https://github.com/rairaksa" target="_blank"> 
                        <Github />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default ProfileSection;