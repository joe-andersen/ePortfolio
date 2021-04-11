import React from 'react';

const style = {
    rowMargin: {
        margin: '10px'
    }
}

export const HomeOpen = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={style.rowMargin}>
                <h3>Please login for expanded functionality.</h3>
            </div>
        </div>
    )
}