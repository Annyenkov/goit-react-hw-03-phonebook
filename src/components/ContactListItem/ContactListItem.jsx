import React from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "./ContactListItem.styled";

const ConatctListItem = ({name, number, onDeleteContact}) => {
  return (
    <>
      <Icon></Icon>
      <span>{name}:</span>
      <span>{number}</span>
      <Button
        onClick={onDeleteContact}
      >Delete</Button>
    </>
  )
}

ConatctListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ConatctListItem;