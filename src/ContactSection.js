import Email from './icons/Email';
import Instagram from './icons/Instagram';

function ContactSection() {
    return (
        <div className="w-full h-auto flex flex-col gap-2">
            <button className="px-2 py-2 w-full rounded-lg mx-auto border border-oceanic font-normal bg-dark-80 text-oceanic hover:bg-oceanic hover:text-silk">
                <a href="mailto:rairaksa7@gmail.com" className="flex gap-2">
                    <div className="w-5 h-5">
                        <Email /> 
                    </div>
                    <span className="text-left font-normal">rairaksa7@gmail.com</span>
                </a>
            </button>
            <button className="px-2 py-2 w-full rounded-lg mx-auto border border-oceanic font-normal bg-dark-80 text-oceanic hover:bg-oceanic">
                <a href="https://instagram.com/raydeon" className="flex gap-2">
                    <div className="w-5 h-5">
                        <Instagram /> 
                    </div>
                    <span className="text-left font-normal">@raydeon</span>
                </a>
            </button>
        </div>
    )
}

export default ContactSection;