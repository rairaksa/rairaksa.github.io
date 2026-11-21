import PortfolioCard from '../ui/PortfolioCard';
import Label from '../ui/Label';
import { portfolioHighlightsData, portfolioProjectsData } from '../../data/profileData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PortfolioSection() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h3 className="text-xs uppercase tracking-wider text-oceanic text-left font-medium">
          Featured Backend Architecture (2022 - Present)
        </h3>
        {portfolioHighlightsData.map((item) => (
          <article
            key={item.name}
            className="flex flex-col gap-2.5 p-4 rounded-xl bg-dark-60/90 border border-oceanic/40 text-left shadow-sm"
          >
            <div className="flex justify-between items-baseline gap-2">
              <h4 className="text-base lg:text-lg font-medium text-silk">{item.name}</h4>
              <span className="text-xs lg:text-sm text-oceanic shrink-0">{item.year}</span>
            </div>
            <p className="font-light text-sm text-silk/85 leading-relaxed">{item.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.technologies.map((tech) => (
                <Label key={tech} name={tech} isSmall />
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <h3 className="text-xs uppercase tracking-wider text-oceanic text-left font-medium">
            Previous Web Applications (2016 - 2021)
          </h3>
          <span className="text-xs font-light text-silk/60">Swipe ↔</span>
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full pb-9"
        >
          {portfolioProjectsData.map((project) => (
            <SwiperSlide key={project.name}>
              <PortfolioCard
                name={project.name}
                year={project.year}
                thumbnail={project.thumbnail}
                description={project.description}
                technologies={project.technologies}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PortfolioSection;
