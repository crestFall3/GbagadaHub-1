import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Accordion = ({ item }) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {item.map((item, index) => (
        <div
          key={index}
          onClick={() => handleOpen(index)}
          className="border-3 border-transparent flex flex-col py-2 px-6 cursor-pointer hover:border-[#FF6B00] rounded transition-colors duration-200"
        >
          <div className="flex justify-between">
            <p className="font-bold text-lg">{item.title}</p>
            <button
              className="transition-all cursor-pointer duration-300 ease-in"
            >
              {open === index ? <Minus /> : <Plus />}
            </button>
          </div>

          <div
            className={`font-base transition-all duration-300 ease-in-out overflow-hidden ${open === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
