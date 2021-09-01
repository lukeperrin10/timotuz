import React from 'react'
import { Typography, Box, CardMedia, useMediaQuery } from '@material-ui/core'

import aboutUsStyles from '../theme/aboutUsView'
import people_2 from '../assets/images/people_2.jpg'

const AboutUsView = () => {
  const classes = aboutUsStyles()
  const desktop = useMediaQuery('(min-width:1265px)')
  return (
    <>
      <Box
        data-cy='about-us-section'
        className={classes.contentContainer}
        id='about_us'>
        {desktop ? undefined : (
          <Box className={classes.shadowBox}>
            <Typography className={classes.header}>Om oss</Typography>
          </Box>
        )}

        <Box className={classes.imageContainer}>
          <CardMedia
            component='img'
            image={people_2}
            className={classes.image}
          />
        </Box>
        <Box className={classes.textContainer}>
          <Box className={classes.textContent}>
            {desktop && (
              <Typography variant='h4' className={classes.header}>
                Om oss
              </Typography>
            )}
            <Typography
              data-cy='about-us-content'
              className={classes.aboutUsText}
              variant='body1'>
              Timotuz har varit verksamt inom fastighetsbranschen sedan 2014.
              <br></br> <br></br> Vi förvärvar, förädlar, nyproducerar,
              exploaterar, äger och förvaltar hyresbostäder i Södra Sverige.
              Strategin är att i städer med tillväxtpotential förvärva
              befintliga bostadsfastigheter liksom mark för nyproduktion samt
              strategiskt belägna lager och logistikfastigheter.<br></br>
              <br></br>Bolagets nyproducerade bostäder är alltid ytsmarta där
              hållbarhet är vår ledstjärna med ett högt miljötänk. I våra
              projekt letar vi ständigt efter möjligheter att integrera
              teknologiska innovationer inom mobilitetsåtgärder, hållbarhet och
              effektiv användning av resurser bland de boende.<br></br>
              <br></br> Vi är lyhörda och jobbar alltid i ett nära samarbete med
              kommunen var sig det beträffar gestaltning, planritningar eller
              mobilitetsåtgärder.<br></br>
              <br></br> Vi finns idag etablerade i Malmö, Ystad och Helsingborg.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )

  // <Box className={classes.pageBox}>
  //   <Box className={classes.textContainer}>
  //     <Box className={classes.header}>
  //       <Typography data-cy="about-us-header" variant="h4">
  //         Om Oss
  //       </Typography>
  //     </Box>
  //     <Box className={classes.text}>
  //       <Typography data-cy="about-us-main" variant="body1">
  //         Timotuz fastigheter är ett erfaret fastighetsbolag i södra Sverige
  //         med hjärtat i myllan. Vårt fastighetsbestånd är koncentrerat till
  //         orter i Skåneregionen och utgörs i huvudsak av bostäder och
  //         industrifastigheter. Vi växer genom förvärv av fastigheter med
  //         utvecklingspotential samt nyproduktion av primärt
  //         bostadsfastigheter. Fina relationer med våra hyresgäster och goda
  //         kassaflöden har skapat förutsättningar för vår regionalt fokuserade
  //         fastighetsutveckling och ligger till grund för vår stabila tillväxt.
  //         För att skapa värden för både städer och människor jobbar vi varsamt
  //         och miljösmart med såväl renovering av befintliga fastigheter som
  //         med framtagande av nya bostäder. Bolaget grundades 2014 och verkar
  //         genom fastigheter och utvecklingsprojekt i Malmö, Ystad, Helsingborg
  //         och Limhamn.
  //       </Typography>
  //     </Box>
  //   </Box>
  //   <Box className={classes.textContainerDark}>
  //     <Box className={classes.header}>
  //       <Typography data-cy="about-us-mission-header" variant="h4">
  //         Vår Mission
  //       </Typography>
  //     </Box>
  //     <Box className={classes.text}>
  //       <Typography data-cy="about-us-mission" variant="body1">
  //         Timotuz skall skapa platser för skåningar att växa och trivas på. Vi
  //         gör det genom att tillgodose bostads- och lokalbehov idag, men med
  //         ena foten in i morgondagens teknik och miljö. Vi ska hitta eller
  //         skapa fastigheter med stor värdepotential och utveckla dessa för ett
  //         lönsamt ägande och en hållbar framtid.
  //       </Typography>
  //     </Box>
  //   </Box>
  //   <Box className={classes.textContainer}>
  //     <Box className={classes.header}>
  //       <Typography data-cy="about-us-vision-header" variant="h4">
  //         Vår Vision
  //       </Typography>
  //     </Box>
  //     <Box className={classes.text}>
  //       <Typography data-cy="about-us-vision" variant="body1">
  //         Med den regionalt förankrade småföretagarens lyhördhet och passion
  //         skapar Timotuz rätt fastigheter, och vårdar dem med storbolagets
  //         långsiktighet och branscherfarenhet.
  //       </Typography>
  //     </Box>
  //   </Box>
  // </Box>
}

export default AboutUsView
