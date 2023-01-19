const password = process.argv[2] // first to indeces are not relevant to the script 

if(password != undefined){
    
    if (password.length > 12) {
        console.log("Too short");        
    } else if(password.length < 8) {
        console.log("too short");
    } else{
        console.log("Just right!");
    }

}