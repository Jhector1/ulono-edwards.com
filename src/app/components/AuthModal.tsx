'use client';
import { useState, useEffect } from 'react';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // Replace this with actual auth check logic
    const isLoggedIn = false; // e.g., !!localStorage.getItem("token")
    if (!isLoggedIn) {
      setIsOpen(true);
    }
  }, []);

  if (!isOpen) return null;

  return (
<div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/30 flex items-center justify-center">
      <div className="relative bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          {isLogin ? 'Log In to Your Account' : 'Create an Account'}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
}
