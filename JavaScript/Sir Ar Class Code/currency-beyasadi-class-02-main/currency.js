

let amount = prompt('Amount');
let currency = prompt('Currency'); 


let rate = 0; 


  
if( currency == 'USD' ){    
    rate = 86;
}else if( currency == 'CAD' ){ 
    rate = 68;
}else if( currency == 'Pound' ){
    rate = 114; 
}else if( currency == 'Euro' ){ 
    rate = 99;
}

let bdt  = parseInt(amount) *  rate;

console.log(`

    ${ amount } ${ currency } = ${ bdt } BDT


`);
