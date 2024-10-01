import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaPalette,
  FaRobot,
  FaChartLine,
  FaGamepad,
  FaCamera,
} from "react-icons/fa"; // Import react-icons

const interests = [
  { name: "Web Development", icon: <FaLaptopCode /> },
  { name: "Mobile Development", icon: <FaMobileAlt /> },
  { name: "Cloud Computing", icon: <FaCloud /> },
  { name: "UI/UX Design", icon: <FaPalette /> },
  { name: "Artificial Intelligence", icon: <FaRobot /> },
  { name: "Data Science", icon: <FaChartLine /> },
  { name: "Gaming", icon: <FaGamepad /> },
  { name: "Photography", icon: <FaCamera /> },
];

export default function Interest() {
  return (
    <div className="bg-[#F5EFFF] text-[#34105a]">
      <div className="container content-center justify-center lg:mb-0 lg:h-screen lg:flex-row mx-auto pb-24">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-10 mt-24">
          <h2 className="font-mono text-2xl lg:text-4xl mb-4">Interests</h2>
          <span className="h-1 w-20 bg-[#123456]"></span>
        </div>

        {/* Interests Grid */}
        <div className="mx-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
            >
              {/* Interest Icon */}
              <div className="text-4xl mb-4">{interest.icon}</div>

              {/* Interest Name */}
              <h3 className="text-xl font-semibold mb-4">{interest.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
