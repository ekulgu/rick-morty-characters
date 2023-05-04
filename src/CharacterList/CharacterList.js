import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import CharacterCard from "./CharacterCard";

const RequestStatus = {
  INACTIVE: "INACTIVE",
  REQUESTING: "REQUESTING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};

const CharacterList = () => {
  const [requestStatus, setRequestStatus] = useState(RequestStatus.INACTIVE);
  const [characterList, setCharacterList] = useState([]);
  const [requestError, setRequestError] = useState("");
  const [page, setPage] = useState(0);
  const [info, setInfo] = useState();

  useEffect(() => {
    if (requestStatus === RequestStatus.INACTIVE) {
      setRequestStatus(RequestStatus.REQUESTING);
      const url = `https://rickandmortyapi.com/api/character/`;
      axios
        .get(url)
        .then((res) => {
          setCharacterList(res.data.results);
          setInfo(res.data.info);
          setRequestStatus(RequestStatus.SUCCESS);
        })
        .catch((err) => {
          setRequestError(err.message);
          setRequestStatus(RequestStatus.FAILURE);
        });
    }
  }, [requestStatus, setRequestStatus]);

  const pageHandler = () => {};

  return (
    <Container maxWidth="lg">
      <Box p={4}>
        <Typography variant="h1" gutterBottom>
          Rick and Morty Characters
        </Typography>
      </Box>
      <Grid container spacing={2} justify="center">
        {requestStatus === RequestStatus.REQUESTING && (
          <Grid item>
            <CircularProgress />
          </Grid>
        )}
        {requestStatus === RequestStatus.SUCCESS &&
          characterList.map((character) => (
            <Grid item key={character.id} xs={12} md={6}>
              <CharacterCard {...character} />
            </Grid>
          ))}

        <button
          type="button"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
        {requestStatus === RequestStatus.FAILURE && (
          <Grid item>
            <Typography color="error">
              Could not fetch Characters: {requestError}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default CharacterList;
