// import useData from "./useData";
import data from '../components/Data/data'

interface Platform{
    id:number;
    name:string;
    slug:string;
}

const usePlatform = () => ({ data: data, isLoading: false, error: null });

export default usePlatform;