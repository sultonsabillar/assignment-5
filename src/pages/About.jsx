export default function About() {
  return (
    <div className="bg-[#F5EFFF] text-[#34105a]">
      <div className="container flex h-screen flex-col items-center justify-center lg:mb-0 lg:h-screen lg:flex-row mx-auto">
        <div className=" flex w-full flex-col items-center justify-center mb-10 lg:mb-0 lg:w-1/2">
          <h2 className="font-mono text-2xl lg:text-4xl">About me</h2>
          <span className="mt-2 h-1 w-20 bg-[#34105a]"></span>
        </div>
        <div className="lg:w-1/2 mx-10 text-justify lg:text-left">
          <p>
          React Native Developer adept at leading cross-functional teams to create impactful mobile apps and websites across diverse sectors, including banking, automotive, finance, edutech & transportation. Proficient in React Native, ReactJS, NextJS, TypeScript, and Redux Toolkit for Frontend stack and Nodejs, Sequelize, Expressjs, Nestjs, and Postgres for Backend stack. Proven history of successful project delivery, code review, and deployment. Instructional background as a Fullstack JavaScript Instructor. Freelance work with prestigious companies showcases adaptability and commitment to quality.
          </p>
        </div>
      </div>
    </div>
  );
}
