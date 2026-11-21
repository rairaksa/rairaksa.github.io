import Email from './icons/Email';
import Instagram from './icons/Instagram';

function ContactSection() {
  return (
    <div className="w-full h-auto flex flex-row justify-center gap-2 mt-4">
      <span className="w-8 h-8 hover:text-oceanic transition-all ease-in-out">
        <a href="mailto:rairaksa7@gmail.com" target="_blank" rel="noreferrer">
          <Email />
        </a>
      </span>
      <span className="w-8 h-8 hover:text-oceanic transition-all ease-in-out">
        <a href="https://instagram.com/raydeon" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </span>
    </div>
  );
}

export default ContactSection;
