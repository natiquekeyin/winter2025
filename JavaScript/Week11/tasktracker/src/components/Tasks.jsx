const tasks = [
  {
    id: 1,
    text: "Doctor's Appointment",
    day: "March 19,2025 at 5:00pm",
    reminder: true,
  },
  {
    id: 2,
    text: "School Appointment",
    day: "March 29,2025 at 5:00pm",
    reminder: false,
  },
  {
    id: 3,
    text: "Grocery Shoppings",
    day: "March 13,2025 at 1:00pm",
    reminder: true,
  },
];

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};
export default Tasks;
