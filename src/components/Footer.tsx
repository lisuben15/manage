export const Footer = () => {
  return (
    <div className="flex relative flex-col lg:flex-row justify-between text-white bg-[var(--DarkBlue)] px-2 md:px-30 2xl:px-50">
      <div className="flex flex-col justify-between py-12 mb-10 lg:mb-0 order-last  lg:order-first items-center gap-12">
        <div className="bg-white flex items-center justify-center w-[180px] h-[40px] rounded-sm order-last  lg:order-first">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div className="flex gap-8 lg:gap-4 order-first lg:order-last">
          <img src="/assets/images/icon-facebook.svg" alt="" />
          <img src="/assets/images/icon-youtube.svg" alt="" />
          <img src="/assets/images/icon-twitter.svg" alt="" />
          <img src="/assets/images/icon-pinterest.svg" alt="" />
          <img src="/assets/images/icon-instagram.svg" alt="" />
        </div>
      </div>
      <div className="flex justify-between gap-4 py-12 w-full px-0 sm:px-20 lg:px-0">
        <div className="flex flex-col gap-4 w-full items-center">
          <a className="cursor-pointer text-[14px] lg:text-base" href="#">
            Home
          </a>
          <a className="cursor-pointer text-[14px] lg:text-base" href="#">
            Pricing
          </a>
          <a className="cursor-pointer text-[14px] lg:text-base" href="#">
            Products
          </a>
          <a className="cursor-pointer text-[14px] lg:text-base" href="#">
            About Us
          </a>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <a className="cursor-pointer text-[14px] lg:text-base" href="#">
            Careers
          </a>
          <a className="cursor-pointer text-[14px] lg:text-base" href="#">
            Community
          </a>
          <a className="cursor-pointer text-[14px] lg:text-base" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center py-12 order-first lg:order-last">
        <div className="flex gap-2 md:gap-4">
          <input
            type="text"
            className="bg-white w-[220px] md:w-[250px]  rounded-full pl-5 text-[var(--DarkGrayishBlue)]"
            placeholder="Updates in your inbox..."
          />
          <button className="font-bold bg-[var(--BrightRed)] w-[75px] h-[50px] rounded-full">
            Go
          </button>
        </div>
        <label className="text-end text-[var(--DarkGrayishBlue)] text-[9px] lg:text-base absolute bottom-4 left-1/2  -translate-x-1/2 lg:relative ">
          Copyright 2020. All Rights Reserved
        </label>
      </div>
    </div>
  );
};
