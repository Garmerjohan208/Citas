import { Citas } from "./types";

const citas: Citas = require("../data/citas.json");

export function getCitas(id: number): Citas {
    const cita = citas.Citas.find(citas => cita.id === cita)
    if (!cita){
        throw new Error("no existe la cita")
    }

    return cita
}