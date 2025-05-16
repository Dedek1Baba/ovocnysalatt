export const getAllFurnitures = async () => {
    const req = await fetch(`http://localhost:3000/furnitures`, {
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
export const getFurnitureById = async (id) => {
    const req = await fetch(`http://localhost:3000/furnitures${id}`, {
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
export const createFurniture = async (formData) => {
    const req = await fetch(`http://localhost:3000/furnitures`, {
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
export const updateFurniture = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/furnitures${id}`, {
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
export const deleteFurniture = async (id) => {
    const req = await fetch(`http://localhost:3000/furnitures${id}`, {
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