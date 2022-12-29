import API from "../utils/api";

const addRentRequest = (data) => {
  return API.post("/rent/req-for-rent", { ...data }).then((response) => {
    return response.data;
  });
};

const RentService = {
  addRentRequest,
};

export default RentService;
