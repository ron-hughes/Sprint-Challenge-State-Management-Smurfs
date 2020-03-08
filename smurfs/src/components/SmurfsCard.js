import React from 'react'
import styled from 'styled-components';

export const SmurfsCard = ( { smurf, id } ) => {

    
    
    const Grid = styled.div`
    color: white;
    display: inline-grid;  
    grid-template-columns: 220px 220px 220px;
    grid-column-gap: 115px;
    `
    return(
        <>
       
        <Grid>
            <div>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height} </div>
        </Grid>
  
       
        </>
    )
}