import {useQuery} from '@tanstack/react-query';
import { getServices } from "@/api/admin/services/service.api";

const ServiceList = () => {
    // const [data,setData] = useState([]);
    // const [error,setError] = useState(null);
    // const [loading,isLoading] = useState(false);
    // const getData = async () =>{

    // }
    // useEffect(()=>{
    //     fetch('http://localhost:5000/api/v1/services')
    //     .then(res => res.json())
    //     .then(data => setData(data?.data)) 
    // },[])

   

    const {data,isLoading,isError} = useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    })
    if(isLoading){
        return <p>Loading...</p>
    }
    console.log(data,isLoading,isError);
    
    if(isError){
        return <p>Something went wrong</p>
    }
    return (
        <div>
            {
                data?.data?.map(item=><h1>
                    {item.name}
                </h1>)
            }
        </div>
    );
};

export default ServiceList;