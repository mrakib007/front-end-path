import MainLayout from "./components/layout/MainLayout";
import Container from "./components/ui/Container";

function App() {

  return (
   <Container>
    <div className="h-screen w-full flex justify-center items-center">
      <button className="px-3 py-2 bg-purple-500 rounded-md">This is a button</button>
      <button className="px-3 py-2 bg-purple-500 rounded-md">This is a button</button>
    </div>
   </Container>
  );
}
export default App
