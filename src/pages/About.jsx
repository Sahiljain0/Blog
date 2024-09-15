// About.js
import { FaCode, FaLaptopCode, FaBrain, FaPalette, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        I am a passionate computer science student currently in my third year of BTech.
        My love for coding and development extends to various domains, including problem-solving,
        DSA questions, machine learning, and algorithmic work.
      </p>
      <div className="flex flex-wrap justify-center items-center mt-6">
        <div className="m-4 flex flex-col items-center">
          <FaCode className="text-4xl text-blue-500" />
          <p className="text-gray-700 mt-2">Coding & Development</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <FaLaptopCode className="text-4xl text-green-500" />
          <p className="text-gray-700 mt-2">Problem Solving</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <FaBrain className="text-4xl text-purple-500" />
          <p className="text-gray-700 mt-2">Machine Learning</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <FaPalette className="text-4xl text-orange-500" />
          <p className="text-gray-700 mt-2">Designing</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <FaLightbulb className="text-4xl text-yellow-500" />
          <p className="text-gray-700 mt-2">Algorithmic Work</p>
        </div>
      </div>
      <p className="text-lg text-gray-700 mt-6">
        I enjoy working on projects that challenge me and allow me to explore new technologies.
        Whether its designing user interfaces or solving complex algorithmic problems,
        I am always eager to expand my skills and knowledge.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Outside of coding, you can find me exploring the latest trends in technology, reading about
        advancements in machine learning, and contributing to open-source projects.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Feel free to connect with me on my social media profiles. Im always open to collaboration
        and discussion on exciting projects and ideas.
      </p>
    </div>
  );
};

export default About;
