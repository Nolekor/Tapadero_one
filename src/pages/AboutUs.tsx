import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('./images/tapaderointerno.jpg')] w-full bg-cover h-screen">
      <p className="text-4xl pt-5 pb-5 mb-5 bg-gray-600 bg-opacity-50 w-full text-center">
        Vieni a trovarci!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.9165020799555!2d9.15145557666965!3d45.188786451772096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787274685e76ccf%3A0x4de51d71589ab2ca!2sM.C.Tapadero!5e0!3m2!1sen!2sit!4v1683816343483!5m2!1sen!2sit"
        className="w-[300px] h-[300px] sm:w-[680px] h-[680px]"
      ></iframe>
      <p className="text-4xl pt-5 pb-5 mt-5 bg-gray-600 bg-opacity-50 w-full text-center">
        Piazza Petrarca 29 Pavia!
      </p>
    </div>
  );
}

export default AboutUs;
