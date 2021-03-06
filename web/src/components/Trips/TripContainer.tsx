import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { TripListing } from './TripListing';
import { AddTrip } from './AddTrip';
import { getIsAddTripVisibleSelector, getIsEditTripVisibleSelector } from '../../stores/General/GeneralSelector';
import { setAddTripVisible } from '../../stores/General/GeneralActions';
import { EditTrip } from './EditTrip';
import { getUserTokenSelector } from '../../stores/User/UserSelector';
import { checkCookie } from '../../utils/UseCookie';

const style = {
    row: {
        margin: '10px',
    },
};

export const TripContainer: FC<Record<string, never>> = () => {
    const isAddTripVisible = useSelector(getIsAddTripVisibleSelector);
    const isEditTripVisible = useSelector(getIsEditTripVisibleSelector);
    const isAuthenticated = useSelector(getUserTokenSelector) ?? checkCookie();
    const dispatch = useDispatch();

    const onAddTripClick = () => {
        dispatch(setAddTripVisible());
    }

    return (
        <div className="container-fluid">
            {isAddTripVisible ?
                <AddTrip />
            : isEditTripVisible ?
                <EditTrip />
            :
                <>
                    {
                        isAuthenticated ?
                            <div className="row" style={style.row}>
                                <button type="button" className="btn btn-info" onClick={onAddTripClick}>Add Trip</button>
                            </div>
                        : null
                    }
                    <TripListing />
                </>
            }
        </div>
    )
}
