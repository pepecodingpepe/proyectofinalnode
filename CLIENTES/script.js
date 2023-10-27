var data;

function Conexion(){
    const api= "http://localhost:3000/Perros" 
    fetch(api,
    {
        method: "GET",
        headers: {
            "authorization" : "A1C2E3"
        }
    }    
    ).then(response => response.json())
    .then(json => {
        console.log(json);
        data = json;
    })

}

function Show(){
    
    var main = document.getElementById("Muestra");
    main.innerHTML = data.Id;

}