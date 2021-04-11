import React from 'react';

const style = {
    rowMargin: {
        margin: '10px'
    }
}

export const HomePrivate = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={style.rowMargin}>
                <h3>Now that you're logged in you may add and edit trips.</h3>
            </div>
        </div>
    )
}