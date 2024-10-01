export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer Intern at Binar Labs",
      date: "June 2023 - August 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      title: "Full-stack Developer Project",
      date: "March 2024 - May 2024",
      description:
        "Cras luctus, urna sit amet tempor ultricies, felis mauris aliquam turpis, eget suscipit metus turpis ut justo.",
    },
    {
      title: "Mobile Developer with React Native",
      date: "May 2024 - July 2024",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];
  return (
    <div className="bg-[#F5EFFF] text-[#34105a]">
      <div className="container content-center justify-center lg:mb-0 lg:h-screen lg:flex-row mx-auto pb-24">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-10 pt-24">
          <h2 className="font-mono text-2xl lg:text-4xl mb-4">Experience</h2>
          <span className="h-1 w-20 bg-[#34105a]"></span>
        </div>

        {/* Cards Section */}
        <div className="mx-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg rounded-lg p-6"
            >
              <h3
                className={`text-xl font-semibold ${
                  experience.title.length < 30 ? "lg:mb-7" : ""
                }`}
              >
                {experience.title}
              </h3>
              <span className="text-sm text-gray-500">{experience.date}</span>
              <p className="mt-2 text-justify">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
