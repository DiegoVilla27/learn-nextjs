import axios from "axios";
import { environments } from '../environments';

export const getPokemonsSvc = () => axios.get(`${environments.API_URL}/pokedex/2`);
export const getPokemonByNameSvc = (name) => axios.get(`${environments.API_URL}/pokemon/${name}`);
