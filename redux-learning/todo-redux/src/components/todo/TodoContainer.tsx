import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
    //From Local State.
    const { todos } = useAppSelector((state) => state.todos);

    //From server
    const { data, isLoading, isError } = useGetTodosQuery(undefined);

    if(isLoading) return <p>Loading...</p>
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-primary-gradient p-[5px] w-full h-full rounded-xl">
                <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
                    {
                        todos?.data?.map((item) => <TodoCard {...item} />)
                    }
                </div>
                {/* <div className="bg-white flex justify-center items-center rounded-md p-5 text-2xl font-bold">
                    <p>There is no tas pending</p>
                </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;