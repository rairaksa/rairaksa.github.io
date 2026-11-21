function TimelineItem({ name, data }) {
  return (
    <div className="relative pl-5 pb-6 last:pb-0 border-l-2 border-oceanic/40 text-left">
      <span
        className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-dark-80 border-2 border-oceanic"
        aria-hidden="true"
      />
      <h3 className="font-medium text-base lg:text-lg text-silk leading-snug">{name}</h3>
      <div className="flex flex-col gap-3 mt-1.5">
        {data.map((item) => (
          <div key={`${item.position}-${item.year}`} className="flex flex-col">
            <div className="flex flex-wrap justify-between items-baseline gap-x-2 gap-y-0.5">
              <span className="text-oceanic font-normal text-sm lg:text-base">{item.position}</span>
              <span className="font-light text-xs lg:text-sm text-silk/70 shrink-0">{item.year}</span>
            </div>
            {item.description && (
              <p className="font-light text-sm text-silk/85 mt-1.5 leading-relaxed text-justify">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimelineItem;
