import axiosInstance from "../AxiosInstance/axiosInstance";
import { endpoints } from "../Endpoints/EndPoints";

export const customerContact = async (contomerData) => {
  try {
    const response = await axiosInstance.post(
      endpoints.cms.contact,
      contomerData
    );
    console.log(response);
    return response?.data;
  } catch (error) {
    return error;
  }
};
