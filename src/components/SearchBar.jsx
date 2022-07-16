import search from "../images/search.png";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search by University"
      />
      <img
        src="https://res.cloudinary.com/shishirasdjfadsfj/image/upload/v1657875010/CollegeGrahasthiWeb/search_pbmssf.png"
        alt="search"
      />
    </div>
  );
};

export default SearchBar;
