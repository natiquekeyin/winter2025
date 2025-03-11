import { FaAddressBook } from "react-icons/fa";
import { FaAnchor } from "react-icons/fa";
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        <FaAddressBook style={{ color: "green", cursor: "pointer" }} />{" "}
        {task.text}
      </h3>
      <p>
        {task.day} <FaAnchor />
      </p>
    </div>
  );
};
export default Task;
