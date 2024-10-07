import React, { useState } from 'react';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 mb-20">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold mb-6 text-primary flex items-center">
          <FaPencilAlt className="mr-2" />
          Create New Post
        </h2>
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post..."
              className="textarea textarea-bordered h-24"
              required
            />
          </div>
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              <FaPlus className="mr-2" />
              Publish
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
