import TimelineItem from '../ui/TimelineItem';
import { experiencesData } from '../../data/profileData';

function ExperienceSection() {
  return (
    <div className="flex flex-col mt-2">
      {experiencesData.map((item) => (
        <TimelineItem key={item.name} name={item.name} data={item.data} />
      ))}
    </div>
  );
}

export default ExperienceSection;
