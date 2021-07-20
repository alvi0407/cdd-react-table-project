import React from 'react';
import './table.css';

export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <span className='filter'>
            Search:{' '}
            <input value={filter || ''}
            onChange={(e)=> setFilter(e.target.value)} />
        </span>
    )
}
