import React, { FC } from 'react';

export const LoginForm: FC<Record<string, never>> = () => {
    return (
        <div className="container-fluid">
            <div className="mb-3">
                <div className="row">
                    <div className="col-3">
                        <h2>Please Login</h2>
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
                <button type="button" className="btn btn-primary">Sign in</button>
            </div>
        </div>
    )
}
