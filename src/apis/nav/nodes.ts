import {AxiosResponse} from "axios";
import {Node} from "../../types/navs/nodes";
import axios from 'axios';

export function getNodes(): Promise<AxiosResponse<Node[]>> {
    return axios.get('/api/v1/nodes');
}
