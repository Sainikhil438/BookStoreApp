import axios from "axios";



let token;
function Authorize()
{
    return token = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("AccessToken")}`
        }
    }
}

export const RetrieveBooks = async () => {
    let response = await axios.get(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",Authorize());
    return response;
};