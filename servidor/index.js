const expressvar = require("express");
const app = expressvar();
const cors = require ("cors");

const Port = 3000;

app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE"],
    }

));

    const final = [
        {
            clase: "guerrero",
            atributos: {
                fuerza: 15,
                destreza: 20,
                inteligenia: 10,
                carisma: 13,
                suerte: 8
            },
            armas:["hacha", "espada", "escudo"]	
        },
        {
            clase: "paladin",
            atributos: {
                fuerza: 14,
                destreza: 15,
                inteligenia: 16,
                carisma: 20,
                suerte: 12
            },
            Armas:["baculo", "espada", "escudo"]
        },
        {
            clase: "NINJA",
            atributos: {
                fuerza: 19,
                destreza: 17,
                inteligenia: 19,
                carisma: 11,
                suerte: 22
            },
            Armas:["shuriken", "chakos", "katana"]
        }
    ];


    app.get("/", (req, res) => {
        res.json(final);
    })

    for (let i = 0; i < final.length; i++) {
        app.get("/"+ final[i].nombre, (req, res) => {
                res.json(final[i]);

        })

    }

    app.listen(Port, () => { console.log("escuchando") });
