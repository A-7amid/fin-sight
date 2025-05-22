// import React from "react";
// import { useForm } from "react-hook-form";

// const Demo = () => {
//   const { register, handleSubmit, getValues } = useForm({
//     defaultValues: {
//       firstName: "Grace",
//       lastName: "Hopper",
//       username: "GrandmaCOBOL",
//     },
//   });

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name</label>
//       <input name="firstName" type="text" ref={register} />
//       <label>Last Name</label>
//       <input name="lastName" type="text" ref={register} />
//       <label>Username</label>
//       <input name="username" type="text" ref={register} />
//       <input type="submit" />
//       <button
//         type="button"
//         onClick={() => {
//           alert(JSON.stringify(getValues()));
//         }}
//       >
//         Alert All Values
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           alert(JSON.stringify(getValues("firstName")));
//         }}
//       >
//         Alert First Name
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           alert(JSON.stringify(getValues(["firstName", "lastName"])));
//         }}
//       >
//         Alert First & Last Name
//       </button>
//     </form>
//   );
// };

// export default Demo;
