function Login() {
  return (
    <div className="bg-gray-200 w-full h-screen justify-center flex items-center">
      <div className="bg-gray-400 h-[400px] w-[700px] rounded-lg text-center flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl ">Login</h1>
        <div className="flex flex-col items-center py-4 ">
          <label className="text-white text-3xl  ">Username:</label>
          <input className="w-56 rounded focus:ring-0 focus:outline-none px-2 py-1" />
          <label className="text-white text-3xl  ">Password:</label>
          <input className="w-56 rounded focus:ring-0 focus:outline-none px-2 py-1" />

          <button className="bg-gray-600 text-white px-4 py-2 m-5 text-xl rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
