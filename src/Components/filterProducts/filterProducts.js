import { Component } from "react";
import Image from "../image/image";

class FilterProducts extends Component {

    state={
     products:[],
     isSuc:false
    }
   

   

    allCategery=()=> {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((response) => {
            this.setState({
                products:response,
                isSuc:true,
               

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
             products:[],
             products:mensProducts,
             isSuc:true
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
                 products:[],
                 products:womensProducts,
                 isSuc:true
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
                 products:[],
                 products:jewellaryProducts,
                 isSuc:true
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
                 products:[],
                 products:electronicsProducts,
                 isSuc:true
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
            <button onClick={this.allCategery} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",width:"140px"}}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = "black";
                e.target.style.color = "white";
            }}
            
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
            }}
            ><h2 >All Products</h2></button>
            <button onClick={this.mens} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",width:"140px"}}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "black";
                            e.target.style.color = "white";
                        }}
                        
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "black";
                        }}
            ><h2 >Men's </h2></button>
            <button onClick={this.womens} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",width:"140px"}}
                         onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "black";
                            e.target.style.color = "white";
                        }}
                        
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "black";
                        }}
            ><h2 >Women's</h2></button>
            <button onClick={this.jewellary} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",width:"140px"}}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "black";
                            e.target.style.color = "white";
                        }}
                        
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "black";
                        }}
            ><h2 >Jewellary</h2></button>
            <button onClick={this.electronics} style={{borderRadius:"10px",display:"inline",margin:"10px",backgroundColor: "transparent",transition: "background-color 0.1s",width:"140px"}}
                         onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "black";
                            e.target.style.color = "white";
                        }}
                        
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "black";
                        }}
            ><h2 >Electronics</h2></button>
            <hr></hr>
            </div>

       


{/* counting product */}
            {this.state.isSuc && (
    <h2
    style={{position: "fixed", top: "100px",right:"750px", backgroundColor: "white", zIndex: "1000" }}>Total count: {this.state.products.length}</h2>
) }



{/* showing productsto the UI */}

            {
                this.state.isSuc && ( 
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
                }










{/* mens filter */}


       {
        
this.state.isMen && (
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
                )

}

  

  {/* womens filter */}

  {



this.state.isWomen && (
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
) 



  }


       {/* jewellary  */}

       {



this.state.isjwewllary && (
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
)

       }
            


            {/* electronics */}


            {

this.state.isElectronic && (
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
)

            }
            
      

            
            </>
        )
    }
}
export default FilterProducts;