import { useState } from "react"


import Header from "./components/Header"
import Task from "./components/Task"

function App() {

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

  return (
    <div className="container">
      <Header  title={"Task Title "}/>
      <Task tasks={tasks}/>
    </div>
  );
}

export default App;
