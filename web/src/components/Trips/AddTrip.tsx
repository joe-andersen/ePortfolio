import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAddTripVisible } from '../../stores/General/GeneralActions';
import { addTrip } from '../../stores/Trips/TripActions';

const style = {
    rowMargin: {
        margin: '5px',
    },
    buttonMargin: {
        marginLeft: '15px',
    },
};

export const AddTrip: FC<Record<string, never>> = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const onCancelClick = (event) => {
        event.preventDefault();
        dispatch(setAddTripVisible());
    }

    const onSave = (event) => {
        event.preventDefault();
        const trip = {
            code: event.target.code.value,
            name: event.target.name.value,
            length: event.target.length.value,
            start: event.target.start.value,
            resort: event.target.resort.value,
            perPerson: event.target.perPerson.value,
            image: event.target.image.value,
            description: event.target.description.value,
        }

        dispatch(addTrip(trip));
        history.push('/');
    }
    return (
        <>
            <div className="col-md-6">
                <div className="row" style={style.rowMargin}>
                    <h2>Add Trip</h2>
                </div>
            </div>
            <div className="col-md-3">
                <form onSubmit={onSave}>
                    <div className="form-group">
                        <label>Code:</label>
                        <input type="text" id="code" placeholder="Code" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" id="name" placeholder="Name" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Length:</label>
                        <input type="text" id="length" placeholder="Length" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Start Date:</label>
                        <input type="text" id="start" placeholder="Start" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Resort:</label>
                        <input type="text" id="resort" placeholder="Resort" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Per Person:</label>
                        <input type="text" id="perPerson" placeholder="PerPerson" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Image:</label>
                        <input type="text" id="image" placeholder="Image" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" id="description" placeholder="Description" className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-info">Save</button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        style={style.buttonMargin}
                        onClick={(event) => onCancelClick(event)}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </>
    )
}
