import { createTheme } from '@material-ui/core/styles'


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(10, 10, 10)'
    },
    secondary: {
      main: 'rgb(255, 255, 255)'
    },
    background: {
      default: 'rgb(224, 220, 219)' ,
      black: '#000000'
    }, 
  },
})
export default theme


