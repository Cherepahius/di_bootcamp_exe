import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './userSlice';

const UserData = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;

    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>{data.phone}</p>
        </div>
    );
};

export default UserData;
