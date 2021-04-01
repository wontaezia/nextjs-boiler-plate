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
            <SEO desc="" title={`Todo ${props.id}`} image="" canonical="" icon="" keywords="" />
            <TodoTemplate todo={props.data || todo} />
        </div>
    );
}

export default Todo;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    // getServerSideProps가 있는 페이지는 매번 server에 요청이 이루어지기 때문에
    // req 외에도 추가적인 비교가 필요하다.
    const isClient = !req || req.url?.startsWith('/_next/data');
    const id = Number(query.id);

    // SSR 방식이라면 데이터가 없기 때문에 API 요청을 진행한다.
    if (!isClient) {
        const { data }: AxiosResponse = await axios.get(`${API}?id=${id}`);
        return {
            props: {
                id,
                data: data[0],
            },
        };
    }

    // CSR 방식일 때는 리스트의 데이터 중 사용자의 클릭에 의해 들어오는 방식일 수 밖에 없기 때문에 리덕스 스토어에서 꺼내온다.
    return {
        props: {
            id,
        },
    };
};
