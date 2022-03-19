const Login = () =>{
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({email: e.target.email.value});
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="bg inline-block rounded-3xl bg-white p-7">
        <h1 className="mb-7 text-center text-2xl">Login to your account</h1>
        <form className="text-center" onSubmit={handleSubmit}>
          <label htmlFor="login-email">
            School Email:
            <input
              type="email"
              id="login-email"
              name="email"
              className="ml-2 p-1 px-2 rounded-md border border-black"
              required
            />
          </label>
          <br />
          <button
            type="submit"
            className="mt-9 mb-4 cursor-pointer rounded-xl bg-gradient-to-r from-green-300 to-blue-400 p-3 px-9"
          >Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
