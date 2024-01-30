'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhone] = useState();
  const [password, setPassword] = useState('');
  const [studentId,setId] = useState('');
  const router=useRouter();
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/regPOST`, {
        name,
        studentId,
        phoneNo,
        email,
        password,
        
      });

      // Assuming your API returns a status of 200 for a successful registration
      if (response.status === 200) {
        router.push('/login')
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-6 col-md-offset-3">
            <form action="#" className="form-group" method="POST" >
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="name">Email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="name">Student ID: </label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  className="form-control"
                  value={studentId}
                  onChange={(e) => setId(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Phone Number: </label>
                <input
                  type="number"
                  id="phoneNo"
                  name="phoneNo"
                  className="form-control"
                  value={phoneNo}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <span className="error"></span>
              </div>
              <button type="submit" className="btn btn-primary" onClick={(e)=>{handleRegister(e)}}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
