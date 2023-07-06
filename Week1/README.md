# [원티드] FE 프리온보딩 챌린지 1주차 과제
## 📌 과제 조건

### 과제 1) 사전 과제 3번 문제 보강해서 블로그에 작성하기
[Blog](https://j-tech-dev.tistory.com/98)

### 과제 2) React와 History API 사용하여 SPA Router 기능 구현하기
**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**
- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**
- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**
```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**
```tsx
const { push } = useRouter();
```

**5) 아래 스크린샷을 참고하여 앱을 작성한다.**

### 참고) **Vite 초기 세팅 ([링크](https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project))**
```bash
$> yarn create vite
# 실행 후 cli의 지시에 따라 react, react-ts 중 택일하여 초기 세팅할 것
```

- https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project
- Vite란?
    - 프랑스어로 ‘빠르다’는 뜻을 가진 자바스크립트 빌드 툴
    - 프로젝트 스캐폴딩 템플릿 지원하고, 설정이 매우 간단함(거의 불필요함)
    - CRA에 비해 프로젝트에 담긴 의존성 규모가 작아서 인스톨 시간에 대한 부담이 없음
    - **HMR 및 빌드 속도가 매우 빠름**

<br>

## 📌 과제 설명

#### 데모 영상
https://github.com/dmswn1004/WANTED-FE-CHALLENGE/assets/101851472/72c97134-db3e-407d-bbc9-b98021ae055b

#### 📁 파일 구조
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜Route.tsx
 ┃ ┗ 📜Router.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useRouter.tsx
 ┣ 📂pages
 ┃ ┣ 📜About.tsx
 ┃ ┗ 📜Root.tsx
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

- components : Router&Route 컴포넌트
- hooks : 커스텀 hook
- pages 폴더 : 라우터로 랜더링되는 페이지 컴포넌트

#### 🔎 코드 설명
> Router.tsx
```tsx
interface RouterProps {
    children: React.ReactNode;
}

const Router = ({ children }: RouterProps) => {
    const [path, setPath] = useState(location.pathname);

    const routes = React.Children.toArray(children) as React.ReactElement<RouteProps>[];

    useEffect(() => {
        const handleSetPath = () => {
            setPath(window.location.pathname)
        };

        window.addEventListener('popstate', handleSetPath);

        return () => {
            window.removeEventListener('popstate', handleSetPath);
        };
    }, []);

    return routes.find((route) => route.props.path === path);

}

export default Router;
```

Router 컴포넌트는 현재 경로에 따라 적절한 컴포넌트를 렌더링 하는 역할을 합니다.
useEffeat 훅을 사용해 useRouter 커스텀 훅에서 보낸 **popstate 이벤트**를 감지해, 이벤트 발생 시 현재 경로를 업데이트합니다.

> Route.tsx
```tsx
export interface RouteProps {
    path: string;
    component: React.ReactNode;
}

const Route = ({ path, component }: RouteProps) => {
    return window.location.pathname == path? <div>{component}</div> : null;
}

export default Route;
```

Route 컴포넌트는 path와 component를 받아 현재 경로와 일치하는 경우, 해당 컴포넌트를 렌더링하고, 그렇지 않은 경우 null을 반환합니다.

> useRouter.tsx
```tsx
const useRouter = () => {
    const push = (path: string):void => {
        window.history.pushState(null, '', path)
        window.dispatchEvent(new PopStateEvent("popstate"));
    };
    
    return { push };
}

export default useRouter;
```

useRouter 커스텀 훅의 push 함수는 문자열 path를 받아서 window.history.pushState를 통해 URL을 변경합니다. 그리고 window.dispatchEvent를 사용해 **popstate 이벤트**를 발생시켜 Router 컴포넌트에서 이벤트를 감지하고 경로 전환을 통해 적절한 페이지를 렌더링 할 수 있도록 합니다.
