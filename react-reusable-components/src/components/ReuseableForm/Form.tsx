import { createContext } from "react";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{double: boolean} | null>(null);

export const Form = ({ children, onSubmit, double }) => {
    return (
        <FormElementContext.Provider value={{double}}>
        <div>
            <form onSubmit={onSubmit}
                className={cn("w-full p-5 mx-auto border border-gray-300 rounded-lg shadow-sm", {
                    "max-w-5xl": double,
                    "max-w-md": !double,
                })}>
                {children}
            </form>
        </div>
        </FormElementContext.Provider>
    );
};