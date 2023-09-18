import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Card/Card.js";
import CardBody from "../Card/CardBody.js";
import CustomButton from "../custom-button/custom-button.component.jsx";
import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "../../assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle,
};


const useStyles = makeStyles(styles);

export default function Cards({ title, specialization, contactInfo, enquiry }) {
  const classes = useStyles();
  return (
    <Card style={{ width: "18rem" }}>
      <CardBody>
        <h3 className={classes.cardTitle}>Title: {title.toUpperCase()}</h3>
        <h4 className={classes.cardSubtitle}>Specialisation: {specialization}</h4>
        <p>{enquiry}</p>
        
        <CustomButton onClick={(e) => {
          window.location = `mailto:${contactInfo}`; //on click, redirects the Lawyer to contact a client through email
          e.preventDefault();
      }} isCardsItem>
          CONTACT CLIENT
        </CustomButton>
      </CardBody>
    </Card>
  );
}
