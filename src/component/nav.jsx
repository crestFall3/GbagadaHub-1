import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { RegForm } from "./form";
import { useModal } from "../context/ModalContext";

export const Nav = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const { openModal } = useModal();

  const handleClick = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-screen relative left-1/2 right-1/2 -mx-[50vw] flex justify-between bg-bg px-4 lg:px-0 items-center py-4 md:py-10 z-50 ${isOpen ? "bg-[#969494] shadow-lg" : ""}`}
    >
      {/* Logo */}

      <div className="flex gap-2 items-center ml-23">
        <img style={{ backgroundColor: "#FF6A00" }} className="w-12 h-12" src="/logo.svg" alt="Brand Logo" />
      </div>

      <nav className="hidden md:flex gap-4 font-display">
        <NavLink
          to="/"
          className="py-0.5 px-1 [&.active]:border-b-2 border-[#FF6B00]"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="py-0.5 px-1 [&.active]:border-b-2 border-[#FF6B00]"
        >
          About
        </NavLink>
        <NavLink
          to="/pricing"
          className="py-0.5 px-1 [&.active]:border-b-2 border-[#FF6B00]"
        >
          Pricing
        </NavLink>
        <NavLink
          to="/contact"
          className="py-0.5 px-1 [&.active]:border-b-2 border-[#FF6B00]"
        >
          Contact
        </NavLink>
      </nav>
      <button
        onClick={() => openModal(<RegForm />)}
        className="hidden md:block rounded border px-4 py-2 hover:bg-[#FF6B00] hover:border-white hover:text-white cursor-pointer mr-23"
      >
        Book a Tour
      </button>

      {/* Small Screen navigation */}

      {/* menu toggle button for mobile view */}

      <button onClick={() => SetIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`md:hidden absolute top-full left-0 h-screen w-full flex flex-col items-center justify-center gap-8 px-4 bg-[#FF6B00] transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none overflow:hidden"}`}
      >
        <nav className="flex items-center justify-center flex-col gap-10 text-3xl text-white font-display">
          <Link to="/" className="py-0.5 px-1" onClick={handleClick}>
            Home
          </Link>
          <Link to="/about" className="py-0.5 px-1" onClick={handleClick}>
            About
          </Link>
          <Link to="/contact" className="py-0.5 px-1" onClick={handleClick}>
            Contact
          </Link>
          <Link to="/pricing" className="py-0.5 px-1" onClick={handleClick}>
            Pricing
          </Link>
        </nav>
        <button
          className="rounded border border-white text-white px-4 py-2  hover:bg-[#FF6B00] cursor-pointer w-fit mt-4"
          onClick={() => openModal(<RegForm />)}
        >
          Book a Tour
        </button>
      </div>
    </div>
  );
};
