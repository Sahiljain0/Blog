// Home.js
import { FaCode, FaCogs, FaLightbulb } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container mx-auto text-center my-20">
      <div className="flex justify-center gap-4 items-center mb-6">
        <FaCode className="text-4xl mr-2 text-blue-500" />
        <FaCogs className="text-4xl mr-2 text-green-500" />
        <FaLightbulb className="text-4xl text-yellow-500" />
      </div>

      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog!</h1>
      <p className="text-lg text-gray-700">
        Thank you for visiting my blog. Here, I share various projects, ideas, and content related to
        technology, programming, and more. Explore the site to discover interesting articles and
        information.
      </p>
     
    </div>
  );
};

export default Home;
