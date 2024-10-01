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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
}
