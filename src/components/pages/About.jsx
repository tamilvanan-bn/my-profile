import React from "react";
import profile from "../../assets/tamilvanan.jpg";

const About = () => {
  return (
    <div className="flex gap-[2em]">
      <div>
        <img
          className="rounded-sm"
          width={100}
          height={100}
          src={profile}
          alt="Logo"
        />
      </div>
      <div className="w-[400px]">
        <p>Hello! I'm Tamilvanan</p>
        <p>
          I work as a Software Engineer at{" "}
          <a
            className="text-blue underline underline-offset-4"
            href="https://nielseniq.com/global/en/"
            target="_about"
          >
            NielsenIQ
          </a>
          .
          <br />
          Previously, I worked at{" "}
          <a
            className="text-green underline underline-offset-4"
            href="https://www.fisglobal.com/"
            target="_blank"
          >
            FIS
          </a>
          .
        </p>
        <p className="mt-15">
          As a Frontend Developer, I specialize in building engaging, user-centric web interfaces using modern technologies such as HTML, CSS, JavaScript, and frameworks like React, and Angular. 
          My focus is on creating responsive, accessible, and performant applications that enhance user experience. 
          I collaborate closely with designers and backend developers to bring visual concepts to life while ensuring code quality, scalability, and alignment with best practices.
        </p>
      </div>
    </div>
  );
};

export default About;
