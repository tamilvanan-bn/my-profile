import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;
  return (
    <li className="hover:text-sky-600">
      <Link to={href} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default CustomLink;
