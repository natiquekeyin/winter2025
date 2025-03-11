// These components inside topics are only for new topic discussion and dont have direct realation with our project Task Tracker...

const users = [
  {
    name: "Alan Smith",
    email: "alan@gmail.com",
  },
  { name: "Bob Smith", email: "bob@gmail.com" },
  { name: "Christina Todor", email: "christina@gmail.com" },
];

const Users = () => {
  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
        </div>
      ))}
    </>
  );
};
export default Users;
