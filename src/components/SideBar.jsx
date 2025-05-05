import React from "react";
import CustomLink from "./CustomLink";

const SideBar = () => {
  return (
    <div className="fixed top-[5em] left-[20em]">
      <h1 className="text-3xl font-medium">Tamilvanan B</h1>
      <ul className="mt-5 leading-10 [&>*]:underline [&>*]:underline-offset-8 [&>*]:decoration-sky-400">
        <CustomLink href="/">About</CustomLink>
        <CustomLink href="/skills">Skills</CustomLink>
        <CustomLink href="/resume">Resume</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>
      </ul>
    </div>
  );
};

export default SideBar;
