import React, { FC } from 'react';

export const RegisterForm: FC<Record<string, never>> = () => {
    return (
        <div className="container">
            <div className="mb-3">
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Stanley Hudson" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="userName" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="userName" placeholder="name@example.com" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-primary">Sign Up!</button>
            </div>
        </div>
    )
}
