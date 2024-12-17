import { useEffect, useState } from 'react';
import { AppBar, Button, Container, IconButton, Toolbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Menu() {
  const [scrollY, setScrollY] = useState<number>(0); // Explicitly typed as number

  const appBarStyle: React.CSSProperties = {
    backgroundColor: scrollY > 100 ? '#121212' : 'rgba(0, 0, 0, 0.6)',
    transition: 'background-color 0.3s ease-in-out',
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <AppBar sx={appBarStyle} position="sticky">
      <Toolbar>
        <Container maxWidth="lg" sx={{ padding: '0rem !important' }}>
          <Button disabled color="inherit">Developer info: </Button>
          <IconButton
            sx={{
              ml: '0.5rem',
              mr: '1rem',
              backgroundColor: 'rgb(0,0,0,0.3)'
            }}
            onClick={() => window.open('https://www.linkedin.com/in/herbert-ayala37/', '_blank')}
            aria-label='LinkedIn'
            size='small'
            color='secondary'
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{
              mr: '1rem',
              backgroundColor: 'rgb(0,0,0,0.3)'
            }}
            onClick={() => window.open('https://github.com/Herbert37', '_blank')}
            aria-label='GitHub'
            size='small'
            color='secondary'
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: 'rgb(0,0,0,0.3)'
            }}
            onClick={() => window.open('https://www.instagram.com/herbert37_/', '_blank')}
            aria-label='Instagram'
            size='small'
            color='secondary'
          >
            <InstagramIcon />
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
