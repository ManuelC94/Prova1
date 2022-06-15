export interface Prodotto {
    id: number;
    nome: string;
    marca: string;
    prezzo: number;
    descrizione: string;

}

export const prodotti = [
    {
        id: 1,
        nome: "scarpe",
        marca: "nike",
        prezzo: 100,
        descrizione: "Fantastiche sia per la corsa che per la palestra"
    },
    {
        id: 2,
        nome: "Tv",
        marca: "Samsung",
        prezzo: 600,
        descrizione: "Colori accesi e brillanti"
    },
    {
        id: 3,
        nome: "Camicia",
        marca: "Nuvolari",
        prezzo: 60,
        descrizione: "Perfetta per l'estate, completamente in lino"
    },
    {
        id: 4,
        nome: "Felpa",
        marca: "Adidas",
        prezzo: 40,
        descrizione: "Felpa con zip e cappuccio alla moda"
    },
    {
        id: 5,
        nome: "Cuffie",
        marca: "Logitech",
        prezzo: 40,
        descrizione: "Audio 3D per una completa immersione"
    }
];