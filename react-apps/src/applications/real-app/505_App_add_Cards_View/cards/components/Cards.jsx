import Card from './card/Card';
import { Grid } from '@mui/material';
import { getCards } from '../services/cardService';
import { useEffect, useState } from 'react';

function Cards() {
  const [cards, setCards] = useState();

  useEffect(() => {
    async function fetchedCards() {
      const loadedCards = await getCards();
      console.log(loadedCards);
      setCards(loadedCards);
    }

    fetchedCards();
  }, []);

  if (!cards) {
    return <div>Loading</div>;
  }

  return (
    <Grid container spacing={2} mt={2}>
      {cards.map((card) => {
        return (
          <Grid key={card._id} item xs={12} sm={6} md={4} lg={3}>
            <Card card={card} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Cards;
