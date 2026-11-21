import Skill from './Skill';

function SkillSection() {
  const data = [
    {
      category: 'Languages & Frameworks',
      data: [
        { name: 'Golang' },
        { name: 'PHP / Laravel' },
        { name: 'CodeIgniter' },
        { name: 'ReactJS' },
        { name: 'TailwindCSS' },
      ],
    },
    {
      category: 'Databases & Messaging',
      data: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'Redis' },
        { name: 'AWS SNS' },
        { name: 'AWS SQS' },
      ],
    },
    {
      category: 'Cloud & Observability',
      data: [
        { name: 'AWS S3' },
        { name: 'Grafana' },
        { name: 'Git' },
        { name: 'Linux CLI' },
        { name: 'Networking' },
      ],
    },
    {
      category: 'AI & Automation',
      data: [
        { name: 'AI-Assisted Workflow' },
        { name: 'n8n' },
      ],
    },
  ];

  return data.map((value) => <Skill key={value.category} category={value.category} data={value.data} />);
}

export default SkillSection;
