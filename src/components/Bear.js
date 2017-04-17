import React from "react";

export default class Bear extends React.Component {
 render() {
 const {name,age,description,type, _id, image_url} = this.props.bear;
 return(
  <div className="bear-column">
    <div className="bear-profile-image" style={{backgroundImage: `url(${image_url})`}}></div>
    <h6>Namn: {name}</h6>
    <h6>Ålder: {age}</h6>
    <h6>Ras: {type}</h6>
    <p>Beskrivning: {description}</p>
    <button className="btn btn-danger" onClick={this.props.deleteBear.bind(this,_id)}>Radera</button>
    <button className="btn btn-primary" onClick={this.props.setEditMode.bind(this,this.props.bear)}>Redigera</button>
  </div>
 )
 }
}
