import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getSmurfs } from '../store/actions';
import { SmurfsCard } from './SmurfsCard';
import styled from 'styled-components';


const Smurfs = ({ getSmurfs, smurfs, isFetching, error}) => {

    const Container = styled.div`
    // display: inline-grid;  
    // grid-template-columns: 200px 200px 200px;
    width: 1000px;
    height: 700px;
    background-color darkblue;
    margin: 0px auto;
    `
    const Divs = styled.div`
    display: flex;
    justify-content: space-around;
    `
    
    const divStyles = {
        borderRadius: "15px", 
        borderBottomRightRadius: "50px 150px", 
        borderBottomLeftRadius: "50px 150px", 
        backgroundColor: "yellow", 
        width: "220px", 
        height: "50px", 
        marginTop: "10px"
    }

    useEffect(() => {
        getSmurfs()
    }, [])
    return (
        <>
        <Container>
           <div className="header">
              <h1>Smurfs</h1> 
           </div>
           <Divs>
        <div style={divStyles}>
        Name
       </div>
 
        <div style={divStyles}>
            Age
        </div>
        <div style={divStyles}>
            Height
        </div>    
        </Divs>
        {smurfs.map(( smurf, id ) => {
            return (
                <>
                <SmurfsCard key={id} smurf={smurf} />
                </>
            )
        })}
        </Container>
        {/* {console.log(smurfs)} */}
        </>
    )
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(Smurfs);