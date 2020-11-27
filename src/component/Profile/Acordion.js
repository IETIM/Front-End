import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Nombre usuario</Typography>
          <Typography className={classes.secondaryHeading}>{props.usernanme}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth style={{justifyContent : 'center' , alignItems :'center'}}>
                <InputLabel htmlFor="name"> Nuevo nombre de usuario </InputLabel>
                <Input 
                    id="name" 
                    name="name" 
                    autoComplete="name" 
                    onChange={props.handleChangeName}
                    style= {{width:'50%'}}
                    autoFocus />
            </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Email</Typography>
          <Typography className={classes.secondaryHeading}>{props.email}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth style={{justifyContent : 'center' , alignItems :'center'}}>
                  <InputLabel style={{justifyContent : 'center' , alignItems :'center'}} htmlFor="email"> Nuevo email </InputLabel>
                  <Input 
                      id="email" 
                      name="email" 
                      autoComplete="email" 
                      onChange={props.handleChangeMail}
                      style= {{width:'50%'}}
                      autoFocus />
              </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Celular</Typography>
          <Typography className={classes.secondaryHeading}>{props.cellphone}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth style={{justifyContent : 'center' , alignItems :'center'}}>
                  <InputLabel style={{justifyContent : 'center' , alignItems :'center'}} htmlFor="cell"> Nuevo Celular </InputLabel>
                  <Input 
                      id="cell" 
                      name="cell" 
                      autoComplete="cell" 
                      onChange={props.handleChangeCell}
                      style= {{width:'20%'}}
                      autoFocus />
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <Typography className={classes.heading}> Dirección </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth style={{justifyContent : 'center' , alignItems :'center'}}>
              <InputLabel style={{justifyContent : 'center' , alignItems :'center'}} htmlFor="add"> Nueva dirección </InputLabel>
              <Input 
                  id="add" 
                  name="add" 
                  autoComplete="add" 
                  onChange={props.handleChangeAdd}
                  style= {{width:'25%'}}
                  autoFocus />
          </FormControl>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
        <Typography className={classes.heading}> Contraseña </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth style={{justifyContent : 'center' , alignItems :'center'}}>
              <InputLabel style={{justifyContent : 'center' , alignItems :'center'}} htmlFor="passwd"> Nueva Contraseña </InputLabel>
              <Input 
                  id="passwd" 
                  type="password"
                  name="passwd" 
                  autoComplete="passwd" 
                  onChange={props.handleChangePassword}
                  style= {{width:'30%'}}
                  autoFocus />
          </FormControl>
          
        </AccordionDetails>
      </Accordion>

    </div>
  );
}