import React, { Component } from "react";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

// function ListContacts(this.props) {
//   return (

//   );
// }

class ListContacts extends Component {
  state = {
    query: "",
  };
  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  };
  render() {
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search
            Contacts"
            value={this.state.query}
            onChange={(e) => this.updateQuery(e.target.value)}
          ></input>
        </div>

        <ol className="contact-list">
          {this.props.contacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`,
                }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button
                onClick={() => this.props.onDeleteContact(contact)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ListContacts;
