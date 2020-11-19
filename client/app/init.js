import { getAllPetsHandler } from "./get-all-pets-handler.js";
import { getAllDogsHandler } from "./get-dogs-handler.js";
import { getAllCatsHandler } from "./get-cats-handler.js";
import { deletePetHandler } from "./delete-pet-handler.js";
import { addPetHandler } from "./add-pet-handler.js";

document.getElementById('get-pets')
    .addEventListener('click', getAllPetsHandler);
document.getElementById('get-dogs')
    .addEventListener('click', getAllDogsHandler);
document.getElementById('get-cats')
    .addEventListener('click', getAllCatsHandler);
document.getElementById('container')
    .addEventListener('click', deletePetHandler)
document.getElementById('add-pet')
    .addEventListener('click', addPetHandler);