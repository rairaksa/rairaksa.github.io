import Label from './Label';

function Portfolio(props) {
    const name = props.name;
    const year = props.year;
    const thumbnail = props.thumbnail;
    const description = props.description;
    const technologies = props.technologies;
    const isSmallLabel = true;

    return (
        <div className="flex flex-col gap-2 mb-6">
            <div className="flex justify-between">
            <span className="text-xl text-left">{ name }</span>
            <span className="text-xl text-right">{ year }</span>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-oceanic rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={ thumbnail }/>
            </div>
            <p className="text-left font-light">
            { description }
            </p>
            <div className="flex flex-start flex-wrap gap-2">
                {        
                    technologies.map((value) => (
                        <Label name={ value } isSmall={ isSmallLabel }/>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;