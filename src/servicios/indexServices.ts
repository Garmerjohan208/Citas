import indexData from '../../data/citas.json';
import { Citas } from '../types';

const citas: Array<Citas> = indexData as Array<Citas>;
export const getEntries = () => citas
export const addEntry = () => null