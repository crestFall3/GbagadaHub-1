import React from "react";
import { Section, SectionView } from "./animation";
import { TypeAnimation } from "react-type-animation";
import Image1 from "/assets/Image1.jpg";
import Image2 from "/assets/Image2.jpg";
import Image3 from "/assets/image3.jpg";

export const About = () => {
  return (
    <div>
      <Section>
        <div className="mt-34.5 md:mt-50.5">
          {/* About hero */}
          <div className="max-w-141.5 mx-auto flex flex-col gap-4">
            <h1 className="font-display text-4xl/15 md:text-5xl/15 font-bold text-center mx-auto">
              {" "}
              Building The Future of{" "}
              <TypeAnimation
                sequence={["Work", 1000, "", 500]}
                speed={250}
                repeat={Infinity}
                cursor={false}
                className="text-[#FF6B00]"
              />
            </h1>
          </div>
          <img
            src="/assets/aboutHero.png"
            alt="Image of an office setup"
            className="my-20 w-220 mx-auto h-70 md:h-full object-cover"
          />
        </div>
      </Section>

      <SectionView>
        <div className="py-10 md:py-30 flex flex-col justify-between">
          {/* The Logic */}
          <div className="flex-1">
            <p className="font-body text-xl text-[#4A5468] mb-2">THE LOGIC</p>
            <h2 className="font-display text-4xl font-bold">
              Designed for Focus
            </h2>
          </div>

          <div className="flex-1">
            <p className="text-[#1A202C] text-lg/8">
              Home blurs the line between rest and work. Traditional offices
              demand unnecessary commutes and rigid structures. GbagadaHub is
              the considered middle ground—a space engineered for deep work,
              genuine collaboration, and the kind of clarity that only comes
              from the right environment.
            </p>
          </div>
        </div>
      </SectionView>

      <SectionView>
        <div className="py-41.5 flex flex-col gap-16">
          {/* Designed for focus */}
          <div className="text-center">
            <p className="font-body text-md text-[#4A5468] mb-2">THE PILLARS</p>
            <h2 className="font-display text-4xl font-bold">
              Designed for Focus
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-80 h-80 rounded bg-[#E2E7F0]">
              <img
                src={Image1}
                alt="Image of an office setup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-80 h-80 rounded bg-[#E2E7F0]">
              <img
                src={Image3}
                alt="Image of an office setup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-80 h-80 rounded bg-[#E2E7F0] ">
              <img
                src={Image2}
                alt="Image of an office setup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </SectionView>
    </div>
  );
};
