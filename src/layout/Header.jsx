import React from "react";
import Photo2 from "../Images/logo512.png";

function MainHeader(){
    return(
      <div className="pt-2 py-1 pl-2 mainHeaderStyle" >
        <img src={Photo2} alt="logo" className="logoStyle" ></img>
        <span className="h2 pt-4 text-white-50">REACT COURSE - TaskOPedia</span>
      </div>
     
    );
  }
  function SubHeader(){
    return(
        <p className="subHeaderStyle text-center">This will be an exciting course.</p>
    )
  }

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <MainHeader></MainHeader>
                <SubHeader></SubHeader>
            </div>
            

        );
    }
} 