import AllPosts from "../components/AllPosts";

const Posts = () => {


    // DummyData.js
const posts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      date: '2023-12-15',
      excerpt: 'Learn the basics of React Hooks and how to use them in your projects.',
    },
    {
      id: 2,
      title: 'Building a Responsive Web Design with Flexbox',
      date: '2023-11-10',
      excerpt: 'Explore the power of Flexbox to create responsive and flexible web layouts.',
    },
    {
      id: 3,
      title: 'Introduction to GraphQL for Frontend Developers',
      date: '2023-10-05',
      excerpt: 'Discover the benefits of using GraphQL and how it improves data fetching in your apps.',
    },
    {
      id: 4,
      title: 'Machine Learning Basics: A Beginner\'s Guide',
      date: '2023-09-20',
      excerpt: 'Get started with the fundamentals of machine learning and its applications.',
    },
    {
      id: 5,
      title: 'Algorithmic Problem Solving Techniques',
      date: '2023-09-05',
      excerpt: 'Master various algorithmic problem-solving techniques to tackle coding challenges.',
    },
  ];


  return (
    <div>
     <AllPosts posts= {posts} />
    </div>
  )
}

export default Posts
