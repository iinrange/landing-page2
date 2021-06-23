/** @jsx jsx */
import { jsx, Container, Flex, Button,Text } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Text as='h1' variant='text'> Brow </Text>
          <Flex as='nav' sx={styles.nav}>
            {menuItems.map((menuItem, i)=> (
              <Link
                activeClass="active"
                to={menuItem.path}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                key={i}>
                  {menuItem.label}
              </Link>
            ))}

          </Flex>
          <Button className='donate__btn' variant ='primary' aria-label='Book Now'>
            Book Now
          </Button>
          <MobileDrawer />

        </Container>

      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text_white',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height:'10vh',
    backgroundColor: 'transparent',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.2), 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2), 0%, transparent 100%)',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background_secondary',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 6,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'text_bage',
      },
      '&.active': {
        color: 'text_bage',
      },
    },
  },
};
