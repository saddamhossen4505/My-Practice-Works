

let name = prompt('Name');
let age = prompt('Age');
let gender = prompt('Gender');
  
 
let beyar_age = 0;
let somman = '';


switch(gender){

    case 'Male' :
        beyar_age = 21;
        somman = 'Vaiyaaaa';
        break;

    case 'Female' :
        beyar_age = 18;
        somman = 'Apuuuuuuu';
        break;


}





if( age >= beyar_age ){
    console.log(`

        Hi ${ name } ${ somman }, Apni beyar jono prostot hon

    `);

}else{

    console.log(`

        Hi ${ name } ${ somman }, Apni wait koren 

    `);

}