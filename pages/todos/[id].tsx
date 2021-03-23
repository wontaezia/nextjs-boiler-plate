import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { TODOS_API as API } from '@api/config';
import { useRouter } from 'next/router';
import { useTodos } from '@hooks';

function Todo() {
    const { todos } = useTodos();
    const [data, setData] = useState<any>({});
    const router = useRouter();
    const {
        query: { id },
    } = router;

    const getData = async () => {
        const response: AxiosResponse = await axios.get(`${API}?id=${id}`);
        console.log(response);
        setData(response.data[0]);
    };

    useEffect(() => {
        if (!todos[Number(id)]) {
            getData();
        }
    }, [id]);

    if (!todos[Number(id)]) {
        return <>{data && <div key={data.id}>{data.title}</div>}</>;
    }

    return <>{<div key={todos[Number(id)].id}>{todos[Number(id)].title}</div>}</>;
}

export default Todo;
