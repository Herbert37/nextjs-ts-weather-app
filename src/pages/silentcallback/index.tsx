import React, { useEffect } from "react";
import { Container, Grid, Typography, Paper } from "@mui/material";

const SilentCallback: React.FC = () => {
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   if (window.opener) {
  //     window.opener.postMessage(
  //       { type: "lm-login-redirect", url: window.location.href }
  //     );
  //   }
  // }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    console.log("SilentCallback: creando cookies...");
    // Crear cookies userinfo, access_token, refresh_token, id_token con valores dummy
    document.cookie = "userinfo=dummy_userinfo; path=/";
    document.cookie = "access_token=dummy_access_token; path=/";
    document.cookie = "refresh_token=dummy_refresh_token; path=/";
    document.cookie = "id_token=dummy_id_token; path=/";
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Silent Callback - Loading...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SilentCallback;
