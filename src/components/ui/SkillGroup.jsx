import Label from './Label';

function SkillGroup({ category, data }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-base lg:text-lg font-medium text-silk/90 tracking-wide">{category}</h3>
      <div className="flex flex-wrap justify-center gap-2 mt-2.5">
        {data.map((item) => (
          <Label key={item.name} name={item.name} />
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
