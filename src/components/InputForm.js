const InputForm = ({taskName, setTaskName, taskId, addTask}) => {

    const handleChange = (e) => {
        setTaskName({
            ...taskName,
            id: taskId,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section className="form-container">
            <div className="input">
                <input type="text" name="taskName"required className="input-task" value={taskName.taskName} onChange={handleChange} placeholder="Title..." />
                <input type="text" name="context" required className="deadline-task" value={taskName.context} onChange={handleChange} placeholder="Context..."/>
            </div>
            <button className="add-btn" onClick={addTask}>Add</button>
        </section>
    );
}
 
export default InputForm;