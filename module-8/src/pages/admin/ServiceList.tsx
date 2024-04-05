import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import { getServices } from "@/api/admin/services/service.api";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import { Trash2 } from 'lucide-react';
import { useGetServices } from '@/api/admin/services/service.hook';
import { FormEvent, useState } from 'react';

const ServiceList = () => {
    const [serviceName, setServiceName] = useState('');
    const queryClient = useQueryClient();

    const { mutateAsync, isError: postError, isSuccess } = useMutation({
        mutationFn: async (data) => {
            return await fetch('http://localhost:5000/api/v1/services', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            )
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['services'] })
        }
    })
    console.log(postError, isSuccess);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const serviceData = {
            name: serviceName,
            description: 'Replace any dead chips',
            devices: ['Macbook Pro', 'Macbook Air', 'Macbook', 'iMac', 'Mac Pro', 'Mac Mini'],
            price: 1000,
        }
        console.log(serviceData);
        await mutateAsync(serviceData);
        console.log('done')
    }
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



    const { data: services, isLoading, isError } = useGetServices();
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Something went wrong</p>
    }

    // const services = data?.data?.map(item => ({
    //     id: item._id,
    //     name: item.name,
    //     description: item.description,
    //     price: item.price
    // }))
    return (
        <Container className='mt-20 border p-0 rounded-2xl'>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell className="font-medium">{service.name}</TableCell>
                            <TableCell>{service.description}</TableCell>
                            <TableCell>{service.price}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="destructive" className='p-2'>
                                    <Trash2 />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total Services</TableCell>
                        <TableCell className="text-right">{services.length}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setServiceName(e.target.value)} />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </Container>
    );
};

export default ServiceList;