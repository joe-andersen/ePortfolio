import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setAddTripVisible } from '../../stores/General/GeneralActions';

const style = {
    rowMargin: {
        margin: '5px',
    },
    buttoMargin: {
        marginLeft: '15px',
    },
};

export const AddTrip: FC<Record<string, never>> = () => {
    const dispatch = useDispatch();

    const onCancelClick = (event) => {
        event.preventDefault();
        dispatch(setAddTripVisible());
    }
    return (
        <>
            <div className="col-md-6">
                <div className="row" style={style.rowMargin}>
                    <h2>Add Trip</h2>
                </div>
            </div>
            <div className="col-md-3">
                <form>
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
                        className="btn btn-outline-secondary"
                        style={style.buttoMargin}
                        onClick={(event) => onCancelClick(event)}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </>
    )
}
