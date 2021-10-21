import Experience from './Experience';

function ExperienceSection() {
    const data = [
        {
            name:'PT Hasil Sukses Indonesia',
            data: [
                {
                    year: '2020 - now',
                    position: 'Fullstack PHP Developer',
                    description: ''
                }
            ]
        },
        {
            name:'PT Bandarudara Internasional Jawa Barat',
            data: [
                {
                    year: '2020',
                    position: 'Manager of ICT Area Management',
                    description: ''
                },
                {
                    year: '2017 - 2020',
                    position: 'System Development',
                    description: ''
                }
            ]
        },
        {
            name:'Pusat Teknologi Instrumentasi dan Otomasi ITB',
            data: [
                {
                    year: '2014 - 2016',
                    position: 'IT Staff',
                    description: ''
                }
            ]
        },
        {
            name:'PT Jalawave Cakrawala',
            data: [
                {
                    year: '2012 - 2013',
                    position: 'Wireless Engineer',
                    description: ''
                }
            ]
        }
    ];

    return (
        data.map((value) => (
            <Experience name={value.name} data={value.data} />
        ))
    )
}

export default ExperienceSection;