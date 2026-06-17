import { NavLink } from "react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left gap-17 py-20">
      {/* first footer column */}
      <div className="flex flex-col items-center md:items-start gap-4 flex-1">
        <div className="flex gap-2 items-center">
        <img className="w-16 h-16" src="/logo.svg" alt="Brand Logo" />
        </div>
        <p className="mb-3">
          Empowering Gbagada’s creative and entrepreneurial community with
          premium, flexible workspaces.
        </p>

        <div className="flex gap-6">
          {/* social icons */}
          <a href="https://www.facebook.com/gbagadahub/" target="_blank" rel="noopener noreferrer">
          <img
            src="/svg/facebook.svg"
            alt="facebook icon"
            className="w-6 cursor-pointer transition-all duration-300 hover:opacity-80"
            style={{ filter: "brightness(1)", transition: "filter 0.3s" }}
            onMouseEnter={(e) => e.target.style.filter = "brightness(0) saturate(1) hue-rotate(0deg) invert(50%) sepia(90%) saturate(1000%) hue-rotate(1deg)"}
            onMouseLeave={(e) => e.target.style.filter = "brightness(1)"}
          />
          </a>
          <a href="https://www.instagram.com/gbagadahub/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/svg/instagram.svg" 
            alt="instagram icon" 
            className="w-6 cursor-pointer transition-all duration-300 hover:opacity-80"
            style={{ filter: "brightness(1)", transition: "filter 0.3s" }}
            onMouseEnter={(e) => e.target.style.filter = "brightness(0) saturate(1) hue-rotate(0deg) invert(50%) sepia(90%) saturate(1000%) hue-rotate(1deg)"}
            onMouseLeave={(e) => e.target.style.filter = "brightness(1)"}
          />
          </a>
        </div>
      </div>

      {/* second footer column */}
      <div className="flex flex-col gap-4">
        <h3 className="mb-7.25 font-bold font-body">Quick Links</h3>
        {/* Quick Links */}
        <NavLink to="/pricing" className="transition-colors duration-300 hover:text-[#FF6A00]">Pricing</NavLink>
        <NavLink className="transition-colors duration-300 hover:text-[#FF6A00]">Boardroom</NavLink>
        <NavLink className="transition-colors duration-300 hover:text-[#FF6A00]">Private Office</NavLink>
      </div>

      {/* Third footer column */}
      <div className="flex flex-col gap-4">
        <h3 className="mb-7.25 font-bold font-body">Company</h3>
        <NavLink to="/about" className="transition-colors duration-300 hover:text-[#FF6A00]">About Us</NavLink>
        <NavLink to="/contact" className="transition-colors duration-300 hover:text-[#FF6A00]">Contact Us</NavLink>
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
