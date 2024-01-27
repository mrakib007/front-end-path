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
                    <input
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
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Select</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Select</label>
                    <textarea />
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Select</label>
                    <input
                        className="
                    border
                     border-gray-400 rounded-md
                      checked:bg-purple-500
                      hover:bg-purple-500
                      focus:bg-purple-500
                      focus:border-purple-500
                      focus:ring-purple-500
                      focus:ring-1" type="checkbox" />
                </div>

            </div>
            {/* <button type="submit">Submit</button> */}
        </form>
    );
};

export default NormalForm;