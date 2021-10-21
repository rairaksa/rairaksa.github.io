function SectionTitle(props) {
    const title = props.title;
    
    return (
        <h1 className="text-2xl lg:text-3xl relative inline-block my-4"><span className="absolute -bottom-1 w-full h-1 bg-oceanic z-0"></span>{ title }</h1>
    )
}

export default SectionTitle;