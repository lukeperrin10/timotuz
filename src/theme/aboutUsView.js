import { makeStyles } from '@material-ui/core'

const aboutUsStyles = makeStyles((theme) => ({
  containerBox: {
    marginTop: '100px',
    padding: '70px 200px 50px 200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    marginTop: '20px',
    marginBottom: '50px',
  },

  headerMission: {
    marginTop: '50px',
    marginBottom: '50px'
  }, 
}))

export default aboutUsStyles
