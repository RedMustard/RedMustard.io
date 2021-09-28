import React from 'react';


interface GridProps {
    children: JSX.Element[];
}
const Grid = ({ children }: GridProps) => (
    <div className="grid">
        {children}
    </div>
);

export default Grid;
