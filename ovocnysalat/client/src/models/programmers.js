export const getAllProgrammers = async () => {
    const req = await fetch(`http://localhost:3000/programmers`, {
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
         },
         method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload,
    }
}
export const getProgrammerById = async (id) => {
    const req = await fetch(`http://localhost:3000/programmers${id}`, {
        headers: {
           Accept: "application/json",
           "Content-Type": "application/json"
        },
        method: "GET",
   });
   const data = await req.json();
   return {
       status: req.status,
       message: data.message,
       payload: data.payload,
   }
}
export const createProgrammer = async (formData) => {
    const req = await fetch(`http://localhost:3000/programmers`, {
        headers: {
           Accept: "application/json",
           "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
   });
   const data = await req.json();
   return {
       status: req.status,
       message: data.message,
       payload: data.payload,
   }
}
export const updateProgrammer = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/programmers${id}`, {
        headers: {
           Accept: "application/json",
           "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
   });
   const data = await req.json();
   return {
       status: req.status,
       message: data.message,
       payload: data.payload,
   }
}
export const deleteProgrammer = async (id) => {
    const req = await fetch(`http://localhost:3000/programmers${id}`, {
        headers: {
           Accept: "application/json",
           "Content-Type": "application/json"
        },
        method: "DELETE",
   });
   const data = await req.json();
   return {
       status: req.status,
       message: data.message,
       payload: data.payload,
   }
}