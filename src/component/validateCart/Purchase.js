import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import DescriptionIcon from '@material-ui/icons/Description';


export default class Purchase extends React.Component {

    render() {
        return( 
                <>
                    <Card>
                        <CardActionArea>
                        <div style = {{fontFamily: "'Roboto Slab', 'serif'"}}> 
                            <br></br>
                            View Purchase
                            <br></br><br></br>
                            <DescriptionIcon style = {{fontSize: '50px'}}/>
                        </div>
                        <CardContent style = {{fontFamily: "'Roboto Slab', 'serif'"}}>
                                {myList.map((item) =>
                                        <div key = {item.name + "_" + item.price}>                                 
                                            <h2 style = {{display: 'inline-block'}}> {item.key}: </h2> {item.price} 
                                        </div>
                                )}                
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </>
        );    
    }    
}