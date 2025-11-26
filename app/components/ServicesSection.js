import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: "1",
    title: "Sports Physiotherapy",
    slug: "sports-physiotherapy",
  },
  {
    id: "2",
    title: "Orthopedic Physiotherapy",
    slug: "orthopedic-physiotherapy",
  },
  {
    id: "3",
    title: "Neurological Physiotherapy",
    slug: "neurological-physiotherapy",
  },
  {
    id: "4",
    title: "Pediatric Physiotherapy",
    slug: "pediatric-physiotherapy",
  },
  {
    id: "5",
    title: "Geriatric Physiotherapy",
    slug: "geriatric-physiotherapy",
  },
  {
    id: "6",
    title: "Manual Therapy",
    slug: "manual-therapy",
  },
];

export default function ServicesSection({ services = servicesData }) {
  return (
    <section 
      className="bg-[#FEFCFB] py-12 px-4 sm:px-6 lg:py-20 lg:px-8"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 
          id="services-heading"
          className="text-[#395756] text-3xl sm:text-4xl font-bold text-center mb-8 lg:mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          We Care For
        </h2>

        {/* Services List - Single Column */}
        <div 
          className="max-w-4xl mx-auto space-y-4"
          role="list"
        >
          {services.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceCard
                title={service.title}
                slug={service.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
