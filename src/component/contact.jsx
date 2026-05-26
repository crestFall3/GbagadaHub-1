import { MyMap } from "./map";
import { MapPin, Mail, Phone, Type } from "lucide-react";
import { RegForm } from "./form";
import { Section, SectionView } from "./animation";
import { TypeAnimation } from "react-type-animation";

export const Contact = () => {
  return (
    <div>
      <Section>
        <div className="flex mt-20 md:mt-40 flex-col md:flex-row gap-5 py-34">
          <img
            src="./assets/contacthero.png"
            alt="Image of people working together"
          />
          <div>
            <h2 className="text-5xl/15 font-bold font-display mb-4">
              Your Best Work Happens{" "}
              <TypeAnimation
                sequence={["Here", 2000, "", 1000]}
                speed={300}
                cursor={false}
                repeat={Infinity}
                style={{ color: "#FF6B00" }}
              />
            </h2>
            <p className="font-body mb-10">
              Join Gbagada’s premier workspace designed for freelancers,
              entrepreneurs, and growing teams. Trade the distractions for a
              community that fuels your focus.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-5">
                <MapPin />
                <p>13, Alabi Street, Gbagada Phase I, lagos.</p>
              </div>

              <div className="flex gap-5">
                <Mail />
                <p>info@gbagadahub.com</p>
              </div>

              <div className="flex gap-5">
                <Phone />
                <p>0803 808 0145</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact form section */}
      <SectionView>
        <div className="py-28 flex flex-col md:flex-row justify-between gap-4 md:gap-8">
          <div className="flex-1">
            <RegForm />
          </div>
          <div className="flex-1">
            <MyMap />
          </div>
        </div>
      </SectionView>
    </div>
  );
};
