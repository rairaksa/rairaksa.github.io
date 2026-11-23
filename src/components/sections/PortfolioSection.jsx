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
  const [viewMode, setViewMode] = useState('carousel');

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
            Featured Backend Projects at Evermos (2022 - Present)
          </h3>
          {filteredHighlights.map((item) => (
            <article
              key={item.name}
              className="flex flex-col gap-2.5 p-4 rounded-xl bg-dark-60/90 border border-oceanic/40 text-left shadow-sm"
            >
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline gap-2">
                  <h4 className="text-base lg:text-lg font-medium text-silk">{item.name}</h4>
                  {item.year && (
                    <span className="text-xs lg:text-sm text-oceanic shrink-0">{item.year}</span>
                  )}
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
              {item.points && (
                <ul className="list-disc pl-4 flex flex-col gap-1.5 font-light text-sm text-silk/85 leading-relaxed">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
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
          <div className="flex flex-wrap justify-between items-center gap-2">
            <h3 className="text-xs uppercase tracking-wider text-oceanic text-left font-medium">
              {activeCategory === 'independent'
                ? 'Freelance & Independent Projects (2020 - 2026)'
                : activeCategory === 'company'
                  ? 'Company & Enterprise Web Applications (2016 - 2021)'
                  : 'Web Applications Portfolio (2016 - 2026)'}
            </h3>
            <div className="flex items-center gap-1.5">
              {viewMode === 'carousel' && (
                <span className="text-xs font-light text-silk/60 mr-1">Swipe ↔</span>
              )}
              <div
                className="inline-flex rounded-lg bg-dark-60/70 p-0.5 border border-silk/15"
                role="group"
                aria-label="Portfolio view mode"
              >
                <button
                  type="button"
                  onClick={() => setViewMode('carousel')}
                  aria-label="Slide view"
                  aria-pressed={viewMode === 'carousel'}
                  className={`px-2 py-0.5 rounded-md text-[11px] transition-colors ${
                    viewMode === 'carousel'
                      ? 'bg-oceanic text-white'
                      : 'text-silk/70 hover:text-oceanic'
                  }`}
                >
                  Slide
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                  aria-pressed={viewMode === 'list'}
                  className={`px-2 py-0.5 rounded-md text-[11px] transition-colors ${
                    viewMode === 'list'
                      ? 'bg-oceanic text-white'
                      : 'text-silk/70 hover:text-oceanic'
                  }`}
                >
                  List All
                </button>
              </div>
            </div>
          </div>

          {viewMode === 'carousel' ? (
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
          ) : (
            <div className="flex flex-col gap-3">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.name}
                  name={project.name}
                  year={project.year}
                  context={project.context}
                  type={project.type}
                  thumbnail={project.thumbnail}
                  description={project.description}
                  technologies={project.technologies}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PortfolioSection;
