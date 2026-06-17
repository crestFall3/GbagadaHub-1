import React from "react";
import { audience, homeSvg } from "../data/datas";
import { Section, SectionView } from "./animation";
import { useModal } from "../context/ModalContext";
import { RegForm } from "./form";
import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router";
import Testimonials from "./testimonials";

export const Home = () => {
  const { openModal } = useModal();

  return (
    <div className="mt-35 md:mt-45">
      {/* Hero Section */}
      <Section>
        <div className="max-w-177 mx-auto flex flex-col gap-4">
          <h1 className="font-display text-4xl sm:mx-5 lg:text-5xl/15 font-bold text-center mx-auto">
            {" "}
            <span className="hidden lg:inline-block">This Is</span> Where Your
            Best Work{" "}
            <TypeAnimation
              sequence={["Happens", 2000, "", 100]}
              wrapper="span"
              speed={300}
              cursor={false}
              repeat={Infinity}
              style={{ color: "#FF6B00" }}
            />
          </h1>
          <p className="text-center text-lg/7 mt-2">
            Join Gbagada’s premier workspace designed for freelancers,
            entrepreneurs, and growing teams. Trade the distractions for a
            community that fuels your focus.
          </p>

          <div className="flex gap-4 flex-col sm:flex-row justify-center mt-4 ">
            <button
              onClick={() => openModal(<RegForm />)}
              className="rounded py-3 px-10 text-xl bg-black text-white border-2 hover:bg-[#FF6B00] cursor-pointer"
            >
              Book a Tour
            </button>
            <button className="rounded py-3 px-10 text-xl  border-2 cursor-pointer">
              <NavLink to="/pricing">View pricing</NavLink>
            </button>
          </div>
        </div>
        <img
          src="/conference_table.png"
          alt="picture of a conference table"
          className="my-20 h-80 md:h-96 w-full object-cover"
        />
      </Section>

      {/* Audience section*/}

      <SectionView className="py-20">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold">Audience</h2>
          <p className="font-body my-1">
            Build for businesses of different sizes
          </p>
        </div>

        {/* Image section box */}
        <div className="md:flex w-full justify-between">
          {/* first audience image and text */}
          {audience.map((item) => (
            <div className="md:max-w-[334Px] mb-5 flex flex-col gap-3 text-center">
              <div className="relative group hover:mx-0.5 hover:my-0.5 ease-in-out">
                <img
                  src={item.image}
                  alt={item.description}
                  className="object-cover w-full transition-transform opacity-100 duration-300 group-hover:opacity-50"
                />
                {/* Image Overlay */}
                <div className="bg-black absolute inset-0 bg-opacity-0 transition-opacity opacity-0 duration-300 group-hover:opacity-60 flex items-end justify-center p-6 rounded">
                  <p className="text-white text-left">{item.text}</p>
                </div>
              </div>
              <h3 className="font-display font-3xl font-bold mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </SectionView>

      {/* Features Section */}

      <SectionView>
        <div className="py-20">
          <h2 className="text-4xl text-center font-bold mb-16 font-display">
            Features
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
            <img src="/assets/desk.png" alt="" className="md:max-w-131.5" />
            <div className="grid grid-cols-3 max-w-113.75 gap-3 text-center">
              {homeSvg.map((item) => (
                <div className="flex flex-col gap-3 justify-center items-center">
                  <img
                    src={item.svg}
                    alt={item.description}
                    className="w-20 object-cover"
                  />
                  <p className="font-normal font-body text-[18px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionView>

      <SectionView>
        <Testimonials />
      </SectionView>
    </div>
  );
};
