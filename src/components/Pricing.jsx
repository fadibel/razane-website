import  { useState } from "react";
import Button from "./Button";
import Section from "./Section";
import { smallSphere, stars } from "../assets";


const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValid = formState.name && formState.email && formState.message;

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      // Handle form submission logic
      console.log("Form submitted:", formState);
      // Reset form
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-lg relative z-3">
        <h2 className="text-3xl font-semibold mb-4 pb-5 text-center">
          Contact me
        </h2>
        <form
          action="https://formspree.io/f/xvgppebd"
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              className="shadow-sm shadow-white appearance-none rounded w-full py-4 px-3 text-n-1/50 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={formState.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow-sm shadow-white appearance-none rounded w-full py-4 px-3 text-n-1/50 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow-white appearance-none shadow-sm rounded w-full py-4 px-3 text-n-1/50 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="4"
              value={formState.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!isValid}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;
