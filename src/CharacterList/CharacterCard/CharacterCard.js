import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import { characterPropTypes } from "../constants";

import styles from "./styles.module.sass";

const CharacterCard = ({
  name,
  status,
  species,
  type,
  gender,
  location,
  origin,
  image
}) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Grid container spacing={2} wrap="nowrap">
        <Grid item>
          <Avatar alt={name} src={image} className={styles.avatar} />
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <strong>Status: </strong> {status}
          </Typography>
          <Typography variant="body1">
            <strong>Species: </strong> {type ? `${species} - ${type}` : species}
          </Typography>
          <Typography variant="body1">
            <strong>Gender: </strong> {gender}
          </Typography>
          <Typography variant="body1">
            <strong>Origin: </strong> <a href={origin.url}>{origin.name}</a>
          </Typography>
          <Typography variant="body1">
            <strong>Location: </strong>{" "}
            <a href={location.url}>{location.name}</a>
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

CharacterCard.propTypes = characterPropTypes;

export default CharacterCard;
