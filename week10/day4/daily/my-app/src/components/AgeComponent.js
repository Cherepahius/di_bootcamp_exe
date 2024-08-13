import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/age/ageSlice';
import logo from '../logo.svg';

const AgeComponent = () => {
    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.age);

    return (
        <div>
            <h1>Age: {value}</h1>
            {loading && <img src={logo} alt="Loading..." />}
            <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
            <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
        </div>
    );
};

export default AgeComponent;
