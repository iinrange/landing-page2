/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';


import styles from './styles'
import data from './data'


export default function KeyFeature() {
  return (
   <section sx={{variant:'section.keyFeature'}} id="services" >
     <Container>
       <SectionHeader 
        slogan="what a service"
        title="Know My Amazing Services"
        />
        <Grid
        sx={styles.grid}>
          {data.map((item)=>(
            <FeatureCardColumn
              title={item.title}
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              text={item.text}
            />
          ))}

        </Grid>
     </Container>
   </section>
  );
}

