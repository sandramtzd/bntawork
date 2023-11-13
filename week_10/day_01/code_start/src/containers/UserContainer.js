import React from "react";
import UserList from "../components/UserList";
import Register from "../components/Register";

const UserContainer = () => {
  const [users, setUsers] = React.useState([]);

  const addNewUser = (newUser) => {
    const updateUsers = [...users, newUser]
    setUsers(updateUsers)


  }

  return (
    <>
      <UserList users={users} />
      <Register users={users} addNewUser={addNewUser} />
    </>
  );
};

export default UserContainer;
