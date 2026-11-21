import Label from './Label';

function Skill(props) {
  const { category, data } = props;

  return (
    <div className="mt-2">
      <span className="text-xl">{category}</span>
      <div className="flex flex-wrap justify-center gap-2 mt-2 mb-4">
        {data.map((value) => (
          <Label key={value.name} name={value.name} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
