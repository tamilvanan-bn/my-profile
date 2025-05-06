import React from "react";

const Skills = () => {
  const skillsData = {
    Languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
    "Back-end": ["Node.js", "Spring Boot", "Spring Data JPA"],
    "Front-end": ["Angular", "React", "HTML", "CSS"],
    "Tools/Development": ["Git", "GitHub Actions", "Apache Maven", "Datadog"],
  };

  return (
    <div className="mx-5 my-5 max-w-4xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Technical Skills</h2>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(skillsData).map(([category, skills]) => (
              <tr key={category} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 bg-gray-50 w-1/4">
                  {category}:
                </td>
                <td className="px-6 py-4 text-gray-700">{skills.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
