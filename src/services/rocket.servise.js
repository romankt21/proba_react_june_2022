import {urls} from "../configs/urls";
import {axiosService} from "./axios.service";

const rocketServise = {
    getAll: () => axiosService.get(urls.rockets)
}

export {rocketServise};







