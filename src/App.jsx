import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Layout from './components/Layout';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import { fetchPosts, createPost } from './api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleCreatePost = async (postData) => {
    try {
      await createPost(postData);
      await loadPosts();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <ThemeProvider>
        <Layout user={user} onLogout={handleLogout}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={user ? <Navigate to="/posts" /> : <LoginPage onLogin={handleLogin} />} />
            <Route
              path="/posts"
              element={
                user ? (
                  <>
                    <PostForm onSubmit={handleCreatePost} />
                    <PostList posts={posts} />
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
