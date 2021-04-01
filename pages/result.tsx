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

// getServerSideProps를 사용할 때 예외적인 상황을 만들지 않는다면
// Client측에서 API 통신을 하여 데이터를 다루는 것보다 느리게 작동하는 것처럼 느껴지고 중복 요청이 발생할 수 있습니다.
export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = 1;
    const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
    return { props: { data: data[0] } };
};

export default Result;
