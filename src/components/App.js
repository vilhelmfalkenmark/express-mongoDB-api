import React, { Component } from 'react';
import Bear from "./Bear";

class App extends Component {
  constructor() {
   super()
   this.state = {
    header: "Lägg till björn",
    edit: false,
    name: "En ny björn",
    type: "Bamsebjörn",
    age: 4,
    description: "En gullig björn",
    image_url: "",
    _id: ""
   }
  }
  componentDidMount() {
   this.props.fetchAllBears();
  }
  addNewBear() {
   const {name, type, age, description, image_url} = this.state;
   this.props.addNewBear({name, type, age, description, image_url});
  }
  deleteBear(bearID) {
   this.props.deleteBear(bearID);
  }

  updateBear() {
   const {name, type, age, description, image_url,_id} = this.state;
   this.props.updateBear({name, type, age, description, image_url,_id});
   this.setState({
    header: "Lägg till björn",
    edit: false,
   })
  }
  setEditMode(bear) {
   const {name, type, age, description, image_url,_id} = bear;
   this.setState({
    name,
    type,
    age,
    description,
    image_url,
    _id,
    header: "Redigera befintlig björn",
    edit: true
   })
  }
  render() {
   const {name, type, age, description, header, edit} = this.state;
   const {bears} = this.props;
    return (
      <div className="container ">
        <h1 className="app-header">Björnligan</h1>
         <h4>{edit ? `${header}: ${name}` : `${header}`}</h4>
         <div className="form-group row">
         <label htmlFor="example-text-input" className="col-2 col-form-label">Namn</label>
         <div className="col-10">
           <input className="form-control" onChange={(e) => this.setState({name: e.target.value})} type="text" value={name} />
         </div>
       </div>
       <div className="form-group row">
         <label htmlFor="example-search-input" className="col-2 col-form-label">Ålder</label>
         <div className="col-10">
           <input className="form-control" onChange={(e) => this.setState({age: e.target.value})} type="number" value={age} />
         </div>
       </div>
        <div className="form-group row">
          <label htmlFor="example-email-input" className="col-2 col-form-label">Ras</label>
          <div className="col-10">
            <input className="form-control" onChange={(e) => this.setState({type: e.target.value})} type="text" value={type} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-email-input" className="col-2 col-form-label">Beskrivning</label>
          <div className="col-10">
            <input className="form-control" onChange={(e) => this.setState({description: e.target.value})} type="text" value={description} />
          </div>
        </div>
        {
         edit ? <button className="btn btn-success" onClick={this.updateBear.bind(this)}>Uppdatera björn</button> :
         <button className="btn btn-success" onClick={this.addNewBear.bind(this)}>Lägg till ny björn</button>
        }

        <section className="row bear-row">
          {
           bears.map((bear,i) =>
           <Bear
            key={i}
            bear={bear}
            deleteBear={this.deleteBear.bind(this)}
            setEditMode={this.setEditMode.bind(this)}
           />
          )
          }
        </section>
      </div>
    );
  }
}

export default App;
