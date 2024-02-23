import axios from 'axios';

///consumir la api 
let API_URL = 'http://localhost:8080/api/vehiculos';

/*
   private @Id @GeneratedValue Long id;
   private String brand, model, serie;
   private int year;
*/

const obtenerVehiculo = async (brand, model, serie /* year*/) => {
   const vehiculo = {
      brand: brand,
      model: model,
      serie: serie,
   };
   try {
      const response = await axios.post(API_URL, { vehiculo });

      return response.data;
   } catch (error) {
      throw error;
   }
};

export default {
   obtenerVehiculo,
};