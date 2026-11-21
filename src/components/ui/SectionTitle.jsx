function SectionTitle({ title }) {
  return (
    <div className="flex flex-col items-center mb-5">
      <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight relative inline-block pb-1.5">
        <span className="relative z-10">{title}</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-oceanic rounded-full z-0" />
      </h2>
    </div>
  );
}

export default SectionTitle;
