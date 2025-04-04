import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      if (res.status === 404) {
        setError("Task not found");
      }

      const data = await res.json();
      setTask(data);
      setLoading(false);
    };

    fetchTask();

    if (error) {
      navigate("/");
    }
  });

  return loading ? (
    <h3>Loading....</h3>
  ) : (
    <div className="task">
      <h6>{pathname}</h6>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button
        text="Go Back"
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};
export default TaskDetails;
