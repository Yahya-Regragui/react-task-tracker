import { useState } from "react"


import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Work interview',
            day: 'Feb 9th at 8:30pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Fix Lapotop',
            day: 'Aug 5th at 2:30pm',
            reminder: true
        },
        {
            id: 4,
            text: 'Send Emails',
            day: 'Feb 28th at 2:30pm',
            reminder: true
        },
        {
            id: 5,
            text: 'Watch Casa Del Papel',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        }
    
])

  // Add Task
  const addTask = (task) => {
    
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])

  }

  // Delete task
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=>
      task.id === id  ? { ...task, reminder:
      !task.reminder } : task 
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}  title={"Task Tracker "}/>
      { showAddTask && <AddTask onAdd={addTask}/>}
      { 
        tasks.length > 0 ? 
          <Tasks
              tasks={tasks} 
              onToggle={toggleReminder} 
              onDelete={deleteTask}/>
               : 'No tasks to show'
      }
    </div>
  );
}

export default App;
