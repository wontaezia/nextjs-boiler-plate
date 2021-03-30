import React from 'react';
import { GetStaticProps } from 'next';
// import { GetServerSideProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { TODOS_API as API } from '@api/config';
let id = 1;

function Result(props: any) {
    console.log(props);
    return (
        <>
            <div>
                {props.data.id}, {props.data.title}
            </div>
        </>
    );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const random = Math.floor(Math.random() * 10);
//     const { data }: AxiosResponse = await axios.get(`${API}?id=${random}`);

//     return { props: { data: data[0], random } };
// };

export const getStaticProps: GetStaticProps = async (context) => {
    // const random = Math.floor(Math.random() * 10);
    const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
    id++;
    return {
        props: {
            data: data[0],
        },
    };
};

export default Result;
