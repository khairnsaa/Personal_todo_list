import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskLists = ({taskName, context, id, deleteTask, doneTask}) => {
    return (
        <li id={id}>
            <div className="name-deadline">
                <p className="task-name">{taskName}</p>
                <p>{context}</p>
            </div>
            <div className="task-cta">
                <button onClick={deleteTask}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={doneTask}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            </div>
        </li>
    );
}
 
export default TaskLists;