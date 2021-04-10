import React, { FC } from 'react';
import { Trip } from '../../stores/Trips/TripTypes';

const style = {
    buttonMargin: {
        margin: '10px'
    }
}

export interface TripCardProps {
    trip: Trip;
}

export const TripCard = ({ trip }: TripCardProps) => {
    return (
        <div className="card ml-4" style={{ width: '18rem' }}>
            <div className="card-header">{trip.name}</div>
            <img src={`/images/${trip.image}`} alt="trip thumbnail" className="card-img-top"></img>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">
                    {trip.resort}
                </h6>
                <p className="card-subtitle mt-3 mb-3 text-muted">
                    {`${trip.length} only ${trip.perPerson} per person`}
                </p>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: trip.description }}></p>
            </div>
            <div>
                <button type="button" className="btn btn-info" style={style.buttonMargin}>Edit</button>
            </div>
        </div>
    )
}
