
const SearchBar = () => {
   
    return (
            <div className="w-screen h-fit flex flex-col items-center bg-white p-6 border-b border-gray-300 space-y-4">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="h-10 w-7/12 text-lg rounded-full bg-gray-100 pl-4 mt-4 p-6 hover:bg-slate-50" />
                <div className="flex space-x-6">
                    <button className="px-4 py-2 bg-med-red text-white rounded-lg">Run Filtered Search</button>
                    <button className="px-4 py-2 bg-med-red text-white rounded-lg">Sort by</button>
                </div>
            </div>
        );
};

export default SearchBar;
