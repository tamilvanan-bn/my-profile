import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Contact = () => {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/tamilvanan-bn",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://www.github.com/tamilvanan-bn",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/tamilvanan-b/",
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces />,
      url: "https://codeforces.com/profile/tamilvanan.bn",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      url: "https://www.discordapp.com/users/1326166844452634755",
    },
  ];

  return (
    <div className="m-8 flex justify-center">
      <table className="w-auto">
        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact.name}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="py-2 pr-4">
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${contact.name} profile`}
                  title={contact.name}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span className="text-lg">{contact.icon}</span>
                  <span className="text-base">{contact.name}</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
