import axios from "axios"; 

// Acá se hacen las solicitudes al backend

// Acá falta resolver las distintas respuestas de REST, para cuando la respuesta es 200 o 500 o 404, etc...

const API_URL = "http://localhost:8080/catalogo"

export const productoService = {

    getCatalogo: async () => {
        // así se consigue todo usando axios
        return axios.get(API_URL);
    },

    getProducto: (id) => axios.get(`${API_URL}/${id}`),


    // data es el usuario o mas que el usuario
    createProducto: (data) => axios.post(API_URL, data),


    updateProducto: async (id, data) => {
        return axios.put(`${API_URL}/${id}`, data);
    },

    deleteProducto: async (id) => {
        return axios.delete(`${API_URL}/${id}`);
    }
};