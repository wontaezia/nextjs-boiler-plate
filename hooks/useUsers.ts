import useSWR from 'swr';
import axios from 'axios';
import { USERS_API as API } from '@api/config';

export default function useUsers() {
    const { data, error } = useSWR(
        API, // 실제 API 요청 fetch에 전달되는 값으로 캐싱을 위한 키값으로 사용되고 흔히 url을 사용한다.
        (url) => {
            return axios.get(url).then((res) => res.data);
        }
        // { refreshInterval: 1000 }
    );

    return { data, error };
}

// 네트워크 연결이 Offline 에서 Online 으로 바뀔 때
// 해당 화면이 포커스를 받을 때 (기능 off 가능)
// 혹은 일정시간 간격으로(refreshInterva을 이용한 커스터마이징 가능)
// 기타 일반적으로 적절한 때라고 여겨지는 경우..?
