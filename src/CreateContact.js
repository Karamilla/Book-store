import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

class CreateContact extends Component {
  HandleSubmit = (e) => {
    e.preventDefault();
    const value = serializeForm(e.target, { hash: true });
    this.props.onCreateContact(value);
  };

  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/"></Link>
        <form onSubmit={this.HandleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarUrl"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name"></input>
            <input type="text" name="email" placeholder="Email"></input>
            <button>ADD CONTACT</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
