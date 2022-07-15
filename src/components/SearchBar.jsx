import search from '../images/search.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" name="search" id="search" placeholder='Search by University' />
      <img src="https://res.cloudinary.com/dl2mkfkqh/image/upload/v1657886912/fianl/search_crfvft.png" alt="search" />
    </div>
  );
};

export default SearchBar;