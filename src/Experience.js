function Experience(props) {
    const name = props.name;
    const data = props.data;
    const position = props.position;
    const year = props.year;
    const description = props.description;

    return (
        <div className='flex flex-col mb-4'>
            <div className='flex justify-between'>
                <span className='text-left'>{ name }</span>
                <span className='text-right'>{ year }</span>
            </div>
            {
                data.map((value) => (
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <span className='text-left font-light'>
                                { value.position }
                            </span>
                            <span className='font-light'>
                                { value.year }
                            </span>
                        </div>
                        <div className='font-light text-left'>
                            { value.description }
                        </div>
                    </div>
                ))
            }
            <span className='text-left font-light'>{ position }</span>
            <span className='text-left font-light'>{ description }</span>
        </div>
    )
}
export default Experience;