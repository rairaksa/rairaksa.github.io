function Label(props) {
  const { name, isSmall } = props;

  if (isSmall) {
    return (
      <label className="px-2 py-1 rounded-lg border border-oceanic text-sm font-normal text-oceanic hover:bg-oceanic hover:text-silk">
        {name}
      </label>
    );
  }
  return (
    <label className="px-2 py-1 rounded-lg border border-oceanic text-base font-normal text-oceanic hover:bg-oceanic hover:text-silk">
      {name}
    </label>
  );
}

export default Label;
