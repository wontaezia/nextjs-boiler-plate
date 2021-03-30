import React from 'react';
import useUsers from '@hooks/useUsers';

export default function SwrTest() {
    const { data, error } = useUsers();

    if (error) {
        return <div>ERROR...</div>;
    }
    if (!data) {
        return <div>isLoding...</div>;
    }
    return (
        <ul>
            {data?.map(({ id, name }: any) => (
                <li key={id}>
                    <span>{name}</span>
                </li>
            ))}
        </ul>
    );
}
