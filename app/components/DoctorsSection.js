import DoctorCard from "./DoctorCard";

const doctorsData = [
  {
    id: "1",
    name: "Dr. Rahul",
    designation: "Senior Physiotherapist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy7a9AAqrB22n39dPO3US2pDNvck_p0iuOWBpK1zPIRD7xh7SqmxsbvJrX3IWLzxxLVg&usqp=CAU",
    bio: "Dr. Rahul has over 15 years of experience in sports physiotherapy and orthopedic rehabilitation. He specializes in treating complex musculoskeletal conditions and has worked with professional athletes.",
  },
  {
    id: "3",
    name: "Dr. Arbaz",
    designation: "Manual Therapy Expert",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy7a9AAqrB22n39dPO3US2pDNvck_p0iuOWBpK1zPIRD7xh7SqmxsbvJrX3IWLzxxLVg&usqp=CAU",
    bio: "Dr. Arbaz specializes in manual therapy techniques and chronic pain management. His holistic approach combines traditional physiotherapy with modern evidence-based practices.",
  },
  {
    id: "4",
    name: "Dr. Shafi",
    designation: "Pediatric Physiotherapist",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy7a9AAqrB22n39dPO3US2pDNvck_p0iuOWBpK1zPIRD7xh7SqmxsbvJrX3IWLzxxLVg&usqp=CAU",
    bio: "Dr. Shafi has dedicated his career to helping children with developmental challenges. His gentle approach and expertise in pediatric care have made him a trusted specialist for families.",
  },
];

export default function DoctorsSection({ doctors = doctorsData }) {
  return (
    <section 
      className="bg-white py-12 px-4 sm:px-6 lg:py-20 lg:px-8"
      aria-labelledby="doctors-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 
          id="doctors-heading"
          className="text-[#395756] text-3xl sm:text-4xl font-bold text-center mb-8 lg:mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Meet Our Doctors
        </h2>

        {/* Doctors Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {doctors.map((doctor) => (
            <div key={doctor.id} role="listitem">
              <DoctorCard
                name={doctor.name}
                designation={doctor.designation}
                image={doctor.image}
                bio={doctor.bio}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
