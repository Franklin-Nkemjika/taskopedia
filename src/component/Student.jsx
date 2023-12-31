
export default function Student(props){
   
    return(
      <div className="container p-1">
        <div className="row border">
          <div className="col-2" >
            <img src={props.headShot} alt="images" className="w-100 py-2"></img>
          </div>
          <div className="col-8">
            
            {props.studentName} <br></br>
            Coding Experience {props.programExperience} years
           
          </div>
          <div className="col-2">
            {props.children}
          </div>
  
        </div>
      </div>
      )
    }
