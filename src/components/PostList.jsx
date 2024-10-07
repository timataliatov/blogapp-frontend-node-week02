import React from 'react';
import { FaCalendarAlt, FaUser, FaComments, FaEye } from 'react-icons/fa';

const PostList = ({ posts }) => {
  // function to generate random number between min and max (inclusive)
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  // function to get a random image URL
  const getRandomImage = () => `https://picsum.photos/400/225?random=${Math.random()}`;

  return (
    <>
    <h2 className="text-bold p-4 text-2xl text-center">POSTS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <figure className="px-6 pt-6">
            <img src={post.image || getRandomImage()} alt={post.title} className="rounded-xl" />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-xl font-bold mb-3 text-primary">{post.title}</h2>
            <p className="text-base-content text-opacity-80 line-clamp-3 mb-4">{post.content}</p>
            <div className="flex flex-wrap items-center text-sm text-base-content text-opacity-60 mb-4">
              <div className="badge badge-outline mr-2 mb-2">
                <FaCalendarAlt className="mr-2" />
                {new Date(post.created_at).toLocaleDateString()}
              </div>
              <div className="badge badge-outline mr-2 mb-2">
                <FaUser className="mr-2" />
                {post.username}
              </div>
            </div>
            <div className="card-actions justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <FaComments className="mr-1 text-info" />
                  <span className="badge badge-info badge-sm">{post.comment_count || getRandomNumber(0, 50)}</span>
                </span>
                <span className="flex items-center">
                  <FaEye className="mr-1 text-success" />
                  <span className="badge badge-success badge-sm">{post.view_count || getRandomNumber(10, 1000)}</span>
                </span>
              </div>
              <button className="btn btn-primary btn-sm">Read More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PostList;
