import { useLocation } from 'react-router-dom'

let form = {
  margin : "250px"
}

export default function IdData() {
  
const location = useLocation()

  return (
    <div className='container'>
      <div>
            <ul className="list-group" style={form}>
            <li className="list-group-item">{location.state.data.id}</li>
            <li className="list-group-item">{location.state.data.name}</li>
            <li className="list-group-item">{location.state.data.name_limited}</li>
            <li className="list-group-item">{location.state.data.nasa_jpl_url}</li>
            <li className="list-group-item">{location.state.data.designation}</li>
          </ul>
      </div>
    </div>   

    )
}
