import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Import the CSS file for animations

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(3); // Initial visible posts count
  const [loading, setLoading] = useState(false); // Loading state for "Show More" button
  const [fade, setFade] = useState(false); // State to handle fade-in effect

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:5000/posts');
      const data = await response.json();

      // Sort posts by createdAt field in descending order (recent to older)
      const sortedPosts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(sortedPosts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    setFade(true); // Enable fade-in effect after posts are set
  }, [visiblePosts]);

  const showMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3); // Show 3 more posts each time
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xlg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 ml-10 mr-10">
        {posts.slice(0, visiblePosts).map((post, index) => (
          <article
            key={post.id}
            className={`overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 fade-in-animation ${fade ? 'fade-in' : ''}`} // Apply the animation class
            style={{ animationDelay: `${index * 0.2}s` }} // Delay each post for staggered fade-in effect
          >
            <div className="image-container"> {/* Fixed size container */}
              <img
                alt={post.title}
                src={post.imageUrl}
                className="fixed-image" // Ensures fixed size
              />
            </div>
            <div className="bg-[#1e1e1e] p-4 sm:p-6">
              <time className="block text-xs text-gray-500 dark:text-gray-400">
                {new Date(post.createdAt).toLocaleDateString()}
              </time>
              <Link to={`/article/${post.slug}`}>
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                  {post.title}
                </h3>
              </Link>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Show "Show More" Button only if there are more posts */}
      {visiblePosts < posts.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMorePosts}
            className={`block bg-[#6f60f2] rounded-md px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-[#6f60f2] ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
