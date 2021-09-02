import React from 'react'
import {
  Hidden,
  Container,
  Box,
  CardMedia,
  Typography,
  Divider,
} from '@material-ui/core'
import contact from '../assets/images/contact_01.jpg'
import contactUsStyle from '../theme/contactUsView'

const ContactUsView = () => {
  const classes = contactUsStyle()
  return (
    <>
      <Container className={classes.containerBox}>
        <CardMedia
          className={classes.img}
          component='img'
          image={contact}
          data-cy='image'
          alt=''
        />
        <Box className={classes.shadowBox}>
          <Box className={classes.contactText}>
            <Typography
              className={classes.heading}
              data-cy='heding'
              variant='h2'>
              KONTAKTA OSS
            </Typography>
            <Typography className={classes.text} data-cy='text' variant='p'>
              Vi finns här för dig. Tveka inte att höra av dig med frågor som
              berör ditt boende. För felanmälan ber vi dig alltid att vända dig
              till det fastighetsskötsel bolag vi anlitat på sin ort.
            </Typography>
          </Box>
          <Box className={classes.contactInfo}></Box>
        </Box>
      </Container>
      <Box>
        <Typography className={classes.heading} data-cy='heding' variant='h2'>
          KONTAKTA OSS
        </Typography>
      </Box>
    </>
  )
}

export default ContactUsView
