import './App.css';
import InputForm from './components/InputForm';
import TaskLists from './components/TaskLists';
import {useState} from 'react'
import TaskDone from './components/TaskDone';

function App() {
    const [taskId, setTaskId] = useState(0)
    const [task, setTask] = useState({
        id: 0,
        taskName: '',
        context: ''
    })
    const [taskList, setTaskList] = useState([])
    const [taskListDone, setTaskListDone] = useState([])

    const addTask = () => {
        
        setTaskList([...taskList, task])
        setTaskId(taskId+1)
        setTask({
            taskName: '',
            context: ''
        })
        console.log(taskList)
    }

    const deleteTask = (e) => {
        const index = e.target.parentElement.parentElement.parentElement.parentElement.id
        const newTask = taskList.filter((el) => el.id != index)
        setTaskList(newTask)
    }

    const deleteTaskDone = (e) => {
        const index = e.target.parentElement.parentElement.parentElement.parentElement.id
        const newTask = taskListDone.filter((el) => el.id != index)
        setTaskListDone(newTask)
    }


    const doneTask = (e) => {
        const index = e.target.parentElement.parentElement.id
        const deleteDone = taskList.filter((el) => el.id != index)
        const editTask = taskList.filter(el => el.id == index)
        setTaskList(deleteDone)
        setTaskListDone([...taskListDone, {
            id: editTask[0].id,
            taskName: editTask[0].taskName,
            context: editTask[0].context
        }])
        console.log(taskListDone)
    }
    
    const workingTask = (e) => {
        const index = e.target.parentElement.parentElement.id
        const editTask = taskListDone.filter(el => el.id == index)
        const cancelDone = taskListDone.filter((el) => el.id != index)
        setTaskList([...taskList, {
            id: editTask[0].id,
            taskName: editTask[0].taskName,
            context: editTask[0].context
        }])
        setTaskListDone(cancelDone)
        console.log(editTask)
    }

    const getDate = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur','Fri', 'Sat']
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ]

        const day = new Date().getDay()
        const date = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()

        return `${days[day]}, ${date} ${months[month]} ${year}`
    }

    const greeting = () => {
        let greetingStr = ''
        const time = new Date().getHours() ;
        if(time.toString() === '00' || time.toString() <= '12') {
            greetingStr = 'Good Morning'
        }
        else if(time.toString() === '12' || time.toString() < '15') {
            greetingStr = 'Good Afternoon'
        }
        else if(time.toString() === '15' || time.toString() < 18) {
            greetingStr = 'How Was Your Day?'
        }
        else if(time.toString() === '18' || time.toString() < '22') {
            greetingStr = 'Good Evening'
        }
        else if(time.toString() === '22' || time.toString() <= '23') {
            greetingStr = 'Good Night 🌙'
        }
        return greetingStr
    }

    return (
        <div className="App">
            <section className="welcome">
                <div className="wrlcome-title">
                    <h1>My Todo List</h1>
                    <div className="greetings">
                        <p className="greeting">{greeting()}</p>
                        <p className="today-date">{getDate()}</p>
                    </div>
                </div>
                <p>react</p>
                <InputForm 
                    taskName={task} 
                    setTaskName={setTask} 
                    taskId={taskId}
                    addTask={addTask}
                />
            </section>

            <div className="task-lists">
                <h2>Todo Lists</h2>
                <section className="working">
                    <h3>working on it</h3>
                    <ul>
                        {
                            taskList.length === 0 ?
                            <p className='done-status'>Yeay!! Everything is Done 🎉</p> :
                            taskList.map(task => (
                                <TaskLists 
                                    taskName={task.taskName} 
                                    context={task.context} 
                                    key={task.id} 
                                    id={task.id}
                                    deleteTask={deleteTask}
                                    doneTask={doneTask}
                                />
                        ))}
                    </ul>
                </section>
                <section className="done">
                    <h3>done</h3>
                    <ul>
                        {
                            taskListDone.length === 0 ?
                            <p className='done-status'>Nothing is Done Yet 😕</p> :
                            taskListDone.map(task => (
                                <TaskDone 
                                    taskName={task.taskName} 
                                    context={task.context} 
                                    key={task.id} 
                                    id={task.id}
                                    deleteTaskDone={deleteTaskDone}
                                    workingTask={workingTask}
                                />
                            )
                        )}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default App;
