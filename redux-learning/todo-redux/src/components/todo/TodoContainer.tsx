import TodoCard from "./TodoCard";

const TodoContainer = () => {
    return (
        <div>
            <div>
                <button>Add todo</button>
                <button>Filter</button>
            </div>
            <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
                {/* <div className="bg-white flex justify-center items-center rounded-md p-5 text-2xl font-bold">
                    <p>There is no tas pending</p>
                </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;