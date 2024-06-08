import { Component } from "react";

class CircleGen extends Component {
    state={
        Circle:[false],
    }
Addcircle = () =>{
    this.setState ({
        Circle:[...this.state.Circle,false]
    })
};
circleClicked = (index) => {
   console.log("clicked",index,this.state.Circle);
   const updatedCircle = [...this.state.Circle];
   updatedCircle[index] = !updatedCircle[index];
   this.setState({
     Circle: updatedCircle,
   })  
};

countRedCircles = () => {
    return this.state.Circle.filter(circle => circle === true).length;
    
};

countBlueCircles = () => {
    return this.state.Circle.filter(circle => circle === false).length;
};

    render() {
        return(
            <>
            <button onClick={this.Addcircle}>Add circle</button>
            <h2 >Total Circle Count : {this.state.Circle.length}</h2>
            <h2>Red Circle Count : {this.countRedCircles()}</h2>
            <h2>Blue Circle Count : {this.countBlueCircles()}</h2>
          
            {
                this.state.Circle.map((eachCircle,index)=>{
                  return(
                    <div 
                    style={{
                        border: "2px solid black",
                        width:100,
                        height:100,
                        borderRadius:"50%",
                        backgroundColor:eachCircle? "red":"blue",
                    }}
                    onClick={()=>this.circleClicked(index)}
                    ></div>
                    
                  )
                  
                })
            }
            
        

            </>
        )
    }
}
export default CircleGen;