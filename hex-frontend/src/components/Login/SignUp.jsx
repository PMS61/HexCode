import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const apiUrl = process.env.EXPRESS_API_URL
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch(`${apiUrl}/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": credentials.email,
        "password": credentials.password,
        "name": credentials.name
      })
    });
    const json = await response.json();
    console.log(json);
    if (json.authToken) {
      // save the auth token and redirect
      console.log("SignUp Success");
      localStorage.setItem('authToken', json.authToken);
      navigate('/dashboard');
    } else {
      console.log("Sign Up Failed");
      alert(json.error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{backgroundImage: "url(login-bg.png)", backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
      <section className="border-gray-300 text-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="bg-slate-200 w-full rounded-lg shadow border-gray-300 sm:max-w-md">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign Up
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Your username"
                    required
                    onChange={onChange} value={credentials.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    onChange={onChange} value={credentials.email}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    required
                    onChange={onChange} value={credentials.password}
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5"
                    required
                    onChange={onChange} value={credentials.confirmPassword}
                  />
                </div>
                <div className='flex justify-center align-middle'>
                  <button
                    type="submit"
                    className="btn w-36 md:btn-wide btn-primary mt-4 px-0 font-bold text-lg bg-[#57A2D8] hover:bg-[#2B80BD]">
                    Sign Up
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500">
                  Already have an account? {" "}
                  <Link to="/login" className="font-medium text-primary-600 hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
