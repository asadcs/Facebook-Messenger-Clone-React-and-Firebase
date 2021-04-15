// import React from 'react'

// export default function Message(props) {
// const{key,message,username}=props

//     return (
//         <h2 key={key}>{message.username}: {message.text}</h2>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Message.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Message(props) {
    const{key,message,username}=props
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
const isUserLoggedIn=  username===message.username?true:false

  return (
    <div className={`message ${isUserLoggedIn && 'message__user'}`}>
    <Card className={isUserLoggedIn?"message__userCard":"message__guestCard"}>
      <CardContent>
        <Typography         
        color="white" 
        variant="h5" 
        component="h2"
        >
      { message.username}: { message.message}
        </Typography>
        {/* <Typography variant="h5" component="h2">
          
          {message.text}
        </Typography> */}
       
        {/* <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
     
    </Card>
    
    </div>
  );
}
