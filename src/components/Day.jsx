import { useState } from "react"
import Appointments from "./Appointments"

const Day = (props) => {
  const [appointments, setAppointments] = useState([])

  const addAppointment = () => {
    const name = prompt('Informe o nome do compromisso:')
    const newApponintment = {
      id: Math.floor(1000000 * (Math.random() + 1)),
      name,
      done: false
    }
    setAppointments(currentState => [...currentState, newApponintment])
  }

  const toggleDone = (appointmentId) => {
    setAppointments(currentState => (
      currentState.map(appointment => {
        if(appointment.id !== appointmentId) {
          return appointment
        } else {
          return {...appointment, done:!appointment.done}
        }
      })
    ))
  }

  const removeAppointments = (appointmentId) => {
    setAppointments(currentState => (
      currentState.filter(appointment => appointment.id !== appointmentId)
    ))
  }

  return (
    <div className="day">
        <h2>{props.day}</h2>
        <ul>
          {appointments.map(appointment => (
            <Appointments 
              key={appointment.id}
              appointment={appointment}
              toggleDone={toggleDone}
              removeAppointments={removeAppointments}
            />
          ))}
        </ul>
        
        <button onClick={addAppointment}>Adicionar</button>
      </div>
  )
}

export default Day