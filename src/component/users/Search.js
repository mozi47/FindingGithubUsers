import React, { useState, useContext } from "react";
import githubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";

const Search = () => {
  const context = useContext(githubContext);
  const AlertContext = useContext(alertContext);
  const { users, ClearUser, SearchUser } = context;

  const [state, setstate] = useState("");

  const onChange = (e) => {
    setstate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (state === "") {
      AlertContext.setAlert("Please Enter the text", "light");
    } else {
      SearchUser(state);
      setstate("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          value={state}
          placeholder="search users......"
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={ClearUser}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
