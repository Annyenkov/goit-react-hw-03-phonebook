import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "./ContactList.styled";
import ContactListItem from "components/ContactListItem";

const ContactList = ({ contacts, onDeleteContact }) => {

  return (
    <ul>
      {contacts.map(({id, name, number}) => {
        return (
          <ListItem key={id}>
            <ContactListItem
              name={name}
              number={number}
              onDeleteContact={() => onDeleteContact(id)} />
          </ListItem>
        )
      })}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }))
}


export default ContactList;