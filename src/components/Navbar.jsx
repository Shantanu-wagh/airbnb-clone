const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500 cursor-pointer">
        airbnb
      </h1>

      {/* Search Bar */}
      <div className="hidden md:flex items-center border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition">
        <input
          type="text"
          placeholder="Anywhere"
          className="outline-none px-2 text-sm"
        />
        <span className="text-gray-400">|</span>
        <input
          type="text"
          placeholder="Any week"
          className="outline-none px-2 text-sm"
        />
        <span className="text-gray-400">|</span>
        <input
          type="text"
          placeholder="Add guests"
          className="outline-none px-2 text-sm"
        />
        <button className="bg-red-500 text-white px-3 py-1 rounded-full ml-2 text-sm">
          🔍
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm font-medium">
          Airbnb your home
        </button>

        <div className="flex items-center gap-2 border rounded-full px-3 py-2 shadow-sm cursor-pointer">
          <span>☰</span>
          <span>👤</span>
        </div>
      </div>

    </div>
  );
};

export default Navbar;