import React  , { useEffect , useState  } from 'react'
import axios from 'axios'
import {Typography ,Modal , Box , Button , Grid } from '@mui/material/';

import './style.css'


function News() {

    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    const [ news , setNews ] = useState([])

    function getNewsData() {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=73b9d3125c42422696c581885b310d55")
        .then( res => {
            setNews(res.data.articles)
        }).catch( err => {
            console.log(err)
        } )
    }

    useEffect( () => {
        getNewsData()
    } , [] ) 
    
    console.log(news)
  return (
    <>




         

        {
            news.map( ( index , i ) => {
                return(
                    
                   

                        <Grid item xs={2}>
                          <img   src={index.urlToImage} />

                    <Typography style={{color:'red'}}  variant="h1" >
                        { index.title } 
                        </Typography>;
                        <Typography variant="h3" >
                        {index.content}
                        </Typography>
                </Grid>
                    
                     

               


                )
            } )
        }
             

           







    </>
  )
}

export default News
