import TimelineItem from '../ui/TimelineItem';
import { educationData } from '../../data/profileData';

function EducationSection() {
  return (
    <div className="flex flex-col mt-2">
      {educationData.map((item) => (
        <TimelineItem key={item.name} name={item.name} data={item.data} />
      ))}
    </div>
  );
}

export default EducationSection;
