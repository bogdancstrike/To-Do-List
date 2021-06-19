import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDeleteAll }) => {
  return (
    <div>
      <h3 className="deleteAllTasks"> Delete All </h3>
      <div className="deleteAllTasksIcon">
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDeleteAll()}
        />
      </div>
    </div>
  );
};

export default Task;
