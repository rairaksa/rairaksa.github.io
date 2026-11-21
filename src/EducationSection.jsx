import Experience from './Experience';

function EducationSection() {
  const data = [
    {
      name: 'Widyatama University — Bandung',
      data: [
        {
          year: 'Bachelor of Informatics Engineering (S.Kom.)',
          position: 'Informatics Engineering',
          description:
            'Built a strong academic foundation in software engineering, algorithms, relational databases, and computer networks while actively working in campus IT and systems development.',
        },
      ],
    },
  ];

  return data.map((value) => <Experience key={value.name} name={value.name} data={value.data} />);
}

export default EducationSection;
