function Statistic({ value, description }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-dark-60/70 border border-silk/10">
      <span className="text-2xl lg:text-3xl font-semibold text-oceanic">{value}</span>
      <span className="text-xs lg:text-sm font-light text-silk/80 mt-1 text-center leading-tight">
        {description}
      </span>
    </div>
  );
}

export default Statistic;
