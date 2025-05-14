import { useEffect, useState } from 'react';
import { AppBar, Button, Container, IconButton, Toolbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Menu() {
  const [scrollY, setScrollY] = useState<number>(0); // Explicitly typed as number
  const [showLoginButton, setShowLoginButton] = useState<boolean>(false);
  const [showLogoutButton, setShowLogoutButton] = useState<boolean>(false);
  const [balance, setBalance] = useState(null);
  const [showBalance, setShowBalance] = useState<boolean>(false);

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

  useEffect(() => {
    const getCookie = (name: string): string | null => {
      const match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
      );
      return match ? decodeURIComponent(match[2]) : null;
    };
  
    const checkCookiesAndFetch = async () => {
      const userInfo = getCookie("userinfo");
      const accessToken = getCookie("access_token");
  
      if (userInfo && accessToken) {
        await getBalance();
      } else {
        setShowLoginButton(true);
        setShowLogoutButton(false);
        setShowBalance(false);
      }
    };
  
    checkCookiesAndFetch();
  }, []);

  const handleLogin = () => {
    window.lmLogin?.({
      onSuccess: async () => {
        await getBalance();
      },
      onError: (error) => {
        alert('Login error.');
        console.log({LoginError: error});
      }
    });
  }

  const handleLogout = () => window.lmLogout?.();

  async function getBalance() {
    try {
      if (!window.lmFetchWrapper) throw new Error("lmFetchWrapper is not defined");
      const response = await window.lmFetchWrapper('lmBalance');
      if (response && response.ok) {
        const data = await response.json();
        const lmSummary = data?.summarization?.find((item: { type: string; amount?: number }) => item.type === 'LM');
        const balance = lmSummary?.amount || 0;
        setBalance(balance.toLocaleString());
        setShowBalance(true);
        setShowLogoutButton(true);
        setShowLoginButton(false);
      } else {
        handleLogin();
      }
    } catch (error) {
      console.log({ getBalanceError: error });
      handleLogin();
    }
  }

  return (
    <AppBar sx={appBarStyle} position="sticky">
      <Toolbar>
        <Container maxWidth="lg" sx={{ padding: '0rem !important' }}>
          {showLoginButton && <Button onClick={() => handleLogin()}>Login</Button>}
          {showBalance && <Button disabled color="inherit">Balance: {balance} miles</Button>}
          {showLogoutButton && <Button onClick={() => handleLogout()}>Logout</Button>}
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
