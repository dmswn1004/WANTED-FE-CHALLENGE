import { useNavigate } from 'react-router-dom';

const useRouter = () => {
    const navigate = useNavigate();

    const push = (path: string):void => {
        navigate(path);
    };
    
    return { push };
}

export default useRouter;