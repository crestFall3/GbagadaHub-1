import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const RegForm = () => {
  const [formState, setFormState] = useState("idle");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
      alert("Email service is not configured. Missing Service ID.");
      return;
    }

    setFormState("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormState("sent");
          if (formRef.current) formRef.current.reset();
          setTimeout(() => setFormState("idle"), 5000);
        },
        (error) => {
          console.error("Failed:", error);
          setFormState("error");
          alert("Failed to send message. Please try again or contact me directly via email.");
          setTimeout(() => setFormState("idle"), 5000);
        }
      );
  };

  const fields = [
    { label: "Full Name", name: "name", type: "text", placeholder: "John Doe", required: true },
    { label: "Phone Number", name: "phone", type: "tel", placeholder: "09012345678", required: true },
    { label: "Email", name: "email", type: "email", placeholder: "example@gmail", required: true },
    { label: "Subject", name: "subject", type: "text", placeholder: "Subject", required: true },
    { label: "Message", name: "message", type: "textarea", placeholder: "Your message here...", required: true },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-5xl/15 font-bold font-display">Contact Us</h2>
      <p>How can we help you?</p>

      <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} ref={formRef}>
        {fields.map((field) => (
          <div key={field.name} className={`flex flex-col gap-2 ${field.type === "textarea" ? "col-span-2" : ""}`}>
            <label htmlFor={field.name}>{field.label}</label>

            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                className="border py-2 px-2 rounded h-40">
              </textarea>
            ) : (
              <input
                name={field.name}
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="border py-2 px-2 rounded" />
            )}
          </div>
        ))}
        <button
          type="submit"
          disabled={formState === "sending"}
          className={`bg-[#FF6B00] px-4 py-2 self-end text-white rounded cursor-pointer transition-all ${formState === "sending" ? "opacity-50 cursor-not-allowed" : "hover:bg-[#e66000]"
            }`}
        >
          {formState === "sending" ? "Sending..." : "Send"}
        </button>

        {formState === "sent" && (
          <p className="text-green-600 font-medium text-center mt-2 animate-bounce">
            Message sent successfully! We will get back to you soon.
          </p>
        )}
        {formState === "error" && (
          <p className="text-red-600 font-medium text-center mt-2">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};
