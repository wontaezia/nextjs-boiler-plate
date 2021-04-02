# boiler-plate

## 기술 스택

-   React
-   Typescript
-   Redux, Redux-saga, Redux-toolkit
-   @emotion

## 폴더 구조

```
api
components (재사용 컴포넌트)
hooks (커스텀 훅)
layout (레이아웃 관련 컴포넌트)
modules (전역 상태 관리)
pages (페이지 컴포넌트)
public
styles (전역 스타일, 스타일 변수 관리)
```

-   import 위치 설정은 `tsconfig.json`파일에서 별칭을 만들어 사용 가능합니다.
-   pages의 파일명은 path가 되기 때문에 모두 소문자로 입력합니다.

## node 패키지 인스톨

-   node 설치후 실행 (package.json 참고)

```
$ npm i
```

## 로컬 서버 실행

```
& npm run dev
```

## \_app.js

pages/\_app.js는 Next.js SSR cycle에서 가장 먼저 실행되는 파일로

-   전체 페이지의 공통적인 레이아웃
-   전역 상태를 관리하는 store
-   global Style
-   transition
    등과 같이 요청한 페이지의 URL과 상관없이 모든 페이지를 감싸야하는 것들을 관리하는 파일입니다.

## \_document.js

`Next.js`의 root document로 content들을 브라우저가 `HTML`로 이해하도록 구조화 시켜주는 곳입니다.
Main 컴포넌트에서는 \_app.js에서 만들어진 컴포넌트가 전달되어 구성하게 됩니다.

document.js와 app.js는 처음 SSR시에만 사용되는 server only file이기 때문에 **window**객체에 접근하여 사용하는 것은 불가능하다. 접근 시 `window is not defined` 오류가 발생

## Next.js SSR Cycle

1. Frontend Server에서 GET 요청을 받는다
2. 요청에 맞는 page를 찾는다
3. \_app.js(next.js 사용시 최초로 실행되는 파일)의 **getInitialProps**가 있다면 실행
4. Page Component 안에 **getInitialProps**가 있다면 실행
5. \_document.js의 **getInitialProps**가 있다면 실행
6. 모든 props를 구성하고 \_app.js > Page Component 순으로 렌더링
7. 모든 콘텐츠를 구성하고 \_document.js를 실행하여 html형태로 출력
