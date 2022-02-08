import TemplateDefault from '../src/template/Default'

import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

import  'date-fns';

import{ 
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Container,
  Grid,    
} from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';

import TimePicker from '@material-ui/lab/DatePicker';



//import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
//import LocalizationProvider from '@material-ui/lab/LocalizationProvider';





const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 540,
    marginLeft: 35,
    marginRight:27,
    marginBottom:30,
  },
  grid: {
    marginBottom:40,

  },
  button: {
    padding: 15 ,
    minWidth: 200,
  },


}));

export default function Home() {
  const classes = useStyles();
  const [localGet, setLocalGet] = React.useState('');
  const [localLet, setLocalLet] = React.useState('');

 const [value, setValue] = React.useState([null, null]);

  const [selectedHourGet, setSelectedHourGet] = React.useState(new Date());
  const [selectedHourLet, setSelectedHourLet] = React.useState(new Date());
  
  const handleChangeCityGet = (event) => {
    setLocalGet(event.target.value);
  };
  
  const handleChangeCityLet = (event) => {
    setLocalLet(event.target.value);
  };

   const handleChangeHourGet = (date) => {
    setSelectedHourGet(date);
  };
  
  const handleChangeHourLet = (date) => {
    setSelectedHourLet(date);
  };

  console.log(handleDateChangeGet)
  console.log(setLocalGet)
  return (
    <TemplateDefault>
       <Container maxWidth="lg">
          
            <div>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="selectGet">Cidade do levantamento</InputLabel>
                <Select
                  labelId="selectGet"
                  id="selectFilledGet"
                  value={localGet}
                  onChange={handleChangeCityGet}
                >
                  <MenuItem value="">
                    <em>Cidade</em>
                  </MenuItem>
                  <MenuItem value={10}>Porto</MenuItem>
                  <MenuItem value={20}>Lisboa</MenuItem>
                  
                </Select>
             </FormControl>
                       
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="selectLet">Cidade da entrega</InputLabel>
                <Select
                  labelId="selectLet"
                  id="selectFilledLet"
                  value={localLet}
                  onChange={handleChangeCityLet}
                >
                  <MenuItem value="">
                    <em>Cidade</em>
                  </MenuItem>
                  <MenuItem value={10}>Porto</MenuItem>
                  <MenuItem value={20}>Lisboa</MenuItem>
                  
                </Select>
              </FormControl>
              
            </div>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Check-in"
              endText="Check-out"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container justifyContent="space-around" className={classes.grid}>                    
              <TimePicker
                id="time-picker"
                label="Hora do levantamento"
                value={selectedHourGet}
                onChange={handleChangeHourGet}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
               />
                   
              <TimePicker
                id="time-picker"
                label="Hora da entrega"
                value={selectedHourLet}
                onChange={handleChangeHourLet}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
          </Grid>
          </LocalizationProvider>    
      </Container>  

      <Container maxWidth="md" >
          <Box textAlign="center">
          
                  <Button className={classes.button}
                      type="submit" 
                      variant="contained"
                      color="primary"  
                      size= "large"                                                                                                           
                      >
                  Pesquisar
                  </Button>     
            
          </Box>    
      </Container>
    </TemplateDefault>

  )
}





