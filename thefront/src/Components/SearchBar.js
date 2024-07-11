const SearchBar = () => {
   
    return (
            <div className="w-screen h-40 fixed top-0 flex flex-col items-center p-4 bg-white border-b border-gray-300 space-y-4">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="h-10 w-1/2 text-lg rounded-lg border border-gray-300 pl-4 mt-4 p-6" />
                <div className="flex space-x-6">
                    <button className="px-4 py-2 bg-med-red text-white rounded-lg">Run Filtered Search</button>
                    <button className="px-4 py-2 bg-med-red text-white rounded-lg">Sort by</button>
                </div>
            </div>
        );
};

export default SearchBar;