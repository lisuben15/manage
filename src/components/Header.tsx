import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative flex justify-between items-center font-[var(--font-family-custom)] !pt-12 px-2 lg:px-30 2xl:px-50">
        <div>
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <nav className="hidden lg:flex gap-2 md:gap-4 xl:gap-10 font-semibold text-[var(--DarkBlue)]">
          <a className=" cursor-pointer">Pricing</a>
          <a className="cursor-pointer">Product</a>
          <a className="cursor-pointer">About Us</a>
          <a className="cursor-pointer">Careers</a>
          <a className="cursor-pointer">Community</a>
        </nav>
        <button className="hidden lg:flex justify-center items-center font-bold bg-[var(--BrightRed)] w-[160px] h-[50px] rounded-full text-white cursor-pointer">
          Get Started
        </button>
        <button onClick={changeMenu} className="lg:hidden cursor-pointer">
          <img src="/assets/images/icon-hamburger.svg" alt="" />
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 "
            onClick={changeMenu} // Permite cerrar el menú si se hace clic fuera del menú
          ></div>
        )}
        <div
          className={`${
            isOpen ? "block absolute mt-70 items-center w-full" : "hidden"
          }`}
        >
          <nav className="flex flex-col gap-4 md:gap-6 xl:gap-10 font-semibold text-[var(--DarkBlue)] w-full py-8 bg-white z-60">
            <button className=" cursor-pointer">Pricing</button>
            <button className="cursor-pointer">Product</button>
            <button className="cursor-pointer">About Us</button>
            <button className="cursor-pointer">Careers</button>
            <button className="cursor-pointer">Community</button>
          </nav>
        </div>
      </div>
    </>
  );
};
