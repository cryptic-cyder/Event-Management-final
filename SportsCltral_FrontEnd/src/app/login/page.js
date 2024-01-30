'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router=useRouter();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/logPOST`, {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('user', response.data);
        router.push('/')
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="username">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="error"></span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="error"></span>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              Login
            </button>
          </form>
          <div className="mt-3">
            Don&apos;t have an account? <Link href="register">Register</Link> here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
