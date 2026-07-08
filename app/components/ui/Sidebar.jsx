import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1e2a38] text-white flex flex-col h-screen">
      <div className="px-6 py-5 text-lg font-bold border-b border-white/10">
        Start Bootstrap
      </div>

      <nav className="flex-1 px-4 py-4">
        <p className="text-sm text-gray-400 uppercase px-2 mb-2">Core</p>
        <Link href="#" className="block px-3 py-2 rounded bg-gray-600 text-white">
          Dashboard
        </Link>

        <p className="text-sm text-gray-400 uppercase px-2 mt-4 mb-2">
          Interface
        </p>
        <Link
          href="#"
          className="block px-3 py-2 rounded hover:bg-gray-600 text-gray-300"
        >
          Layouts
        </Link>
        <Link
          href="#"
          className="block px-3 py-2 rounded hover:bg-gray-600 text-gray-300"
        >
          Pages
        </Link>

        <p className="text-gray-400 uppercase px-2 mt-4 mb-2">Addons</p>
        <Link
          href="#"
          className="block px-3 py-2 rounded hover:bg-gray-600 text-gray-300"
        >
          Charts
        </Link>
        <Link
          href="#"
          className="block px-3 py-2 rounded hover:bg-gray-600 text-gray-300"
        >
          Tables
        </Link>
      </nav>
    </aside>
  );
}
