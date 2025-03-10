// These components inside topics are only for new topic discussion and dont have direct realation with our project Task Tracker...

const users = [
  {
    id: 1,
    name: "Alan Smith",
    email: "alan@gmail.com",
  },
  { id: 2, name: "Bob Smith", email: "bob@gmail.com" },
  { id: 3, name: "Christina Todor", email: "christina@gmail.com" },
];

const Users = () => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      ))}
    </>
  );
};
export default Users;
