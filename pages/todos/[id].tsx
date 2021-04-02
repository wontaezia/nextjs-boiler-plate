import { GetServerSideProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { TODOS_API as API } from '@api/config';
import { useTodos } from '@hooks';
import TodoTemplate from '@components/TodoTemplate';
import SEO from '@components/SEO';

function Todo(props: any) {
    const { todo } = useTodos(props.id);

    return (
        <div>
            <SEO desc="" title={`Todo ${props.id}`} canonical="" icon="" keywords="" />
            <TodoTemplate todo={props.data || todo} />
        </div>
    );
}

export default Todo;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    // getServerSideProps는 해당 페이지 요청이 있을 때마다 server에 요청하기 때문에
    // 예외처리를 두어 데이터를 재요청하지 않도록 합니다.
    const isClient = !req || req.url?.startsWith('/_next/data');
    const id = Number(query.id);

    // SSR 방식이라면 스토어에 데이터가 없기 때문에 API 요청을 진행합니다.
    if (!isClient) {
        const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
        return {
            props: {
                id,
                data: data[0],
            },
        };
    }

    // CSR 방식일 때는 리스트의 데이터 중 사용자의 클릭에 의해 들어오는 방식일 수 밖에 없기 때문에 스토어에서 꺼내온다.
    return {
        props: {
            id,
        },
    };
};
