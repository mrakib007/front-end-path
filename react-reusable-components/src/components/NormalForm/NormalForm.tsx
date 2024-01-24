import { useForm } from "react-hook-form";

const NormalForm = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}> 
           <label htmlFor="name">Name</label>
           <input type="text" id="name" {...register('name')}/>
           <button type="submit">Submit</button>
        </form>
    );
};

export default NormalForm;