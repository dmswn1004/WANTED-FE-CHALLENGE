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

- hooks : 커스텀 hook
- pages 폴더 : 라우터로 랜더링되는 페이지 컴포넌트

#### 🔎 코드 설명
**1. 라우터 설정**
최신 버전의 react-router-dom 설치 (React Router v6)
```bush
npm install react-router-dom --save
```

**2. setting**
> main.tsx
```tsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

> App.tsx
```tsx
import { Route, Routes } from 'react-router-dom';
import Root from './pages/Root'
import About from './pages/About';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
```

**3. 코드 설명**
- useRouter 훅
```tsx
import { useNavigate } from 'react-router-dom';

const useRouter = () => {
    const navigate = useNavigate();

    const push = (path: string):void => {
        navigate(path);
    };
    
    return { push };
}
```

push 함수는 매개변수로 받은 path를 사용해 페이지를 전환합니다. <br>
useNavigate 함수를 호출해 전달받은 path, 즉 페이지 전환을 원하는 경로로 페이지가 전환됩니다.

> Root.tsx
```tsx
import useRouter from '../hooks/useRouter';

const Root = () => {
    const { push } = useRouter();

    return (
        <div>
            <h1>Root</h1>
            <button onClick={()=>(push('/about'))}>about</button>
        </div>
    )
}

export default Root;
```

useRouter를 통해 가져온 push 함수를 사용하여 페이지 전환을 수행합니다. <br>
