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
          I'm a web developer with a growing interest in C++ and systems
          programming. While I specialize in building dynamic web applications,
          I'm currently expanding my skills by diving into C++ and learning
          about the fundamentals of compilers and low-level system design.
        </p>
      </div>
    </div>
  );
};

export default About;
