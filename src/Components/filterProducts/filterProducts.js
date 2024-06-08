import { Component } from "react";
import Image from "../image/image";
import ListComponent from "../list/list";

class FilterProducts extends Component {

    state={
     products:[],
     isSuc:false
    }
    state={
        mensProduct:[],
        isMen:false
    }

    state={
        womensProduct:[],
        isWomen:false
    }

    state={
        jewellaryProduct:[],
        isjwewllary:false
    }


    state = {

        electronicsProduct:[],
        isElectronic:false
    }
    

    allCategery=()=> {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((response) => {
            this.setState({
                products:response,
                isSuc:true,
                isWomen:false,
                isMen:false,
                isElectronic:false,
                isjwewllary:false,

            }
            
            )
        });  
    }

//mens filter

mens = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((response) => {

        const mensProducts = response.filter((product) => product.category === "men's clothing");
        if (mensProducts.length > 0) {
          this.setState({
            isSuc:false,
            isWomen:false,
            isjwewllary:false,
            isElectronic:false,
            mensProduct: mensProducts, 
            isMen: true
          });
        }
        
    });      
}




//womens filter


womens = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((response) => {

        const womensProducts = response.filter((product) => product.category === "women's clothing");
        if (womensProducts.length > 0) {
          this.setState({
            isSuc:false,
            isMen:false,
            isjwewllary:false,
            isElectronic:false,
            womensProduct:womensProducts, 
            isWomen: true
          });
        }
        
    });      
}





jewellary = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((response) => {

        const jewellaryProducts = response.filter((product) => product.category === "jewelery");
        if (jewellaryProducts.length > 0) {
          this.setState({
            isSuc:false,
            isMen:false,
            isWomen:false,
            isElectronic:false,
            jewellaryProduct:jewellaryProducts, 
            isjwewllary:true,
          }, () => {
            console.log(this.state.jewellaryProduct);
          });
        }
        
    });      
}




electronics = () => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((response) => {

        const electronicsProducts = response.filter((product) => product.category === "electronics");
        if (electronicsProducts.length > 0) {
          this.setState({
            isSuc:false,
            isMen:false,
           isWomen:false,
           isjwewllary:false,
        electronicsProduct:electronicsProducts, 
            isElectronic:true
          }, () => {
            console.log(this.state.electronicsProduct);
          });
        }
        
    });      
}


    render() {
        return(
            <>
            <div  style={{ position: "sticky", top: "0", backgroundColor: "white", zIndex: "1000" }}>
            <button onClick={this.allCategery} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",}}
            onMouseEnter={(e) => e.target.style.backgroundColor = "pink"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            ><h2 >Click to show all products</h2></button>
            <button onClick={this.mens} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",}}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "pink"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            ><h2 >Men's</h2></button>
            <button onClick={this.womens} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",}}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "pink"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            ><h2 >Women's</h2></button>
            <button onClick={this.jewellary} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",}}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "pink"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            ><h2 >Jewellary</h2></button>
            <button onClick={this.electronics} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",}}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "pink"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            ><h2 >Electronics</h2></button>
            <hr></hr>
            </div>







            {
                this.state.isSuc ? (
                this.state.products.map((eachProduct)=>{
                  return (
                    <>
                    
                    <div style={{width:"300px",borderRadius:"20%",border:"4px solid gray",margin:"10px"}}>
                    <center>
                     <h1>id : {eachProduct["id"]}</h1>
                     <Image src={eachProduct.image}/>
                     <h2>Price : {eachProduct["price"]}</h2>
                     <h3>category : {eachProduct["category"]}</h3>
                     <h5>description : {eachProduct["description"]}</h5>
                     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Buy Now</button>
                     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Add to Cart</button>
                     </center>
                     </div>
                     
                    
                    </>


                  )

                }))
                : (
                <h1></h1>
            )}










{/* mens filter */}


       {


this.state.isMen ? (
                    this.state.mensProduct.map((eachProduct) => {
                        return (
                            <div style={{width:"300px",borderRadius:"20%",border:"4px solid gray",margin:"10px"}}>
                    <center>
                     <h1>id : {eachProduct["id"]}</h1>
                     <Image src={eachProduct.image}/>
                     <h2>Price : {eachProduct["price"]}</h2>
                     <h3>category : {eachProduct["category"]}</h3>
                     <h5>description : {eachProduct["description"]}</h5>
                     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Buy Now</button>
                     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Add to Cart</button>
                     </center>
                     </div>
                           
                        )
                    })
                ) : (
                <h1></h1>
            )

}

  

  {/* womens filter */}

  {



this.state.isWomen ? (
    this.state.womensProduct.map((eachProduct) => {
        return (
            <div style={{width:"300px",borderRadius:"20%",border:"4px solid gray",margin:"10px"}}>
    <center>
     <h1>id : {eachProduct["id"]}</h1>
     <Image src={eachProduct.image}/>
     <h2>Price : {eachProduct["price"]}</h2>
     <h3>category : {eachProduct["category"]}</h3>
     <h5>description : {eachProduct["description"]}</h5>
     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Buy Now</button>
     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Add to Cart</button>
     </center>
     </div>
           
        )
    })
) : (
<h1></h1>
)



  }


       {/* jewellary  */}

       {



this.state.isjwewllary ? (
    this.state.jewellaryProduct.map((eachProduct) => {
        return (
            <div style={{width:"300px",borderRadius:"20%",border:"4px solid gray",margin:"10px"}}>
    <center>
     <h1>id : {eachProduct["id"]}</h1>
     <Image src={eachProduct.image}/>
     <h2>Price : {eachProduct["price"]}</h2>
     <h3>category : {eachProduct["category"]}</h3>
     <h5>description : {eachProduct["description"]}</h5>
     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Buy Now</button>
     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Add to Cart</button>
     </center>
     </div>
           
        )
    })
) : (
<h1></h1>
)

       }
            


            {/* electronics */}


            {

this.state.isElectronic ? (
    this.state.electronicsProduct.map((eachProduct) => {
        return (
            <div style={{width:"300px",borderRadius:"20%",border:"4px solid gray",margin:"10px"}}>
    <center>
     <h1>id : {eachProduct["id"]}</h1>
     <Image src={eachProduct.image}/>
     <h2>Price : {eachProduct["price"]}</h2>
     <h3>category : {eachProduct["category"]}</h3>
     <h5>description : {eachProduct["description"]}</h5>
     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Buy Now</button>
     <button style={{margin:"10px",backgroundColor:"black",color:"white",width:"100px",height:"25px",borderRadius:"10px"}}>Add to Cart</button>
     </center>
     </div>
           
        )
    })
) : (
<h1></h1>
) 

            }
            
      

            
            </>
        )
    }
}
export default FilterProducts;