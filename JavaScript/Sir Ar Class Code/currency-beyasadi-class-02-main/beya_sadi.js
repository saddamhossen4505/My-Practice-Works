

let name = prompt('Name');
let age = prompt('Age');
let gender = prompt('Gender');
 
 
let beyar_age = 0;
let somman = '';

if( gender == 'Male' ){
    beyar_age = 21;
    somman = 'Vaiyaaaa';
}else if( gender == 'Female' ){
    beyar_age = 18;
    somman = 'Apuuuuuuu';

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