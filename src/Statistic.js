function Statistic(props) {
    const value = props.value;
    const description = props.description;

    return (
        <div className="flex flex-col">
            <span className="text-3xl font-light">{ value }</span>
            <span className="font-light">{ description }</span>
        </div>
    )
}

export default Statistic;