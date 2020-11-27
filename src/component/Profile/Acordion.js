import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
          <Typography className={classes.secondaryHeading}>{props.username}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="name"> New Username </InputLabel>
                <Input 
                    id="name" 
                    name="name" 
                    autoComplete="name" 
                    onChange={props.handleChangeName}
                    autoFocus />
            </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          
            <Typography>{localStorage.getItem("email")}</Typography>
          
          
                <EditIcon/>
            
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">New E-mail</InputLabel>
                <Input 
                    id="email" 
                    name="email" 
                    autoComplete="email" 
                    onChange={props.handleChangeMail}
                    autoFocus />
            </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <div style ={{left:'0px',width:'50%'}}> 
    <Typography>{localStorage.getItem("cellphone")}</Typography> </div>
          <div style ={{position:'absolute',right:'10px'}}>
                <EditIcon/>
            </div>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth style={{justifyContent : 'center' , alignItems :'center'}}>
                  <InputLabel style={{justifyContent : 'center' , alignItems :'center'}} htmlFor="cell"> Nuevo Celular </InputLabel>
                  <Input 
                      id="cell" 
                      name="cell" 
                      autoComplete="cell" 
                      onChange={props.handleChangeCell}
                      style= {{width:'50%'}}
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
        <Typography className={classes.secondaryHeading}>{props.address}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" fullWidth style={{justifyContent : 'center' , alignItems :'center'}}>
              <InputLabel style={{justifyContent : 'center' , alignItems :'center'}} htmlFor="add"> Nueva dirección </InputLabel>
              <Input 
                  id="add" 
                  name="add" 
                  autoComplete="add" 
                  onChange={props.handleChangeAdd}
                  style= {{width:'55%'}}
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
        <Typography className={classes.secondaryHeading}>{props.password}</Typography>
        
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
                  style= {{width:'50%'}}
                  autoFocus />
          </FormControl>
          
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <div style ={{left:'0px',width:'50%'}}>
  <Typography type="password">{localStorage.getItem("password")}</Typography> </div>
          <div style ={{position:'absolute',right:'10px'}}>
                <EditIcon/>
            </div>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password"> New Password</InputLabel>
                <Input 
                    id="password"  
                    name="password" 
                    type = "password"

                    onChange={props.handleChangePassword}
                 />
            </FormControl>
        </AccordionDetails>
      </Accordion>

      <Button onClick = {() => props.handleSave()}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
          >
            Save
          </Button>
     

    </div>
  );
}