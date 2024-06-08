
import { Component } from "react"

class Image extends Component {
   render() {
    return <img src={this.props.src} height="25%" width="35%" style={{borderRadius:"10%"}}/>;
   }
}
export default Image;