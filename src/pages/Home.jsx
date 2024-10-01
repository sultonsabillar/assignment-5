import heroImage from "../assets/foto.jpg";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#F5EFFF] text-[#34105a]">
      <div className="container flex h-screen flex-col-reverse items-center justify-center text-center lg:flex-row mx-auto">
        <div className="flex w-1/2 items-center justify-center mt-8">
          <img src={heroImage} className="w-1/2 rounded-full" />
        </div>
        <div className="flex flex-col items-center lg:w-1/2">
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-mono mx-10">
              Hi, my name is
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                {" "}
                Sulton Sabilla Rosad{" "}
              </span>
            </h1>
          </div>
          <div className="mb-6 text-base lg:text-lg text-gray-700 mx-10">
            <p>
            React Native Developer adept at leading cross-functional teams to create impactful mobile apps and websites across diverse sectors, including banking, automotive, finance, edutech & transportation. Proficient in React Native, ReactJS, NextJS, TypeScript, and Redux Toolkit for Frontend stack and Nodejs, Sequelize, Expressjs, Nestjs, and Postgres for Backend stack.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/sultonsabillar">
              <FaGithubSquare className="h-10 w-10" alt="Github icon" />
            </a>
            <a href="https://www.facebook.com/login/">
              <FaFacebookSquare className="h-10 w-10" alt="Facebook icon" />
            </a>
            <a href="https://www.linkedin.com/in/sultonsabillar">
              <FaLinkedin className="h-10 w-10" alt="Linkedin icon" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="h-10 w-10" alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
