import React from "react";

class Pizza extends React.Component {



  render() {
 
  return(
    <tr>
      <td>{this.props.obj.topping}</td>
      <td>{this.props.obj.size}</td>
      <td>{this.props.obj.vegetarian ? "yes" :"no"}</td>
      <td><button type="button" className="btn btn-primary" 
                  onClick = {() => this.props.editHandler(this.props.obj)}>Edit Pizza</button></td>
    </tr>
  )
}
}

export default Pizza
