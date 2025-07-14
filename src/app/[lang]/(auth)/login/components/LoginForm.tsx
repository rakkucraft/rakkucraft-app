"use client";

export default function LoginForm() {
  return (
    <>
      <form>
        <div className="space-y-1 pb-4">
          <label className="block text-sm font-medium text-gray-500">
            Email Address
          </label>
          <input
            type="text"
            className="block w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all duration-200"
          />
        </div>
        <div className="space-y-1 pb-4">
          <label className="block text-sm font-medium text-gray-500">
            Password
          </label>
          <input
            type="password"
            className="block w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition-all duration-200"
          />
        </div>
        <div className="flex justify-end">
          <button className="px-3 py-2 rounded-sm bg-sky-700 hover:bg-sky-800 text-white text-xs cursor-pointer">
            Log In
          </button>
        </div>
      </form>
    </>
  );
}
