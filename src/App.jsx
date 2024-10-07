import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Footer from './components/Footer';

function App() {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetchPosts();
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async (postData) => {
    try {
      await axios.post('http://localhost:3000/api/posts', { ...postData, user_id: 1 });
      fetchPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main className="container mx-auto px-4 py-8">
        <PostForm onSubmit={handleCreatePost} />
        <PostList posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
