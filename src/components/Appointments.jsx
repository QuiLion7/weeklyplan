
const Appointments = (props) => {
  return (
    <li className={props.appointment.done ? 'done' : ''}>
      <div>
        <input 
          type="checkbox" 
          id={`appointment-${props.appointment.id}`}
          onChange={() => props.toggleDone(props.appointment.id)}
          checked={props.appointment.done}
        />
        <label htmlFor="checkbox">
          {props.appointment.name}
          </label>
      </div>
      <button 
      onClick={() => props.removeAppointments(props.appointment.id)}
      >
        Remover
      </button>
    </li>
  )
}

export default Appointments