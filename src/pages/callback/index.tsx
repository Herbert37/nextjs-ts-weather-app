import React, { useEffect } from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';

const Callback: React.FC = () => {

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const waitForLogin = setInterval(() => {
        if (typeof window.lmCompleteLogin === "function") {
          //if (window.__LM_DEBUG__) {
          console.log(
            "[callback.html] lmCompleteLogin detectado. Ejecutando..."
          );
          //}
          window.lmCompleteLogin();
          clearInterval(waitForLogin);
        } else {
          //if (window.__LM_DEBUG__) {
          console.log("[callback.html] lmCompleteLogin aún no disponible...");
          //}
        }
      }, 100);
    });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Loading...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Callback;