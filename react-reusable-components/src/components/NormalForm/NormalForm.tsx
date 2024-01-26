import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const double = true;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
            className={cn("w-full p-5 mx-auto border border-red-500", {
                "max-w-5xl": double,
                "max-w-md": !double,
            })}>
            <div className={cn("border border-green-500 grid grid-cols-1 justify-items-center gap-5", {
                "md:grid-cols-2": double,
            })}>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Name</label>
                    <input className="w-full border
                     border-gray-300 rounded-md
                     focus:border-purple-500
                     focus:ring-2 focus:ring-purple-200"
                     type="text" id="name"
                     {...register('name')} />
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Email</label>
                    <input className="w-full" type="text" id="name" {...register('name')} />
                </div>
                <div className="w-full max-w-md">
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