import Experience from './Experience';

function ExperienceSection() {
  const data = [
    {
      name: 'PT Setiap Hari Dipakai (Evermos)',
      data: [
        {
          year: '2022 - Present',
          position: 'Backend Engineer',
          description:
            'Design and scale high-throughput Go microservices and event-driven architectures using AWS SNS/SQS, PostgreSQL, MySQL, Redis, and S3—backed by Grafana observability, n8n workflow automation, and AI-assisted engineering.',
        },
      ],
    },
    {
      name: 'PT Hasil Sukses Indonesia (Halosis)',
      data: [
        {
          year: '2020 - 2022',
          position: 'Fullstack PHP Developer',
          description:
            'Engineered multi-tenant social commerce platforms and retail management web applications using Laravel, Yii, TailwindCSS, and MySQL.',
        },
      ],
    },
    {
      name: 'PT Bandarudara Internasional Jawa Barat',
      data: [
        {
          year: '2020',
          position: 'Manager of ICT Area Management',
          description:
            'Spearheaded airport ICT operations, mission-critical system reliability, and cross-functional infrastructure governance at Kertajati International Airport.',
        },
        {
          year: '2017 - 2020',
          position: 'System Development',
          description:
            'Architected and delivered core airport enterprise platforms—including the Operational Dashboard, E-Procurement, and Security Access Control systems.',
        },
      ],
    },
    {
      name: 'Pusat Teknologi Instrumentasi dan Otomasi ITB',
      data: [
        {
          year: '2014 - 2016',
          position: 'IT Staff',
          description:
            'Administered research center IT infrastructure and developed web platforms for academic quality assurance and institutional accreditation.',
        },
      ],
    },
    {
      name: 'PT Jalawave Cakrawala',
      data: [
        {
          year: '2012 - 2013',
          position: 'Wireless Engineer',
          description:
            'Deployed, optimized, and maintained enterprise wireless networks and high-availability connectivity infrastructure.',
        },
      ],
    },
  ];

  return data.map((value) => <Experience key={value.name} name={value.name} data={value.data} />);
}

export default ExperienceSection;
