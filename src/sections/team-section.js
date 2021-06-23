/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';

import {teamsec} from '../data/teamsec'

export default function TeamSection() {
  return (
    <section id='about' sx={{variant: 'section.pricing'}}>
      <Container >
        <SectionHeader
          slogan='our team'
          title=''
        />
          <Grid sx={styles.grid} sx={{display:'flex',justifyContent:'space-around'}}>
            {teamsec.map((item)=> (
              <TeamCard
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
                title={item.title}
                designation={item.designation}
                social={item.socialProfile}              
              />
            ))}
            <Box sx={{minWidth:'600px'}}>
              <Text as='h1'sx={{fontSize:'3rem', maxWidth:'700px'}}>
              Hi there! My name is Raquel and I'm so glad you are here!
              </Text>
              <Text as='p'sx={{fontSize:'1.5rem', maxWidth:'700px'}}>
              In 2016, I discovered microblading and I quickly realized that having the correct eyebrow shape and fullness to compliment my facial features helped me feel more beautiful and confident. My fascination with permanent make-up quickly grew into a passion, and I decided to join the profession myself and leave my dental hygiene career of 6 years.
<br/><br/>Fast forward 4 years, and now I get to spend most of my days working with other badass women creating the brows and eyeliners of their dreams. My goal is to create a personalized experience and brow art that is special and unique for each person to help boost their confidence, beauty, and simplify their daily routines. 
              </Text>
            </Box>
          </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    mb:'-100px',
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
