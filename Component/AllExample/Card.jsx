import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from "../AllExample/data";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);

export default function BasicCard() {
    return (

        <>

            <nav>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', width: '100%' }}>
                    {
                        data.map((val) => (

                            <Card sx={{ minWidth: 275 }} style={{width: '30%', backgroundColor: 'yellow'}}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        {val.brand}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {val.title}
                                    </Typography>
                                    
                                    <Typography variant="body2">
                                        {val.description}
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained"><Link to={`/data/${val.id}`}>Read more</Link></Button>
                                </CardActions>
                            </Card>

                        ))
                    }
                </div>
            </nav>
        </>


    );
}
