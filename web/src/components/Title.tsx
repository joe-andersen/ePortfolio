import React, { FC } from 'react';
// import menu from '../assets/images/bg-menu.png';

interface Props {
    title: string;
}

export const Title: FC<Props> = ({ title }) => (
    <div className="container">
        <button type="button" className="btn btn-primary">Primary</button>
        <h1>{title}</h1>
        <img src="./images/logo.png"></img>
    </div>
);
