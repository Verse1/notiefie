function login() {
  return (
    <div className="grid h-[88vh] place-items-center">
      <div className="bg inline-block rounded-3xl bg-white p-7">
        <h1 className="mb-7 text-center text-2xl">Login to your account</h1>
        <form className="text-center">
          <label>
            School Email:
            <input
              type="text"
              name="email"
              className="ml-2 rounded-md border border-black"
            />
          </label>
          <br />
          <input
            type="submit"
            value="Sign In"
            className="mt-9 mb-4 cursor-pointer rounded-xl bg-gradient-to-r from-green-300 to-blue-400 p-3 px-9"
          />
        </form>
      </div>
    </div>
  );
}

export default login;
