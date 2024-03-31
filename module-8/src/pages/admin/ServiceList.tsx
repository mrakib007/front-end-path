import { useEffect, useState } from "react";

const ServiceList = () => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,isLoading] = useState(false);
    const getData = async () =>{

    }
    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/services')
        .then(res => res.json())
        .then(data => setData(data?.data)) 
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ServiceList;