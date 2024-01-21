import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {

  return (
   <Container>
    <div className="h-screen w-full flex justify-center items-center">
      {/* <h1>This is a h1 tag</h1>
      <h2>This is a h1 tag</h2>
      <h3>This is a h1 tag</h3>
      <button className="btn btn-primary">This is a button</button>
      <button className="btn py-2 btn-danger">This is a button</button> */}
      <Button className='bg-red-500'/>
    </div>
   </Container>
  );
}
export default App
