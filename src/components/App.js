import React, { Component } from 'react';
class App extends Component {
  constructor() {
   super()
   this.state = {
    name: "",
    rase: "",
    age: ""
   }
  }
  componentDidMount() {
   this.props.fetchAllBears();
  }
  render() {
   const {name, rase, age} = this.state;
    return (
      <div className="container ">
        <h1 className="App-header">Björnligan</h1>
        <form>
         <h4>Lägg till björn</h4>
         <div className="form-group row">
         <label htmlFor="example-text-input" className="col-2 col-form-label">Namn</label>
         <div className="col-10">
           <input className="form-control" type="text" value={name} />
         </div>
       </div>
       <div className="form-group row">
         <label htmlFor="example-search-input" className="col-2 col-form-label">Ålder</label>
         <div className="col-10">
           <input className="form-control" type="search" value={age} />
         </div>
       </div>
        <div className="form-group row">
          <label htmlFor="example-email-input" className="col-2 col-form-label">Ras</label>
          <div className="col-10">
            <input className="form-control" type="email" value={rase} />
          </div>
        </div>
        </form>

      </div>
    );
  }
}

export default App;
