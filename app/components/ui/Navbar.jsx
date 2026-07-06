export default function Navbar() {
  return (
    <header className="h-16 bg-[#283548] text-white flex items-center justify-between px-6">
      <button className=" bg-blue-600 px-3 py-1.5 rounded hover:bg-amber-300">
        &#9776;
      </button>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search for..."
          className="px-3 py-1.5 rounded text-sm text-black bg-white"
        />
        <button className="bg-blue-600 px-3 py-1.5 rounded  hover:bg-amber-300">
          Search
        </button>
        <button className="bg-blue-600 px-3 py-1.5 rounded  hover:bg-amber-300">
          User
        </button>
      </div>
    </header>
  );
}
