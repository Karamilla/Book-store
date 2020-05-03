import React, { Component } from "react";
import PropTypes from "prop-types";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import { Link } from "react-router-dom";

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
    const { contacts, onDeleteContact, onNavigate } = this.props;
    const { query } = this.state;

    let showingContacts;
    if (query) {
      const match = new RegExp(escapeRegExp(query), "i");
      showingContacts = contacts.filter((contact) => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }

    showingContacts.sort(sortBy("name"));

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search
            Contacts"
            value={query}
            onChange={(e) => this.updateQuery(e.target.value)}
          ></input>

          <Link to="/create" className="add-contact">
            Add Contact
          </Link>
        </div>

        <ol className="contact-list">
          {showingContacts.map((contact) => (
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
                onClick={() => onDeleteContact(contact)}
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
