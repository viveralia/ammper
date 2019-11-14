import React, { useState } from "react";

const Search = () => {
  // States
  // eslint-disable-next-line
  const [query, setQuery] = useState(undefined);

  // Functions
  const handleInput = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  // Component View
  return (
    <section className="container py-3">
      <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              name="query"
              id="query"
              placeholder="Buscar nodo"
              className="form-control"
              onChange={handleInput}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
