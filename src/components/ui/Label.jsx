function Label({ name, isSmall = false }) {
  const sizeClasses = isSmall ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1';

  return (
    <span
      className={`inline-flex items-center rounded-md border border-oceanic/70 bg-oceanic/5 font-normal text-oceanic hover:bg-oceanic hover:text-white transition-colors duration-200 select-none ${sizeClasses}`}
    >
      {name}
    </span>
  );
}

export default Label;
