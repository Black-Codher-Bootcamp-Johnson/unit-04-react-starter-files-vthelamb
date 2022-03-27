import React from 'react';
const Search = (props) => {
const { keyword, setKeyword } = props;
const handleSubmit = (event) =>{
    event.preventDefault();
    props.findBooks(keyword);
    };
    
return <div class="searchBar">
  <form onSubmit={(e) => handleSubmit(e)}>
      <p>
          <label>Search:<br></br><em>(You can search by title, author or description)</em></label>
          <br></br>
          <input type="text" name="search" value={keyword} onChange={(e) => props.setKeyword(e.target.value)}></input>
      </p>
    <input type="submit" value="Submit"/>
    <p style={{color:"magenta"}}><em>{keyword && 'You are looking for a book about: ' + keyword}</em></p>
  </form>
</div>
}
export default Search;