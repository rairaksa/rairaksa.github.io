import Label from './Label';
import Skill from './Skill';

function SkillSection() {
    const data = [
        {
            category:'Backend Development',
            data: [
                {
                    name: 'Laravel'
                },
                {
                    name: 'CodeIgniter'
                },
                {
                    name: 'MySQL'
                }
            ]
        },
        {
            category:'Frontend Development',
            data: [
                {
                    name: 'HTML'
                },
                {
                    name: 'CSS'
                },
                {
                    name: 'TailwindCSS'
                },
                {
                    name: 'ReactJS'
                }
            ]
        },
        {
            category:'Others',
            data: [
                {
                    name: 'Git'
                },
                {
                    name: 'AWS'
                },
                {
                    name: 'Linux CLI'
                },
                {
                    name: 'Networking'
                }
            ]
        },
    ];

    return (
        data.map(value => (
            <Skill category={ value.category } data={ value.data } />
        ))
    )
}

export default SkillSection;