import Portfolio from './Portfolio';

function PortfolioSection() {
    const data = [
        {
            'name'          : 'Snapinn Property Agent',
            'year'          : '2021',
            'thumbnail'     : 'assets/portfolio/2021-snapinn.jpg',
            'description'   : 'A website for advertise a property.',
            'technologies'  : [
                'Laravel',
                'TailwindCSS',
                'MySQL'
            ]
        },
        {
            'name'          : 'Halo Retail',
            'year'          : '2021',
            'thumbnail'     : 'assets/portfolio/2021-retail.jpg',
            'description'   : 'A website for manage content of online shop.',
            'technologies'  : [
                'Yii',
                'TailwindCSS',
                'MySQL'
            ]
        },
        {
            'name'          : 'Halosis Central',
            'year'          : '2021',
            'thumbnail'     : 'assets/portfolio/2021-central.jpg',
            'description'   : 'Ecommerce with customizable template and domain.',
            'technologies'  : [
                'Laravel',
                'TailwindCSS',
                'Bootstrap',
                'MySQL'
            ]
        },
        {
            'name'          : 'Akansah Wedding Invitation',
            'year'          : '2020',
            'thumbnail'     : 'assets/portfolio/2020-akansah.jpg',
            'description'   : 'Website which provide digital wedding invitation solution.',
            'technologies'  : [
                'Laravel',
                'TailwindCSS',
                'Bootstrap',
                'MySQL'
            ]
        },
        {
            'name'          : 'Airport Operational Dashboard',
            'year'          : '2020',
            'thumbnail'     : 'assets/portfolio/2020-aod.jpg',
            'description'   : 'Dashboard for monitor activity and data in Kertajati Airport.',
            'technologies'  : [
                'CodeIgniter',
                'Bootstrap',
                'MySQL'
            ]
        },
        {
            'name'          : 'BIJB E-Procurement',
            'year'          : '2019',
            'thumbnail'     : 'assets/portfolio/2019-eproc.jpg',
            'description'   : 'Online procurement for managing vendor and procurement process.',
            'technologies'  : [
                'CodeIgniter',
                'Bootstrap',
                'MySQL'
            ]
        },
        {
            'name'          : 'Access Control System',
            'year'          : '2018',
            'thumbnail'     : 'assets/portfolio/2018-acs.jpg',
            'description'   : 'An apps for publish and process airport security card.',
            'technologies'  : [
                'CodeIgniter',
                'Bootstrap',
                'MySQL'
            ]
        },
        {
            'name'          : 'BIJB Information System',
            'year'          : '2017',
            'thumbnail'     : 'assets/portfolio/2017-bis.jpg',
            'description'   : 'An enterprise apps that give a solution for some business process in office.',
            'technologies'  : [
                'CodeIgniter',
                'Bootstrap',
                'MySQL'
            ]
        },
        {
            'name'          : 'Educational Quality Assurance',
            'year'          : '2016',
            'thumbnail'     : 'assets/portfolio/2016-eqa.jpg',
            'description'   : 'Institutional accreditation process and monitoring.',
            'technologies'  : [
                'CodeIgniter',
                'Bootstrap',
                'MySQL'
            ]
        },
    ]

    return (
        data.map((value) => (
            <Portfolio name={ value.name } year={ value.year } thumbnail={ value.thumbnail } description={ value.description } technologies={ value.technologies }/>
        ))
    )
}

export default PortfolioSection;