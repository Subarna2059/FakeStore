import { axiosInstance } from "../utils/APICalls"

export const addProduct = async(reqData) => {
    const response = await axiosInstance.post("/products",reqData);
    const data = await response.data;
    return data;
}