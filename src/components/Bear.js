import React from "react";

export default class Bear extends React.Component {
 render() {
 const {name,age,description,type, _id} = this.props.bear;
 return(
  <div className="col-4">
    <p>Namn: {name}</p>
    <p>Ålder: {age}</p>
    <p>Ras: {type}</p>
    <p>Beskrivning: {description}</p>
    <p>ID: {_id}</p>
    <button className="btn btn-danger" onClick={this.props.deleteBear.bind(this,_id)}>Radera</button>
    <button className="btn btn-primary" onClick={this.props.setEditMode.bind(this,this.props.bear)}>Redigera</button>
  </div>
 )
 }
}
