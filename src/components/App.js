import React, { Component } from 'react';
import Bear from "./Bear";
// import Image from "./Image";

class App extends Component {
  constructor(props) {
   super(props)
   this.state = {
    header: "Lägg till björn",
    image_url: "",
    edit: false,
    name: "En ny björn",
    type: "Bamsebjörn",
    age: 4,
    description: "En gullig björn",
    _id: ""
   }
  }
  componentDidMount() {
   this.props.fetchAllBears();
   this.props.fetchAllImages();
  }
  componentWillReceiveProps(nextProps) {
   if(nextProps.images.length > 0 && this.state.image_url === "") {
    this.setState({image_url: nextProps.images[0]})
   }
  }

  addNewBear() {
   const {name, type, age, description, image_url} = this.state;
   this.props.addNewBear({name, type, age, description, image_url});
   this.setState({
    header: "",
    image_url: this.props.images[0],
    edit: false,
    name: "",
    type: "",
    age: "",
    description: "",
    _id: ""
   })

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
  };

  // handleHigherChange(stateInstance,stateValue) {
  //   this.setState({
  //    [stateInstance]: stateValue
  //   })
  // }
  //
  // // Higher order component for row
  // firstHigherOrderComponent(stateInstance, stateValue) {
  //  return class extends React.Component {
  //    render() {
  //     return(
  //      <div className="form-group row">
  //        <label htmlFor="example-search-input" className="col-2 col-form-label">Ålder</label>
  //        <div className="col-10">
  //          <input className="form-control" onChange={this.props.handleHigherChange.bind(this,stateInstance,stateValue)} type="number" value={stateValue} />
  //        </div>
  //      </div>
  //     )
  //    }
  //  }
  // }

  render() {
   const {name, type, age, description, header, edit, image_url} = this.state;
   const {bears, images} = this.props;
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
          <label htmlFor="example-email-input" className="col-2 col-form-label">Bild</label>
          <div className="col-10">
            <input className="form-control" onChange={(e) => this.setState({description: e.target.value})} type="text" value={description} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-email-input" className="col-2 col-form-label">Välj bild</label>
          <div className="col-10">
           <select value={image_url} onChange={(e) => this.setState({image_url: e.target.value})} className="custom-select">
            {
             images.length > 0 ?
             images.map((image,i) => <option key={i}>{image}</option>) : null
            }
          </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="example-email-input" className="col-2 col-form-label"></label>
          <div className="col-10">
             <div style={{backgroundImage: `url(${image_url})`}} className="bear-image"></div>
          </div>
        </div>

        {
         edit ? <button className="btn btn-success" onClick={this.updateBear.bind(this)}>Uppdatera björn</button> :
         <button className="btn btn-success" onClick={this.addNewBear.bind(this)}>Lägg till ny björn</button>
        }

        <section className="bear-row">
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
