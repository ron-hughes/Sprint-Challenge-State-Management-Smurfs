import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getSmurfs } from '../store/actions';


const Smurfs = ({ getSmurfs, smurfs, isFetching, error}) => {

    useEffect(() => {
        getSmurfs()
    }, [])
    return (
        <>
        <div className="container">
           <div className="header">
               Smurfs
           </div>
        {smurfs.map(( smurf, id ) => {
            return (
                <div>{smurf.name}</div>
            )
        })}
        </div>
        
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