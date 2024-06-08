

import React from "react"


function Hello(){
  const isSubscibed=false

  const employees=[
    {
      teamName:"SRH",
      players:["a","b"],
      trophy:[2016],
      id:1
      
    },
    {
      teamName:"Mumbai",
      players:["a","b"],
      trophy:[2016],
      id:2
    },
   
  ]


  return(
    <>

    {
      employees.map((eachEmployee,index)=>{
        const{id,players,teamName,trophy} =eachEmployee
                return(
          <React.Fragment key={id} >
            <h2>{index}</h2>
            <h3>{teamName}</h3>
            <h3>{players[0]}</h3>
          </React.Fragment>
        )
      })
    }
    
     

    </>
  )

}

export default Hello









// Component : Component is a piece of reusable and independent bits of code 
// which is responsible for creating the User interface

// Every components will return  the mark up lang
// component must always start with capital 

// 2 types of component
// 1. class based components
// 2. Functional based components -> most preffered

// Functional based components : This is simply created using normal js functions