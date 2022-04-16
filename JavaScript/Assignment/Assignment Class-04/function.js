

/**
 *    1. Man Define by age calculation.
 *    =================================
 */

function manDefine(name,age){


    let man = '';

    if( age >= 0 && age < 5 ){
        man = 'Children'
    }else if( age >= 5 && age < 18 ){
        man = 'Teenagers'
    }else if( age >= 18 && age < 40 ){
        man = 'Young-Man'
    }else if( age >= 40 ){
        man = 'Old-Man'
    }else{
        'Invalid'
    }


    console.log(`
    
        Hi ${name}, You are a ${man}.

    `);
}



/**
 *      2. Formula.
 *      ===========
 */
    /* (i) A function that will return the area of a rectangle.
    -----------------------------------------------------------*/

    function rectangle(name, lenght, width){

        let area = '';

        if( name = 'rectangle'){
            area = lenght * width;
        }else{
            area = 'Invalid';
        }

        console.log(`
        
            This ${name} area is ( Lenght = ${lenght} x width = ${width}) = ${area} square meter.
        
        `);
    }


    /* (ii) A function that will return the area of a square.
    -----------------------------------------------------------*/

    function square(name, arm1, arm2){


        let area = '';

        if( name = 'square' ){
            area = arm1 * arm2 ;
        }else{
            area = 'Invalid.'
        }

        console.log(`

        This ${name} area is ( 1st-Arm = ${arm1} x 2nd-Arm = ${arm2}) = ${area} square unit.

        `);
    }



     /* (iii) A function that will return the area of a triangle.
    -----------------------------------------------------------*/

    function triangle(name, land, height){


        let area = '';

        if( name = 'triangle' ){
            area = .5 * land * height ;
        }else{
            area = 'Invalid.'
        }

        console.log(`

        This ${name} area is ( land = ${land} x height = ${height}) = ${area} square meter.

        `);
    }



/**
 *    3. Result Calculation.
 *    ======================
 */
    function gpaCal(marks){


        let gpa = '';


        if( marks >= 0 && marks < 33 ){
            gpa = 0;
        }else if( marks >= 33 && marks < 40 ){
            gpa = 1;
        }else if( marks >= 40 && marks < 50 ){
            gpa = 2;
        }else if( marks >= 50 && marks < 60 ){
            gpa = 3;
        }else if( marks >= 60 && marks < 70 ){
            gpa = 3.5;
        }else if( marks >= 70 && marks < 80 ){
            gpa = 4;
        }else if( marks >= 80 && marks <= 100 ){
            gpa = 5;
        }else{
            gpa = 'Invalid-result'
        }

        return gpa;

    }

   
    
    function gradeCal(marks){


        let grade = '';


        if( marks >= 0 && marks < 33 ){
            grade = 'F';
        }else if( marks >= 33 && marks < 40 ){
            grade = 'D';
        }else if( marks >= 40 && marks < 50 ){
            grade = 'C';
        }else if( marks >= 50 && marks < 60 ){
            grade = 'B';
        }else if( marks >= 60 && marks < 70 ){
            grade = 'A-';
        }else if( marks >= 70 && marks < 80 ){
            grade = 'A';
        }else if( marks >= 80 && marks <= 100 ){
            grade = 'A+';
        }else{
            grade = 'Invalid-result'
        }

        return grade;

    }




/**
 *    4. Age calculation function.
 *    ===========================
 */
 function ageCal(name, byear){

    let age = '';
    byear <=  2022 ? age = 2022 - byear : 'Invalid';
    return age;

    
}
  




/**
 *    5. BMI Calculation function.
 *    ===========================
 */


function getBmi(name, weight, height){

    let bmi = weight % (height = height * height);


    let status = '';

    if( bmi < 18.5 ){
        status = 'Under-Weight'
    }else if( bmi >= 18.5 && bmi < 25 ){
        status = 'Normal-Weight'
    }else if( bmi >= 25 && bmi < 30 ){
        status = 'Over-Weight'
    }else if( bmi >= 30 && bmi < 35 ){
        status = 'Obesity Class 1'
    }else if( bmi >= 35 && bmi < 40 ){
        status = 'Obesity Class 2'
    }else if( bmi >= 40){
        status = 'Obesity Class 3'
    }else{
        status = 'Invalid'
    }

    console.log(`
    
        Hi ${name}, your BMI is = ${bmi} And Your health is ${status}.;
    
    `);

}





/**
 *    6. Currency Converter function.
 *    ===============================
 */

function currencyCal(amount, currency){

    let rate = '';

    if( currency == 'USD'){
        rate = 86.00;
    }else if( currency == 'CAD'){
        rate = 69.00;
    }else if( currency == 'POUND'){
        rate = 112.82;
    }else if( currency == 'EURO'){
        rate = 94.18;
    }

    let bdt = amount * rate;

    console.log(`
    
        ${amount} ${currency} = ${bdt} BDT.
    
    `);


}









