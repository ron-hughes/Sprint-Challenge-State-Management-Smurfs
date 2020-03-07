import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getSmurfs } from '../store/actions';


const Smurfs = (props) => {

    useEffect(() => {
        getSmurfs()
    }, [])
    return (
        <>
        
        </>
    )
}

const mapStateToProps = state => {
    return {
      smurfs: state.quote,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(Smurfs);