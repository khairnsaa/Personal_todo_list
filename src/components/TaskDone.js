import {  faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDone = ({taskName, context, id, deleteTaskDone, workingTask}) => {
    return (
        <li id={id}>
            <div className="name-deadline">
                <p className="task-name">{taskName}</p>
                <p>{context}</p>
            </div>
            <div className="task-cta">
                <button onClick={deleteTaskDone}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button onClick={workingTask}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </li>
    );
}
 
export default TaskDone;