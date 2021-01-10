import React from 'react'
import { Redirect } from 'react-router-dom';
const Color = (props) => {
       const {
        history :{ goBack },
        match :{params},
        Colors: Colors
    }=props;
    const filteredColor = Colors.filter((color)=> color === params.color ).length !== 0
          return (
     <div style={{ backgroundColor: params.color}}>
          <>
     { filteredColor ?
   ( <>
     <h1>THis is {params.color} </h1>
     <h3> Isn't Beautiful ? </h3>
     <h4 onClick={()=>goBack()}  >Go-back</h4>
     </>)
       : <Redirect to='/colors'/>}
      </>
      </div>
    );
  };
export default Color