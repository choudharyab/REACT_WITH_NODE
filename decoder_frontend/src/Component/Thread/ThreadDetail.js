import React from 'react';

const ThreadDetail=(props)=>{
    const id=props.match.params.id;
    return (
        <div className="container section thread-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">New cost ={id}</span>
                    <p className="grey-text">my west</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                  <div>posted by me</div>
                  <div>time 3AM</div>
                </div>
            </div>
            
        </div>
    )
}

export default ThreadDetail;