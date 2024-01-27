//learning about react reusable forms
//Module 5 part

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import NormalForm from "./components/NormalForm/NormalForm";
import { Form, FormSection, FormSubmit, Input } from "./components/ReuseableForm";
import Container from "./components/ui/Container";
import { z } from "zod";

const App = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<TTest>();

  const onSUbmit = (data: FieldValues) => {
    console.log(data);
  }
  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });
  type TTest = z.infer<typeof TestSchema>;
  return (
    <Container>
      {/* <NormalForm/> */}
      <Form double={true} onSubmit={handleSubmit(onSUbmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">Name</label>
            <input
              type="text" id="name"
              {...register('name')} />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <Input
            type='email'
            register={register('email')}
            errors={errors} label={'Email'} />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
};

export default App;


//Module 4 part

// import { useState } from "react";
// import Button from "./components/ui/Button";
// import Container from "./components/ui/Container";
// import Modal from "./components/ui/Modal";

// function App() {
//   const [modal,setModal] = useState(false);
//   const handleModalClose = () => {
//     setModal((prev) => !prev);
//   }
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//     if(true){
//       handleModalClose();
//     }
//   }
//   return (
//     <Container>
//       <div className="h-screen w-full flex justify-center items-center">
//         {/* <h1>This is a h1 tag</h1>
//       <h2>This is a h1 tag</h2>
//       <h3>This is a h1 tag</h3>
//       <button className="btn btn-primary">This is a button</button>
//       <button className="btn py-2 btn-danger">This is a button</button> */}
//         <div className="w-96 border border-red-500 p-10">
//           <Button onClick={() => setModal(prev=> !prev)}
//            variant="outline" className="w-full">Open Modal</Button>
//           <Modal isOpen={modal} onClose={handleModalClose}>
//             <h1 className="text-2xl">This is a modal</h1>
//             {/* <Modal.CloseButton onClick={handleModalClose}>
//               Children Button
//             </Modal.CloseButton> */}
//             <Modal.Header>
//               <h1>This is Modal title</h1>
//             <Modal.CloseButton>
//             </Modal.CloseButton>
//             </Modal.Header>
//             <form onSubmit={handleSubmit}>
//               <input type="text" />
//               <button type="submit">Submit</button>
//             </form>
//           </Modal>
//         </div>
//       </div>
//     </Container>
//   );
// }
// export default App

