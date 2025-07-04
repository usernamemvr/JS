const image = document.getElementById("qrcode");
const input = document.getElementById("inputortext")
const apiURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


console.log(input)
async function create(){
    try{
        if(input.value === '') throw new Error("Bruv enter something!!");
        const response = await fetch( apiURL + input.value.trim());
        if(response.ok){
            const blob = await response.blob();
            image.src = URL.createObjectURL(blob);
            image.style.display = "block";
        } else image.style.display = "none";
    }
    catch(error){
        console.log(error);
    }
}