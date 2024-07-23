import { ReactComponent as FilterIcon } from "../../assets/filter.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const SearchBar = ({ callback }) => {
  return (
    <div
      className="flex flex-row h-fit items-center justify-center w-full min-w-0 border-b bg-white border-gray-200 
        backdrop-blur-md
        backdrop-brightness-75 
        backdrop-contrast-75 
        backdrop-saturate-150
        px-20 p-8
        space-x-4"
    >
      <div className="flex rounded-full border border-gray-300 w-full max-w-2xl space-x-2 justify-center pr-4 p-2">
        <SearchIcon className="w-6 h-6 fill-gray-500 pt-1" />
        <input
          type="text"
          placeholder="Search..."
          className="text-lg w-full min-w-40 focus:outline-none"
        ></input>
      </div>

      <button
        className="bg-med-blue text-white rounded-2xl p-2 px-4 h-fit w-fit flex flex-row space-x-2"
        onClick={callback}
      >
        <FilterIcon className="w-6 h-6 fill-white" />
        <span>Filters</span>
      </button>
    </div>
  );
};

export default SearchBar;
