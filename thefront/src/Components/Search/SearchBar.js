const SearchBar = () => {
  return (

        <div className="flex flex-col h-fit items-center fixed top-0 left-[128px] right-0 z-20 min-w-0 border-b border-gray-200 backdrop-blur-md
        backdrop-brightness-75 
        backdrop-contrast-75 
        backdrop-saturate-150
        px-20">
              <input
                type="text"
                placeholder="Search..."
                className="h-14 w-full text-lg text-white rounded-full pl-8 m-6 max-w-2xl bg-transparent border border-gray-300"
              />
        </div>

  );
};

export default SearchBar;
