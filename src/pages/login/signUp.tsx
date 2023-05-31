import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/profile.jpg" alt="Login Image" width={700} height={500} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome Sign UP!</h1>
            <p className="mt-2 text-gray-600">
              Please sign uP to your account.
            </p>
          </div>
          <div className="flex flex-row">
            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block font-bold text-gray-700"
                >
                  First Name
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  required
                />
              </div>
            </form>
            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block font-bold text-gray-700 ml-3"
                >
                  Last Name
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 mt-1 ml-3 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                  required
                />
              </div>
            </form>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <Link
            href="page"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
