import React from 'react';
// import { GetStaticProps } from 'next';
import { GetServerSideProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { TODOS_API as API } from '@api/config';

function Result(props: any) {
    return (
        <div>
            {props.data.id}, {props.data.title}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { data }: AxiosResponse = await axios.get(`${API}?id=${1}`);
    return { props: { data: data[0] } };
};

// export const getStaticProps: GetStaticProps = async (context) => {
//     // const random = Math.floor(Math.random() * 10);
//     const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
//     id++;
//     return {
//         props: {
//             data: data[0],
//         },
//     };
// };

export default Result;
