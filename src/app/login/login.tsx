export default function Login() {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Enter your name or the code your tutor gave you.</h2>
      <form>
        <input
          type="text"
          placeholder="e.g. amelia23"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="w-full text-center bg-violet-600 hover:bg-violet-700 text-white px-3 py-2 rounded-lg font-bold text-sm shadow-md shadow-violet-200 flex gap-2"
        >
          <span className="text-center w-full ">Login</span>
        </button>
      </form>
    </div>
  );
}
