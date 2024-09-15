// RecentPosts.js
import { Link } from 'react-router-dom';

const RecentPosts = () => {

    // DummyData.js
const posts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      date: 'February 15, 2024',
    },
    {
      id: 2,
      title: 'Building a Responsive Web Design with Flexbox',
      date: 'February 16, 2024',
    },
    {
      id: 3,
      title: 'Introduction to GraphQL for Frontend Developers',
      date: 'February 17, 2024',
    },
  ];
  
  return (
    <div className="container w-11/12 mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
      <div className="flex flex-col">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="lg:mr-4">
                <Link to={`/post/${post.id}`} className="text-md font-bold mb-2">{post.title}</Link>
              </div>
              <div className="mt-4 lg:mt-0">
                <p className="text-gray-700">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
