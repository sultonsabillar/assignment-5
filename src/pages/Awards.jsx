const awards = [
  {
    title: "Best Web Developer",
    year: "2023",
    description:
      "Awarded for outstanding web development projects and contributions.",
  },
  {
    title: "Mobile App Innovator",
    year: "2022",
    description: "Recognized for innovative mobile app solutions and designs.",
  },
  {
    title: "Cloud Solutions Expert",
    year: "2021",
    description: "Award for excellence in cloud computing and infrastructure.",
  },
  {
    title: "UI/UX Design Master",
    year: "2023",
    description:
      "Recognized for exceptional design in user interfaces and user experiences.",
  },
  {
    title: "Data Science Champion",
    year: "2020",
    description:
      "Award for achievements in data analysis and machine learning projects.",
  },
];

export default function Award() {
  return (
    <div className="bg-[#F5EFFF] text-[#34105a]">
      <div className="container content-center justify-center lg:mb-0 lg:h-screen lg:flex-row mx-auto pb-24">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-10 mt-24">
          <h2 className="font-mono text-2xl lg:text-4xl mb-4">Awards</h2>
          <span className="h-1 w-20 bg-[#123456]"></span>
        </div>

        {/* Awards Grid */}
        <div className="mx-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
            >
              {/* Award Title */}
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>

              {/* Award Year */}
              <span className="text-sm text-gray-500 mb-2">{award.year}</span>

              {/* Award Description */}
              <p className="text-justify text-gray-700">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
