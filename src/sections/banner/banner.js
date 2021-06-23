/** @jsx jsx */
import {Link} from 'react-router-dom'


import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';

import styles from './styles'


export default function Banner() {
  return (
    <section sx={styles.banner} id="home"> 
      <Container sx={styles.banner.container} >
        <Box sx={styles.banner.contentBox} bg={BannerImg}>
          <Heading  as='h1' variant='heroPrimary'>
            Microblader. Educator. Artist
          </Heading>
          
            {/* <Button sx={styles.button} variant='primary'>Book now </Button> */}
        </Box>
      </Container>

    </section>
  );
}

