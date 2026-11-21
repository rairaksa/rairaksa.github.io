import SkillGroup from '../ui/SkillGroup';
import { skillsData } from '../../data/profileData';

function SkillSection() {
  return (
    <div className="flex flex-col gap-5">
      {skillsData.map((group) => (
        <SkillGroup key={group.category} category={group.category} data={group.data} />
      ))}
    </div>
  );
}

export default SkillSection;
