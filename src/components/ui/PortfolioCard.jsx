import Label from './Label';

function PortfolioCard({ name, year, context, type, thumbnail, description, technologies }) {
  const isIndependent = type === 'independent';

  return (
    <article className="flex flex-col gap-3 p-4 rounded-xl bg-dark-60/60 border border-silk/10 text-left">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-baseline gap-2">
          <h4 className="text-base lg:text-lg font-medium text-silk truncate">{name}</h4>
          <span className="text-xs lg:text-sm text-oceanic font-normal shrink-0">{year}</span>
        </div>
        {context && (
          <div className="flex items-center">
            <span
              className={`text-[11px] font-normal px-2 py-0.5 rounded-full border ${
                isIndependent
                  ? 'border-flare/50 bg-flare/10 text-flare'
                  : 'border-oceanic/40 bg-oceanic/10 text-oceanic'
              }`}
            >
              {context}
            </span>
          </div>
        )}
      </div>

      {thumbnail && (
        <div className="aspect-w-16 aspect-h-9 bg-dark-60 rounded-lg overflow-hidden border border-silk/10">
          <img
            className="w-full h-full object-cover"
            src={thumbnail}
            alt={name}
            loading="lazy"
          />
        </div>
      )}

      <p className="text-sm font-light text-silk/85 leading-relaxed text-justify">{description}</p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {technologies.map((tech) => (
          <Label key={tech} name={tech} isSmall />
        ))}
      </div>
    </article>
  );
}

export default PortfolioCard;
