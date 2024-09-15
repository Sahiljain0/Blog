// AllPosts.js
import { Link } from 'react-router-dom';

const organizePostsByMonthYear = (posts) => {
  const organizedPosts = {};
  posts.forEach((post) => {
    const postDate = new Date(post.date);
    const year = postDate.getFullYear();
    const month = postDate.toLocaleString('default', { month: 'long' });

    if (!organizedPosts[year]) {
      organizedPosts[year] = {};
    }

    if (!organizedPosts[year][month]) {
      organizedPosts[year][month] = [];
    }

    organizedPosts[year][month].push(post);
  });

  return organizedPosts;
};

const AllPosts = ({ posts }) => {
  const organizedPosts = organizePostsByMonthYear(posts);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">All Blog Posts</h2>

      {Object.keys(organizedPosts).map((year) => (
        <div key={year}>
          <h3 className="text-2xl font-bold my-2">{year}</h3>
          {Object.keys(organizedPosts[year]).map((month) => (
            <div key={month} className="mb-4">
              <h4 className="text-xl font-bold my-2">{month}</h4>
              <div className="flex flex-col gap-8">
                {organizedPosts[year][month]
                  .sort((a, b) => new Date(b.date) - new Date(a.date)) // Newest first
                  .map((post) => (
                    <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-700">{post.excerpt}</p>
                      <Link to={`/post/${post.id}`} className="text-blue-500 mt-2 inline-block">
                        Read more
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
