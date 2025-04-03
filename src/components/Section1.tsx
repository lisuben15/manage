export const Section1 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between pt-32 bg-[url('/assets/images/bg-simplify-section-desktop.svg')] px-2 md:px-10 2xl:px-30">
      <div className=" flex flex-col items-center lg:items-start justify-center  gap-8 px-20 order-last  lg:order-first">
        <h2 className=" text-center lg:text-left text-[32px] lg:text-[48px] w-[350px] lg:w-[450px] font-bold text-[var(--VeryDarkBlue)] leading-tight">
          Bring everyone together to build better products.
        </h2>
        <p className=" text-center lg:text-left text-[14px] lg:text-base w-[300px]  lg:w-[350px] text-[var(--DarkGrayishBlue)]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="font-bold bg-[var(--BrightRed)] w-[160px] h-[50px] rounded-full text-white cursor-pointer">
          Get Started
        </button>
      </div>

      <div className="flex justify-center w-full px-16 lg:px-0 lg:min-w-[400px] order-first lg:order-last">
        <img src="/assets/images/illustration-intro.svg" alt="sin imagen" />
      </div>
    </div>
  );
};
