import { Typography, Box, Divider, CardMedia } from '@material-ui/core'
import React from 'react'

import aboutUsStyle from '../theme/aboutUsSection';
import logo3d from '../assets/images/om_oss_3d.png'

const AboutUs = () => {
  const classes = aboutUsStyle();
  return (
    <>
      <Box data-cy='about-us-section' className={classes.contentContainer}>
        <Typography
          data-cy="about-us-header"
          color="secondary"
          variant="h4"
          gutterBottom
        >
          Om Oss
        </Typography>
        <CardMedia
            className={classes.image}
            component='img'
            image={logo3d}
            data-cy='3d-logo'
            alt='Timotuz 3d logo'
          />
        <Typography data-cy='about-us-content' className={classes.textContent} variant='subtitle1'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          praesentium accusantium totam ut illo sint doloremque mollitia quo a
          quis alias aliquam sapiente ea ab vero eum nisi cum id sit maiores
          dolorum. Ad molestiae maxime quibusdam. Deserunt, pariatur deleniti
          nostrum unde aspernatur accusantium inventore mollitia, hic
          perferendis voluptates adipisci necessitatibus blanditiis
          exercitationem perspiciatis odio laboriosam molestiae, harum numquam
          eveniet! Dolore voluptas impedit doloremque, velit sed voluptate
          provident tempore pariatur distinctio alias, facere ex facilis
          quibusdam ipsa nemo odit? Corporis voluptatum porro facere ullam
          ducimus dolorem sequi velit, maiores animi laboriosam cumque ex nulla
          unde, obcaecati voluptas necessitatibus sed magni et corrupti quaerat.
          Eos, laudantium atque veritatis commodi nobis blanditiis quas esse ut
          ad reprehenderit dolor quos sunt ex. Illo, modi dolore ratione vero
          iste accusantium nihil dolor quas distinctio nisi consequatur commodi
          repudiandae culpa adipisci exercitationem? Quidem optio consectetur
          autem, eos, tempore aliquid reprehenderit voluptatem nesciunt in
          incidunt dicta!
        </Typography>
      </Box>
      <Divider className={classes.divider} />
    </>
  )
}

export default AboutUs
