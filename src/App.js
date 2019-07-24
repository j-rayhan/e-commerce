import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Button, CircularProgress, Typography, Fade } from '@material-ui/core';
//
import Products from './components/Products';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch('http://localhost:8080/products').then(res => res.json());
        setProducts(data);
      } catch (error) {
        console.error('fetch error', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log('PRINT IN %s=====>', 'App', products);
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <div className={classes.placeholder}>
                {!loading ? (
                  <Products products={products} />
                ) : (
                    <CircularProgress />
                  )}
              </div>
              <Button onClick={() => setLoading(!loading)} className={classes.button}>
                {loading ? 'Reset' : 'Simulate a load'}
              </Button>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Button variant="contained" color="primary">
                Hello World 2
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
