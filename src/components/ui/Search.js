import React, { useState } from "react";

const Search = ({ getUrlQuery }) => {
  const [name, setName] = useState("");

  const handleChange = userInput => {
    console.log(userInput);

    setName(userInput);

    getUrlQuery(userInput);
  };

  return (
    <section className="search">
      <form>
        <input type="text" className="form-control" placeholder="Search character...." autoFocus value={name} onChange={e => handleChange(e.target.value)} />
      </form>
    </section>
  );
};

export default Search;
