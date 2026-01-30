export function Header() {
  return (
    <header className="h-[120px] bg-white flex items-center justify-between px-10 fixed top-0 left-[345px] right-0 z-10">
      {/* Page Title */}
      <h1 className="text-4xl font-semibold text-gray-900">Dashboard</h1>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-gray-300 rounded-2xl px-6 py-4 w-[513px]">
        <img
          src="./assets/icons/search.svg"
          alt="Search"
          className="w-8 h-8"
        />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none text-lg text-gray-700 placeholder:text-gray-700 flex-1"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
          <img
            src="./assets/icons/language.svg"
            alt="Language"
            className="h-[60px]"
          />
        </div>

        {/* Notifications */}
        <div className="relative p-3 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
          <img
            src="./assets/icons/notification.svg"
            alt="Notifications"
            className="w-12 h-12"
          />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full"></span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
          <img
            src="./assets/images/user-avatar.png"
            alt="User Avatar"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">Musfiq</span>
            <span className="text-sm text-gray-700">Admin</span>
          </div>
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
