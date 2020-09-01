import React, { useContext, Fragment } from "react";
import UserItems from "../users/UserItems";
import Spinner from "../layout/Spinner";
import githubContext from "../../context/github/githubContext";

const Users = () => {
  const context = useContext(githubContext);
  const { loading, users } = context;
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {users.map((user) => (
            <UserItems key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
