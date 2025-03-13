import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/catalog" className="text-white text-lg font-semibold">
          Catalog
        </Link>
        <Link href="/generator" className="text-white text-lg font-semibold">
          Generator
        </Link>
        
        <div className="flex space-x-4">
          <Link href="/search" className="text-white">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
}
