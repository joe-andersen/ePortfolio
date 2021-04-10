import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TripWithId } from '../../stores/Trips/TripTypes';
import { setEditTripVisible } from '../../stores/General/GeneralActions';
import { listTrip } from '../../stores/Trips/TripActions';

const style = {
    buttonMargin: {
        margin: '10px'
    },
    cardStyle: {
        width: '18rem',
        marginBottom: '15px',
    },
}

export interface TripCardProps {
    trip: TripWithId;
}

export const TripCard = ({ trip }: TripCardProps) => {
    const dispatch = useDispatch();

    const onEditTripClick = (code) => {
        dispatch(listTrip(code));
        dispatch(setEditTripVisible());
    }

    return (
        <div className="card ml-4" style={style.cardStyle}>
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
                <button
                    type="button"
                    className="btn btn-info"
                    style={style.buttonMargin}
                    onClick={() => onEditTripClick(trip.code)}
                >
                    Edit
                </button>
            </div>
        </div>
    )
}
