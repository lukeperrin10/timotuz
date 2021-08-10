import { Box, Typography } from '@material-ui/core'
import React from 'react'
import aboutUsStyles from '../theme/aboutUsView'

const AboutUsView = () => {
  const classes = aboutUsStyles()
  return (
    <Box className={classes.containerBox}>
      <Box className={classes.header}>
        <Typography variant="h4">Om oss</Typography>
      </Box>
      <Typography variant="body1">
        Timotuz fastigheter är ett erfaret fastighetsbolag i södra Sverige med
        hjärtat i myllan. Vårt fastighetsbestånd är koncentrerat till orter i
        Skåneregionen och utgörs i huvudsak av bostäder och industrifastigheter.
        Vi växer genom förvärv av fastigheter med utvecklingspotential samt
        nyproduktion av primärt bostadsfastigheter. Fina relationer med våra
        hyresgäster och goda kassaflöden har skapat förutsättningar för vår
        regionalt fokuserade fastighetsutveckling och ligger till grund för vår
        stabila tillväxt. För att skapa värden för både städer och människor
        jobbar vi varsamt och miljösmart med såväl renovering av befintliga
        fastigheter som med framtagande av nya bostäder. Bolaget grundades 2014
        och verkar genom fastigheter och utvecklingsprojekt i Malmö, Ystad,
        Helsingborg och Limhamn.
      </Typography>
      <Box className={classes.headerMission}>
        <Typography variant="h4">Vår Mission</Typography>
      </Box>
      <Typography>
        Timotuz skall skapa platser för skåningar att växa och trivas på. Vi gör
        det genom att tillgodose bostads- och lokalbehov idag, men med ena foten
        in i morgondagens teknik och miljö. Vi ska hitta eller skapa fastigheter
        med stor värdepotential och utveckla dessa för ett lönsamt ägande och en
        hållbar framtid.
      </Typography>
      <Box className={classes.headerMission}>
        <Typography variant="h4">Vår Vision</Typography>
      </Box>
      <Typography>
        Med den regionalt förankrade småföretagarens lyhördhet och passion
        skapar Timotuz rätt fastigheter, och vårdar dem med storbolagets
        långsiktighet och branscherfarenhet.
      </Typography>
    </Box>
  )
}

export default AboutUsView
