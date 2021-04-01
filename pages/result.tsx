import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import gsap from 'gsap';
import { TODOS_API as API } from '@api/config';

function Result(props: any) {
    return (
        <div>
            {props.data.id}, {props.data.title}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = Math.floor(Math.random() * 10);
    const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
    return { props: { data: data[0] } };
};

export default Result;
