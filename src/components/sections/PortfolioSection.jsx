import { useState } from 'react';
import PortfolioCard from '../ui/PortfolioCard';
import Label from '../ui/Label';
import {
  portfolioCategories,
  portfolioHighlightsData,
  portfolioProjectsData,
} from '../../data/profileData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredHighlights = portfolioHighlightsData.filter(
    (item) => activeCategory === 'all' || item.type === activeCategory
  );

  const filteredProjects = portfolioProjectsData.filter(
    (project) => activeCategory === 'all' || project.type === activeCategory
  );

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') {
      return portfolioHighlightsData.length + portfolioProjectsData.length;
    }
    return (
      portfolioHighlightsData.filter((i) => i.type === categoryId).length +
      portfolioProjectsData.filter((p) => p.type === categoryId).length
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter portfolio by category"
      >
        {portfolioCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = getCategoryCount(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-normal border transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-oceanic text-white border-oceanic shadow-sm'
                  : 'bg-dark-60/70 text-silk/80 border-silk/15 hover:border-oceanic/60 hover:text-oceanic'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-dark-80 text-silk/70'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filteredHighlights.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-xs uppercase tracking-wider text-oceanic text-left font-medium">
            Featured Backend Architecture (2022 - Present)
          </h3>
          {filteredHighlights.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-2.5 p-4 rounded-xl bg-dark-60/90 border border-oceanic/40 text-left shadow-sm"
            >
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline gap-2">
                  <h4 className="text-base lg:text-lg font-medium text-silk">{item.name}</h4>
                  <span className="text-xs lg:text-sm text-oceanic shrink-0">{item.year}</span>
                </div>
                {item.context && (
                  <div className="flex items-center">
                    <span className="text-[11px] font-normal px-2 py-0.5 rounded-full border border-oceanic/40 bg-oceanic/10 text-oceanic">
                      {item.context}
                    </span>
                  </div>
                )}
              </div>
              <p className="font-light text-sm text-silk/85 leading-relaxed text-justify">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.technologies.map((tech) => (
                  <Label key={tech} name={tech} isSmall />
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      {filteredProjects.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <h3 className="text-xs uppercase tracking-wider text-oceanic text-left font-medium">
              {activeCategory === 'independent'
                ? 'Freelance & Independent Projects (2020 - 2026)'
                : activeCategory === 'company'
                  ? 'Company & Enterprise Web Applications (2016 - 2021)'
                  : 'Web Applications Portfolio (2016 - 2026)'}
            </h3>
            <span className="text-xs font-light text-silk/60">Swipe ↔</span>
          </div>
          <Swiper
            key={activeCategory}
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="w-full pb-9"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.name}>
                <PortfolioCard
                  name={project.name}
                  year={project.year}
                  context={project.context}
                  type={project.type}
                  thumbnail={project.thumbnail}
                  description={project.description}
                  technologies={project.technologies}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default PortfolioSection;
