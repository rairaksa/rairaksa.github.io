import Portfolio from './Portfolio';
import Label from './Label';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PortfolioSection() {
  const highlights = [
    {
      name: 'Evermos Backend & Event-Driven Services',
      year: '2022 - Present',
      description:
        'High-concurrency Go microservices powering social commerce transactions, asynchronous pub/sub workflows via AWS SNS & SQS, low-latency Redis caching, S3 media pipelines, and real-time Grafana observability.',
      technologies: ['Golang', 'PostgreSQL', 'MySQL', 'Redis', 'AWS SNS', 'AWS SQS', 'AWS S3', 'Grafana', 'n8n'],
    },
  ];

  const data = [
    {
      name: 'Snapinn Property Agent',
      year: '2021',
      thumbnail: 'assets/portfolio/2021-snapinn.jpg',
      description: 'A modern property listing platform connecting real estate agents with prospective buyers.',
      technologies: ['Laravel', 'TailwindCSS', 'MySQL'],
    },
    {
      name: 'Halo Retail',
      year: '2021',
      thumbnail: 'assets/portfolio/2021-retail.jpg',
      description: 'Back-office content and inventory management platform for online retail storefronts.',
      technologies: ['Yii', 'TailwindCSS', 'MySQL'],
    },
    {
      name: 'Halosis Central',
      year: '2021',
      thumbnail: 'assets/portfolio/2021-central.jpg',
      description: 'Multi-tenant e-commerce builder featuring customizable storefront templates and custom domains.',
      technologies: ['Laravel', 'TailwindCSS', 'Bootstrap', 'MySQL'],
    },
    {
      name: 'Akansah Wedding Invitation',
      year: '2020',
      thumbnail: 'assets/portfolio/2020-akansah.jpg',
      description: 'Interactive digital wedding invitation and RSVP management platform.',
      technologies: ['Laravel', 'TailwindCSS', 'Bootstrap', 'MySQL'],
    },
    {
      name: 'Airport Operational Dashboard',
      year: '2020',
      thumbnail: 'assets/portfolio/2020-aod.jpg',
      description: 'Executive real-time dashboard monitoring flight operations and daily metrics at Kertajati International Airport.',
      technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    },
    {
      name: 'BIJB E-Procurement',
      year: '2019',
      thumbnail: 'assets/portfolio/2019-eproc.jpg',
      description: 'End-to-end digital procurement portal for vendor registration, tendering, and contract workflows.',
      technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    },
    {
      name: 'Access Control System',
      year: '2018',
      thumbnail: 'assets/portfolio/2018-acs.jpg',
      description: 'Security clearance and airport pass issuance platform for restricted operational zones.',
      technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    },
    {
      name: 'BIJB Information System',
      year: '2017',
      thumbnail: 'assets/portfolio/2017-bis.jpg',
      description: 'Integrated enterprise resource system streamlining internal corporate workflows and approvals.',
      technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    },
    {
      name: 'Educational Quality Assurance',
      year: '2016',
      thumbnail: 'assets/portfolio/2016-eqa.jpg',
      description: 'Academic accreditation tracking and continuous quality assurance monitoring platform.',
      technologies: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-sm uppercase tracking-wider text-oceanic text-left font-medium">
          Featured Backend Architecture (2022 - Present)
        </span>
        {highlights.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-2 p-4 rounded-lg bg-dark-60 border border-oceanic/40 text-left"
          >
            <div className="flex justify-between items-baseline gap-2">
              <span className="text-lg font-medium text-silk">{item.name}</span>
              <span className="text-sm text-oceanic shrink-0">{item.year}</span>
            </div>
            <p className="font-light text-sm opacity-90 leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {item.technologies.map((tech) => (
                <Label key={tech} name={tech} isSmall={true} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-sm uppercase tracking-wider text-oceanic text-left font-medium">
            Previous Web Applications (2016 - 2021)
          </span>
          <span className="text-xs font-light opacity-70">Swipe ↔</span>
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full pb-8"
        >
          {data.map((value) => (
            <SwiperSlide key={value.name}>
              <Portfolio
                name={value.name}
                year={value.year}
                thumbnail={value.thumbnail}
                description={value.description}
                technologies={value.technologies}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PortfolioSection;
