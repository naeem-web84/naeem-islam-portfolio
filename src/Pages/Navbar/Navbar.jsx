import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn btn-sm rounded-md px-4 font-semibold border ${
              isActive
                ? "bg-secondary text-white border-secondary"
                : "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/banner"
          className={({ isActive }) =>
            `btn btn-sm rounded-md px-4 font-semibold border ${
              isActive
                ? "bg-secondary text-white border-secondary"
                : "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white"
            }`
          }
        >
          Banner
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary text-base-content px-4 py-2">
      {/* Left: Name */}
      <div className="flex-1 lg:flex-none">
        <Link to="/" className="text-xl font-bold text-accent">
          Naeem Islam
        </Link>
      </div>

      {/* Center: Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      {/* Right: Resume Download */}
      <div className="flex-none hidden lg:flex">
        <a
          href="/resume.pdf"
          className="btn btn-sm bg-white text-secondary border-secondary border hover:bg-secondary hover:text-white"
          download
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost text-accent">
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
        >
          {navLinks}
          <li>
            <a
              href="/resume.pdf"
              className="btn btn-sm bg-white text-secondary border-secondary border hover:bg-secondary hover:text-white w-full"
              download
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
