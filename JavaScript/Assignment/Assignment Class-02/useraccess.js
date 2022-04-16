// A project for user access 

let name = prompt('Your Name');
let age = prompt('Your Age');

if( age >= 20 && age <= 35 ){
    console.log(` Hi ${ name }, You Are Wellcome To Join The Party. `);
}else{
    console.log(` Hi ${ name }, We Are Sorry. You Can't Join The Party. `);
}

