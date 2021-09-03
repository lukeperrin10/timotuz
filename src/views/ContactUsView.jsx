import React from 'react'
import {
  Container,
  Box,
  CardMedia,
  Typography,
  Hidden,
  Divider,
} from '@material-ui/core'
import contact_us_hero from '../assets/images/contact_us_hero.jpg'
import contactUsStyle from '../theme/contactUsView'

const ContactUsView = () => {
  const classes = contactUsStyle()
  return (
    <>
      <Container className={classes.containerBox}>
        <CardMedia
          className={classes.img}
          component='img'
          image={contact_us_hero}
          data-cy='image'
          alt=''
        />
        <Box className={classes.shadowBox}>
          <Box className={classes.contactInfo}>
            <Typography
              className={classes.text}
              data-cy='phone-number'
              variant='body1'>
              040 - 68 59 400
            </Typography>
            <Hidden mdDown>
              <Divider orientation='vertical' />
            </Hidden>
            <Typography
              className={classes.text}
              data-cy='email-address'
              variant='body1'>
              info@timotuz.com
            </Typography>
            <Hidden mdDown>
              <Divider orientation='vertical' />
            </Hidden>
            <Typography
              className={classes.text}
              data-cy='address'
              variant='body1'>
              box 20, 239 21 skanör
            </Typography>
          </Box>
        </Box>
        {/* <Box className={classes.shadowBox}>
          <Box className={classes.contactText}>
            <Typography
              className={classes.heading}
              data-cy='heding'
              variant='h2'>
              KONTAKTA OSS
            </Typography>
            <Typography className={classes.text} data-cy='text' variant='body1'>
              Vi finns här för dig. Tveka inte att höra av dig med frågor som
              berör ditt boende. För felanmälan ber vi dig alltid att vända dig
              till det fastighetsskötsel bolag vi anlitat på sin ort.
            </Typography>
          </Box>
        </Box> */}
      </Container>
      <Box className={classes.bodySection}>
        <Typography
          className={classes.bodyHeading}
          data-cy='heading'
          variant='h3'>
          Felanmälan: Malmö/Limhamn
        </Typography>
        <Typography
          className={classes.subHeading}
          data-cy='heading'
          variant='h4'>
          Fastighetsskötsel och felanmälan
        </Typography>
        <Typography className={classes.bodyText} data-cy='text' variant='body1'>
          Fastighetsskötsel utförs av Förvaltning AB Malmöborg. Samtliga
          felanmälningar skall registreras direkt till Förvaltnings AB Malmöborg
          vardagar mellan kl. 8.00 – 16.00 på telefon 072-353 46 31‬ alternativt
          email info@malmoborg.se.
        </Typography>

        <Typography
          className={classes.subHeading}
          data-cy='heading'
          variant='h4'>
          Journummer
        </Typography>
        <Typography className={classes.bodyText} data-cy='text' variant='body1'>
          För akuta fel och störningar på kvällar och helger som inte kan vänta
          till följande vardag hänvisar vi till Örestads Bevakning på telefon
          040-93 12 70.
        </Typography>

        <Typography
          className={classes.bodyHeading}
          data-cy='heading'
          variant='h3'>
          Felanmälan: Ystad
        </Typography>
        <Typography
          className={classes.subHeading}
          data-cy='heading'
          variant='h4'>
          Fastighetsskötsel och felanmälan
        </Typography>
        <Typography className={classes.bodyText} data-cy='text' variant='body1'>
          Fastighetsskötsel och felanmälningar utförs av Kanslihuset AB.
          <br />
          <br />
          Felanmälan ska i första hand göras på www.kanslihuset.se under ”FÖR
          HYRESGÄSTER”, ”FELANMÄLAN”. Vid entren till trapphus finner ni
          detaljerade instruktioner och den information ni behöver uppge till
          Kanslihuset vid felanmälan.
          <br />
          <br />
          Det går också bra ringa in på vardagar (måndag-fredag) under
          telefontid kl. 08:00 – 11:00 på telefonnummer 040 680 15 65.
          <br />
          <br />
          Akuta fel och störningar mellan kl. 11:00 – 16:30 som ej kan vänta
          till nästkommande vardag ring 040 680 15 67
        </Typography>

        <Typography
          className={classes.subHeading}
          data-cy='heading'
          variant='h4'>
          Journummer
        </Typography>
        <Typography className={classes.bodyText} data-cy='text' variant='body1'>
          Akuta fel och störningar under kvällar och helger som ej kan vänta
          till nästkommande vardag hänvisar vi till Örestad Bevakning på telefon
          040 93 12 70.
        </Typography>
      </Box>
    </>
  )
}

export default ContactUsView
