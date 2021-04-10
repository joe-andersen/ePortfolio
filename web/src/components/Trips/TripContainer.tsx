import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { TripListing } from './TripListing';
import { AddTrip } from './AddTrip';
import { getIsAddTripVisibleSelector } from '../../stores/General/GeneralSelector';
import { setAddTripVisible } from '../../stores/General/GeneralActions';

const style = {
    row: {
        margin: '10px',
    },
};

export const TripContainer: FC<Record<string, never>> = () => {
    const isAddTripVisible = useSelector(getIsAddTripVisibleSelector);
    const dispatch = useDispatch();

    const onAddTripClick = () => {
        dispatch(setAddTripVisible());
    }

    return (
        <div className="container-fluid">
            {isAddTripVisible ?
                <AddTrip />
            :
                <>
                    <div className="row" style={style.row}>
                        <button type="button" className="btn btn-info" onClick={onAddTripClick}>Add Trip</button>
                    </div>
                    <TripListing />
                </>
            }
        </div>
    )
}
