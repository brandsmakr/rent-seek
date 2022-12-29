import API from "../utils/api";

const leaveContactQuery = (data) => {
  return API.post("/contact/addContactQuery", { ...data }).then((response) => {
    return response.data;
  });
};

const getAllContactQuery = (user_id)=>{
  return API.get(`/contact/getContacts/${user_id}`).then((response) => {
    return response.data;
  });
}

const ContactService = {
  leaveContactQuery,
  getAllContactQuery
};

export default ContactService;
