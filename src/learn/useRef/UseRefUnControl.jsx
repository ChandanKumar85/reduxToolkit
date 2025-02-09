import React, { useRef } from "react";

function UseRefComp() {
  const formRef = useRef({});
  function submitHandle(e) {
    e.preventDefault();
    console.log(
      "First Name:",
      formRef.current.firstName?.value,
      "Last Name:",
      formRef.current.lastName?.value,
      "Password:",
      formRef.current.password?.value
    );
  }
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        name="firstName"
        formRef={(el) => (formRef.current.firstName = el)}
      />
      <input
        type="text"
        name="lastName"
        ref={(el) => (formRef.current.lastName = el)}
      />
      <input
        type="text"
        name="password"
        ref={(el) => (formRef.current.password = el)}
      />
      <button>Submit</button>
    </form>
  );
}

export default UseRefComp;

//
//
//
//
//
//
//
//
//
//

// import React, { useRef } from "react";

// function UseRefComp() {
//   const firstNameRef = useRef();
//   const lastNameRef = useRef();
//   const passwordRef = useRef();
//   function submitHandle(e) {
//     e.preventDefault();
//     console.log(
//       firstNameRef.current.value,
//       lastNameRef.current.value,
//       passwordRef.current.value
//     );
//   }
//   return (
//     <form onSubmit={submitHandle}>
//       <input type="text" ref={firstNameRef} />
//       <input type="text" ref={lastNameRef} />
//       <input type="text" ref={passwordRef} />
//       <button>Submit</button>
//     </form>
//   );
// }

// export default UseRefComp;

//
//
//
//
//
//
//
//
//
//

// import React, { useRef } from "react";
// import { useState } from "react";

// export default function UseRefComp() {
//   const [name, setName] = useState("");
//   const inputRef = useRef();

//   function handleSubmit(event) {
//     event.preventDefault();
//     inputRef.current.value = "Hello";
//     inputRef.current.focus();
//     inputRef.current.style.color = "red";
//     inputRef.current.style.borderColor = "pink";
//     inputRef.current.style.backgroundColor = "pink";
//   }

//   return (
//     <form onSubmit={submitHandle}>
//       <input
//         type="text"
//         ref={inputRef}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button>Submit</button>
//     </form>
//   );
// }

//
//
//
//
//
//
//
//
//
//

// import React, { useRef } from "react";

// export default function UseRefComp() {
//   const boxRef = useRef();
//   const boxStyle = {
//     width: "140px",
//     height: "140px",
//     borderColor: "black",
//     borderWidth: "1px",
//     borderStyle: "solid",
//     color: "black",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };
//   function clickHandle(event) {
//     event.preventDefault();
//     boxRef.current.style.borderColor = "red";
//     boxRef.current.style.color = "red";
//   }
//   return (
//     <div>
//       <div ref={boxRef} style={boxStyle}>
//         Hello
//       </div>
//       <button onClick={clickHandle}>Click for box</button>
//     </div>
//   );
// }
