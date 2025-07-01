import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">ZOAN</Link>
        </div>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-blue-400 transition-colors duration-200">
            <Link href="/auth">Auth</Link>
          </li>
          <li className="text-white hover:text-blue-400 transition-colors duration-200">
            <Link href="/user">User</Link>
          </li>
          <li className="text-white hover:text-blue-400 transition-colors duration-200">
            <Link href="/client">Client</Link>
          </li>
          <li className="text-white hover:text-blue-400 transition-colors duration-200">
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
