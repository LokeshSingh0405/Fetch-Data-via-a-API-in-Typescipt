import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


let style = {
    margin: "5px",
    font: "bold"
  }
type apiData = {
    id:string;
    name:string;
    nasa_jpl_url:string;
    designation:number;
}



export default function Home() {
    
    const [data, setData] = useState<apiData[] | null >(null)
    const [random_data, setRandom] = useState<apiData | null>(null)
    const [value, setvalue] = useState< string >("")
    const navigate = useNavigate()

    const showData = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setvalue(e.target.value);
                    
    }

    const onRandomSub = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    if(data){
        const output = Math.floor(Math.random()*data.length)
        setRandom(data[output])
    }
    else alert("Something went wrong...");
}

    const onSubmission = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        
        // const resultArr = data?.filter((e) => {return e.id === +value})
        if(data){
            for (let index = 0; index < data.length; index++) {
                if(value === data[index].id){
                    navigate("IdData" , {state: {data : data[index]}})       
                }
                
        }
    }
    else alert("ID is Mandatory !!! ")
    }

    useEffect(() => {
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=iWfQgU9tIgqS1uksbCvdjAvfe10BJHiUmF0UMBYd')
        .then((response) => response.json())
        .then((data) => setData(data.near_earth_objects))
    },[])

  return (
    <div style={{ width :'100%'}} className = "container">
    <div style={{ width :'5%'}}>
        <div className="mb-3" >
        <div style={{display : "flex"}}>
                  
        <label htmlFor="exampleInputEmail1" className="form-label" style={style}>
            ID:- 
        </label>
        
        <input
            type="text"
            className ="mt-1 " 
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={showData}
        />
        </div>
      </div>
    </div>
  <form >
    <button type="submit" className  = {"btn btn-primary"}  onClick={(e)=>onSubmission(e)}> 
       Submit 
    </button> 
    <div>&nbsp;</div> 
    <button type="submit" className ="btn btn-dark" onClick={(e)=> onRandomSub(e)}>
      Random Asteroid
    </button>
  </form>
  <div>
    &nbsp;
  </div>
    
  
  <div>{
    random_data &&
    <ul className ="container">
      <li > Id:{random_data.id}</li>
      <li > Name: {random_data.name}</li>
      <li >Designation{random_data.designation}</li>
      <li >Alternate Name :{random_data.nasa_jpl_url}</li>
  </ul>}
  </div>
  
</div>
  )
}
