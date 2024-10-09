import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaUsers, FaLightbulb } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-primary">Welcome to BlogDeploy</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Share your thoughts, connect with others, and explore new ideas.</p>
        <Link to="/posts" className="btn btn-primary btn-lg">Get Started</Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: FaPencilAlt, title: "Write", description: "Express yourself through engaging blog posts." },
          { icon: FaUsers, title: "Connect", description: "Build a community around your content." },
          { icon: FaLightbulb, title: "Discover", description: "Explore new perspectives and ideas." }
        ].map((feature, index) => (
          <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center">
              <feature.icon className="text-4xl text-primary mb-4" />
              <h2 className="card-title text-2xl mb-2">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="text-center bg-base-300 py-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to start blogging?</h2>
        <Link to="/login" className="btn btn-secondary btn-lg">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default LandingPage;
