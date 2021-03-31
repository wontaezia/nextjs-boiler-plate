import Head from 'next/head';
type MetaProps = {
    desc: string;
    title: string;
    canonical: string;
    icon: string;
    image?: string;
    keywords: string;
};

const Meta = (props: MetaProps) => (
    <Head>
        <title>{props.title}</title>
        <meta name="keywords" content={props.keywords} />
        <meta name="description" content={props.desc} />
        <meta name="og:title" property="og:title" content={props.title} />
        <meta name="og:description" property="og:description" content={props.desc} />
        <meta property="og:url" content={`${props.canonical}`} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        {props.image ? <meta property="og:image" content={`${props.image}`} /> : <meta property="og:image" content="default image url" />}
        {props.image ? <meta name="twitter:image" content={`${props.image}`} /> : <meta name="twitter:image" content="default image url" />}
    </Head>
);
export default Meta;

// SEO를 위해 재사용하는 Meta Tag 컴포넌트
// 중복된 요소는 _document에서 관리하는 것이 나은지 확인
// 아닐 경우 defalut값으로 지정
