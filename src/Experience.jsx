function Experience(props) {
  const { name, data, position, year, description } = props;

  return (
    <div className="flex flex-col mb-5 border-l-2 border-oceanic/40 pl-3">
      <div className="flex justify-between items-baseline">
        <span className="text-left font-medium text-lg">{name}</span>
        {year && <span className="text-right text-sm opacity-80">{year}</span>}
      </div>
      {data.map((value) => (
        <div key={`${value.position}-${value.year}`} className="flex flex-col mt-1.5">
          <div className="flex justify-between items-baseline">
            <span className="text-left text-oceanic font-normal">{value.position}</span>
            <span className="font-light text-sm opacity-80">{value.year}</span>
          </div>
          {value.description && (
            <p className="font-light text-left text-sm opacity-85 mt-1 leading-relaxed">
              {value.description}
            </p>
          )}
        </div>
      ))}
      {position && <span className="text-left font-light">{position}</span>}
      {description && <span className="text-left font-light">{description}</span>}
    </div>
  );
}

export default Experience;
