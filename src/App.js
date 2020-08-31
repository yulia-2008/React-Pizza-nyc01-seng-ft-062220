import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    topping: "",
    size:"",
    vegetarian:""
  }
  
  handleChangeSize=event=> {
        this.setState({...this.state,
                       size: event.target.value})
 }

  handleChangeVeggie = event => { 
    event.target.value === "Vegetarian" ? this.setState({ vegetarian: true }) : this.setState({ vegetarian: false })
  }


 editHandler = (obj) => {
         this.setState ({...this.state,
                         topping: obj.topping,
                         size: obj.size,
                         vegetarian: obj.vegetarian
                        })  
                                      
}

submitHandler = () =>{

     //changing in DOM
  let newArray = [ ...this.state.pizzas] 
  let pizza = this.state.pizzas.find((p)=> { return p.topping === this.state.topping; }); 
  let pizzaId = pizza.id
  pizza.topping = this.state.topping
  pizza.size = this.state.size
  pizza.vegetarian = this.state.vegetarian

  this.setState({...this.state,
                pizza: newArray
               })  

        //changing in DB
  let options=  { method: "PATCH",
  headers: {"Content-Type": "application/json",
  Accept: "application/json"
          },
  body: JSON.stringify({size: this.state.size, vegetarian: this.state.vegetarian})
  }
         fetch("http://www.localhost:8000/pizzas/"+ pizzaId, options )
        .then(response => response.json())
  
}

               

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm topping = {this.state.topping}
                   size = {this.state.size}
                   vegetarian = {this.state.vegetarian}
                   submitHandler = {this.submitHandler}
                   handleChangeSize={this.handleChangeSize}
                   handleChangeVeggie = {this.handleChangeVeggie}                   
                   />
        <PizzaList pizzas = {this.state.pizzas}
                   editHandler = {this.editHandler}/>
      </Fragment>
    );
  }

  componentDidMount(){ 
  
    fetch("http://www.localhost:8000/pizzas"  )
  .then(response => response.json())
  .then(response => {
       this.setState({ pizzas: response 
                     })
       })
  }
  
}

export default App;
