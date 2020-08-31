import React from "react"

class PizzaForm extends React.Component {
  // state={
  //   size:"",
  //   vegetarian:""
   
  // }
//console.log(this.state)
  // handleChangeTopping=event=> { this.setState({...this.state,
  //                                             topping: event.target.value                                          
  //                                           } )
  // }                                              


  render(){ 
  return( 
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder = "Pizza Topping"
                   value={this.props.topping} 
                  // onChange={event => this.handleChangeTopping(event) }
                  
                   />
        </div>
        <div className="col">
          <select value={this.props.size} className="form-control" 
                  onChange={event => this.props.handleChangeSize(event)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.props.vegetarian ? true : false}
                    onChange={event => this.props.handleChangeVeggie(event)} />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={this.props.vegetarian ? false : true}
                    onChange={event => this.props.handleChangeVeggie(event)} />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.submitHandler}>Submit</button>
        </div>
      </div>

  )
 }
}


export default PizzaForm
