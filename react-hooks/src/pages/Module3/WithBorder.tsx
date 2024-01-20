const withBorder = (WrappedComponent) => {
    return (props) => (
        <div className="border-2 border-purple-500 rounded-full bg-slate-500">
            <WrappedComponent {...props}/>
        </div>
    );
}
export default withBorder;