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
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl
        p-5 mx-auto border border-red-500">
            <div className="border border-green-500 grid grid-cols-2 gap-5">
                <div className="w-full">
                    <label className="block" htmlFor="name">Name</label>
                    <input className="w-full" type="text" id="name" {...register('name')} />
                </div>
                <div className="w-full">
                    <label className="block" htmlFor="name">Email</label>
                    <input className="w-full" type="text" id="name" {...register('name')} />
                </div>
                <div className="w-full">
                    <label className="block" htmlFor="name">Password</label>
                    <input className="w-full" type="text" id="name" {...register('name')} />
                </div>
            </div>
            {/* <select>
            <option value="1">1</option>
            <option value="2">2</option>
          </select> */}
            {/* <button type="submit">Submit</button> */}
        </form>
    );
};

export default NormalForm;