import { EmailIcon, InstagramIcon } from '../icons';
import { profileData } from '../../data/profileData';

const ICON_MAP = {
  email: EmailIcon,
  instagram: InstagramIcon,
};

function ContactSection() {
  return (
    <div className="w-full flex flex-row justify-center gap-3 mt-2">
      {profileData.contacts.map((contact) => {
        const IconComponent = ICON_MAP[contact.icon];
        return (
          <a
            key={contact.name}
            href={contact.url}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noreferrer' : undefined}
            aria-label={contact.name}
            className="w-9 h-9 p-1.5 rounded-lg bg-dark-60/80 border border-silk/10 text-silk hover:text-oceanic hover:border-oceanic/60 transition-all duration-200"
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}

export default ContactSection;
