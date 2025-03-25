const Users = ({ users }) => {
  return (
    <>
      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </>
  );
};
export default Users;
