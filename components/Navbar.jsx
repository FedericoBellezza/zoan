"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">ZOAN</Link>
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="text-white hover:text-blue-400 transition-colors duration-200">
              <Link href="/auth">Auth</Link>
            </li>
            <li className="text-white hover:text-blue-400 transition-colors duration-200">
              <Link href="/user">User</Link>
            </li>
            <li className="text-white hover:text-blue-400 transition-colors duration-200">
              <Link href="/client">Client</Link>
            </li>
            <li className="text-white hover:text-blue-400 transition-colors duration-200">
              <Link href="/admin">Admin</Link>
            </li>
          </ul>
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-white">{user.email}</span>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-400 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
