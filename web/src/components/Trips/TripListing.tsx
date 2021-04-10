import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTrips } from '../../stores/Trips/TripActions';
import { getAllTripsSelector } from '../../stores/Trips/TripSelector';
import { TripCard } from './TripCard'

export const TripListing: FC<Record<string, never>> = () => {
    const dispatch = useDispatch();
    const allTrips = useSelector(getAllTripsSelector);

    useEffect(() => {
        dispatch(listTrips());
    }, [dispatch])

    return (
        <div className="row">
            {
                allTrips ?
                    allTrips.map((trip, index) => {
                        return <TripCard key={index} trip={trip} />
                    })
                : null
            }
        </div>
    )
}
