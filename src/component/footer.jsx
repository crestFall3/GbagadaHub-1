import { NavLink } from "react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left gap-17 py-20">
      {/* first footer column */}
      <div className="flex flex-col items-center md:items-start gap-4 flex-1">
        <div className="flex gap-2 items-center">
        <img style={{ backgroundColor: "#FF6A00" }} className="w-12 h-12" src="/logo.svg" alt="Brand Logo" />
``          <p className="flex flex-col font-body">
            
          </p>
        </div>
        <p className="mb-3">
          Empowering Gbagada’s creative and entrepreneurial community with
          premium, flexible workspaces.
        </p>

        <div className="flex gap-6">
          {/* social icons */}
          <img
            src="/svg/facebook.svg"
            alt="facebook icon"
            className="w-6 color-[#FF6B00]"
          />
          <img src="/svg/X.svg" alt="X icon" />
          <img src="/svg/instagram.svg" alt="instagram icon" className="w-6" />
          <img src="/svg/linkedIn.svg" alt="linkedIn icon" className="w-6" />
        </div>
      </div>

      {/* second footer column */}
      <div className="flex flex-col gap-4">
        <h3 className="mb-7.25 font-bold font-body">Quick Links</h3>
        {/* Quick Links */}
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink>Boardroom</NavLink>
        <NavLink>Private Office</NavLink>
      </div>

      {/* Third footer column */}
      <div className="flex flex-col gap-4">
        <h3 className="mb-7.25 font-bold font-body">Company</h3>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>

      {/* Fouth footer column */}
      <div className="flex flex-col gap-4">
        <h3 className="mb-7.25 font-bold font-body">Contact</h3>
        <div className="flex gap-5 justify-center md:justify-start">
          <MapPin />
          <p>13, Alabi Street, Gbagada Phase I, lagos.</p>
        </div>

        <div className="flex gap-5 justify-center md:justify-start">
          <Mail />
          <p>info@gbagadahub.com</p>
        </div>

        <div className="flex gap-5 justify-center md:justify-start">
          <Phone />
          <p>0803 808 0145</p>
        </div>
      </div>
    </div>
  );
};
