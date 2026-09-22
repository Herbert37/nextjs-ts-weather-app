import React, { useEffect } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";

const Silent: React.FC = () => {
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   if (window.opener) {
  //     window.opener.postMessage(
  //       { type: "lm-login-redirect", url: window.location.href }
  //     );
  //   }
  // }, []);

  useEffect(() => {
    console.log(
      "Vista Login Keycloak. Simulando login exitoso y redireccionando a Silent Callback",
    );
    setTimeout(() => {
      window.location.href = "/silentcallback";
    }, 2000);
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Vista Silent...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Silent;
