import axios from "axios";

const studentApi = axios.create({
    baseURL: "http://localhost:8081"
});

export default studentApi;