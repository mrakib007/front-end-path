import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

const AddService = () => {
    const [serviceName,setServiceName] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const serviceData = {
            name: serviceName,
            description: 'Replace any dead chips',
            devices: ['Macbook Pro', 'Macbook Air', 'Macbook', 'iMac', 'Mac Pro', 'Mac Mini'],
            price: 1000,
        }
        console.log(serviceData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setServiceName(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddService;