function Search(props) {
  function handleValueChange(e) {
    const { value } = e.target;
    props.handleCallback(value);
  }

  return (
    <div className="input-wrapper">
      <input
        className="search-bar"
        type="text"
        placeholder=""
        onChange={handleValueChange}
      ></input>
    </div>
  );
}

export default Search;
