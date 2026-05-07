import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setAuthUser } from "../redux/appSlice";

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: ""
  });
const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle input change
  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        input,
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      );

      if (res.data.success) {
        dispatch(setAuthUser(res.data.user));
        toast.success(res.data.message);
        navigate("/");
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-100'>
      
      <form
        onSubmit={submitHandler}
        className='flex flex-col gap-4 bg-white p-6 rounded-xl shadow-lg w-[90%] sm:w-[350px]'
      >

        <h1 className='font-bold text-3xl text-center text-gray-800'>
          Login
        </h1>

        {/* Email */}
        <input
          type='email'
          name='email'
          value={input.email}
          onChange={changeHandler}
          placeholder='Enter your email'
          className='border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400'
          required
        />

        {/* Password */}
        <input
          type='password'
          name='password'
          value={input.password}
          onChange={changeHandler}
          placeholder='Enter your password'
          className='border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400'
          required
        />

        {/* Button */}
        <button
          type="submit"
          className='bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-md transition duration-200'
        >
          Login
        </button>

        <p className='text-sm text-center'>
          Don't have an account?{" "}
          <Link to={"/signup"} className='text-blue-600 hover:underline'>
            Signup
          </Link>
        </p>

      </form>
    </div>
  );
};

export default Login;