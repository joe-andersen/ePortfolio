import React, { FC } from 'react';

export const Navigation: FC<Record<string, never>> = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="/images/logo.png" /></a>
            <button className="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarNavAltMarkup" ariacontrols="navbarNavAltMarkup" aria-expanded="false" arialabel="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <a className="nav-item nav-link active" routerLink="list-trips">Trips<span className=" sr-only ">(current)</span></a> */}
                    <a className="nav-item nav-link active">Trips<span className=" sr-only ">(current)</span></a>
                </div>
            </div>
            <div className="navbar-end">
                {/* <a className="navbar-item" routerLink="login" *ngIf="!isLoggedIn()"> */}
                <a className="navbar-item">
                    <span className="has-icon-left">Log In</span>
                </a>
                {/* <a className="navbar-item" (click)="onLogout()" *ngIf="isLoggedIn()"> */}
                <a className="navbar-item">
                    <span className="has-icon-left ">Log Out</span>
                </a>
            </div>
        </nav>
    )
}