


// let a=9
// if(a%2==0){
//     console.log("it is even");
// }
// else{
//     console.log("it is odd")
// }

// a=[23,12,2,4,67,89,66]
// s=0
//     for(i=0;i<Array.length;i++){
// s=a+a[i]+""
// console.log(s)
//     }

// function max(a)
// Math.max.app\


// function greatest(a,b,c){
// if(a>b,c){
//     console.log("a is the greatest")
// }else if(b>a,c){
//     console.log("b is the  greatest")

// }else if (c>a,b){
//     console.log("c is the greatest")
// }
// }
// greatest (5,2,8)



// function isCharacterALetter(char) {
//     return (/[a-zA-Z]/).test(char)
//   }
//   console.log(isCharacterALetter("s"))

//------------------------------------------//

//Write a program to find the Sum of Array Elements.


// var a=[1,2,3,4,4]
// sum=0

//   for(i=0;i<a.length;i++){
     
//     sum=sum + a[i]
//   }


// console.log(sum)

//------------------------------------------//

//Write a program to find the maximum number in an array using function

// let Array=[12,90,40,2,3,999]
// function maximum(array){
//   for (i=0;i<=array.length;i++){
    
//   }
// }

//------------------------------------------//
// var i=0
// for(i=1;i<=100;i++){
// if(i%3==0){
//   console.log("fizz")
// }
// else if(i%5==0){
//   console.log("buzz")
// }}

//------------------------------------------//

//) Write a program for swapping of two arrays

// a=[1,2,3,5,4,7,8];
// (a[1],a[2]=a[2],a[1])
// console.log(a)

//---------------------------------------//
//) ) Write a program to find area and circumference of circle

// function circlearea(r){
//   console.log(Math.PI*r*r)
// }
// circlearea(4)

// function circumference(r){
//   console.log(Math.PI*2*r)
// }
// circumference(4)

//----------------------------------------//

//Write a program to find Median of the given Array?



//Write a program to find the highest and the lowest number in array
// a=[1,5,8,9,4,0,30]
//  smallest= a[0]
//   largest=a[0]
// for(var i=0;i<a.length;i++){
//     if (a[i]>largest){
//          largest=a[i]
//     }else if (a[i]<smallest){
//         smallest =a[i]
//     }
// }

// console.log(largest)
// console.log(smallest)
//--------------------------------------------------//
//Write a program to find Mean of given Array Elements?
// a=[1,2,3,4,5]
// sum=0
// for (i=0;i<a.length;i++){
//     sum= sum + a[i]
// }
// console.log(sum/a.length)
//-------------------------------------------//
// Write a program to find whether given number is an Armstrong number or not? ** (Narcissistic


//number or Pluperfect digital invariant (PPDI) or a Plus perfect number)

//Write a program to find whether given number is an Perfect number or not
// Write a program to check whether given character is vowel or consonant

// x="e"
// if(x=="a"||x=="e"||x=="i"||x=="o"||x=="u"){
// return ("x is vowel")
// }else if ("x is a consonant")

// console.log(x)
//-------------------------------------------------------------//
// Write a program to find the largest number among three numbers
// function largest(x,y,z){
// if(x==y==z){
//             return ("all are equal")
//         }else if(x>y,z){
//             return ("x is greater than y,z")
//         }else if(x<y,z){
//             return ("x is less than y,z")
//         }
    
//     }
//     console.log(largest(20,3,4))
//-----------------------------------------------------------//
// Write a program to find the roots of a quadratic equation
// function roots(){

// }


// Write a program to Check Whether the given year is a leap year or not
// function leapyear(){


// Write a program to check whether a number is a positive number or negative number?
// function number(i){
//     if (i >0){
//         console.log("it is positive")
//     }
//     else if(i<0){
//         console.log("it is negative")
//     }
// }

// number(-30)
//-----------------------------------------------------------------------------------//
// Write a program to Program to calculate the Combinations and Permutations?
//Combination means way of selecting a things or particular item into group or set?
//Write a program to find power of a number using recursion
//a=base and b=exponent
// function power(a,b){
//     if (b ==1){
//         return a
//     }else if (b == 0) {
//         return 1;
//     }else {
//         return a*power(a,b-1)
//     }
// }
// console.log(power(2,1))
//----------------------------------------------------------------------------//
//Write a program check whether given character is an alphabet or not

// function alphabet(a){

//     return (/[a-zA-Z]/).test(a)
// }
// console.log("b")
//-------------------------------------------------------------------------//
//Write a program to remove duplicate element in array

// arr=[1,2,3,4,4]
//---------------------------------------------------------//
//Write a program to find the Sum of Array Elements.
// arr=[2,5,67,8,43]
// sum=0
// for (let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)
//-------------------------------------------------------//
//Write a program to find power of a number using recursion
// function power(base, exp){
//     if (exp === 0) return 1;

//     let result = base;

//     result = result * power(base, exp - 1)

//     return result
// }
//-----------------------------------------------------//
//Write a program to add and subtract of given (NXN) Matrices

// import {MatrixInput,PrintMatrix} from './print_matrix.js'

// function MatrixSum(){
//     let MatrixA = MatrixInput('Matrix A')
//     // console.log(MatrixA)
//     console.log(`Matrix A is : `)
//     PrintMatrix(MatrixA)

//     let MatrixB = MatrixInput('Matrix B')
//     // console.log(MatrixB)
//     console.log(`Matrix B is : `)
//     PrintMatrix(MatrixB)

//     if ((MatrixA.length === MatrixB.length) && (MatrixA[0].length === MatrixB[0].length)){
//         let Sum = new Array(MatrixA.length)
//         for (let i=0;i<Sum.length;i++){
//             Sum[i]= new Array(MatrixA[0].length)
//         }

//         for (let i=0;i<Sum.length;i++){
//             for (let j=0;j<Sum[0].length;j++){
//                 Sum[i][j] = MatrixA[i][j] - MatrixB[i][j]
//         }
        
//     }
//     console.log(`The summation of the two matrices is: `)
//         PrintMatrix(Sum)
//     }else{
//         console.log('Matrix Addition is not possible')
//     }

// }
// MatrixSum()

//----------------------------------------------------------//
// Write a program to multiply given 2 (NXN) matrices
//---------------------------------------------------//
//57-87) Write the algorithm to produce as shown below patterns

// 1
// 12
// 123 
// 1234
// 12345
// 123456
// 1234567
// 12345678
// let a=''
// count=0
// for (let i=1;i<=8;i++){
//     a = a + i // ''+1
//     console.log(a)
    // count++
// }
// console.log(count)
//------------------------------------------------------//
// Iteration 1: i=1; 1<=8; ''+1; 1
// Iteration 2: i=2; 2<=8; '1'+2 ; '12'
// ...


// a = ''
// a = a+1 // ''+1 = '1'
// a=a+2 // '1' +2 = '12'
// console.log(a)

// 1
// 11
// 111
// 1111
// 11111
// a=''
// for (let i=1;i<=5;i++){
//     a = a + 1
//     console.log(a)
// }

//----------------------------------------------------------------------//
// * * * * *
// * * * *
// * * * 
// * *
// *

// a=''
// for (let i=5;i>=1;i--){
    
//     for (let j=i;j>=1;j--){
//         a = a+'* '
//         console.log(a)
//     }
//     a=''
// }

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+='  ' 
//     }
//     star += '* '
    
//     console.log(space,star)
// }

//-----------------------------------------------------------------//

//     *
//    **
//   ***
//  ****
// *****

// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+=' ' 
//     }
//     star += '*'
    
//     console.log(space,star)
// }

//------------------------------------------------------
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 

// star = ''
// for (var i=1; i<=5;i++){
//     space = ''
    
//     for (var j=1; j<=5-i; j++){
//         space+=' ' 
//     }
//     star += '* '
    
//     console.log(space,star)
// }
//-------------------------------------------------
// 54321
// 4321
// 321
// 21
// 1

// a=""
// for(i=5;i>=1;i--){
//     a=a+i
//     console.log(a)
// }

// ------------------------------------XXX-------------------------------------------
// a=""
// for(i=1;i<=5;i++){
//     a=''
//     for(k=i;k<=5;k++)
//     a=a+i
//     console.log(a)
// }

// 11111
// 2222
// 333
// 44
// 5

// ------------------------------------XXX-------------------------------------------


// a=""
// for(i=1;i<=8;i++){
//     a=a+i
//     console.log(a)
// }

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678

// ------------------------------------XXX-------------------------------------------


// a=""
// for(i=1;i<=4;i++){
//     a=a+"* "
//     console.log(a)
// }

// * 
// * * 
// * * *
// * * * *

// ------------------------------------XXX-------------------------------------------

// a=""
// for(i=4;i>=1;i--){
//     a=a+i+" "
//     console.log(a)
// }

// 4 
// 4 3 
// 4 3 2
// 4 3 2 1

// ------------------------------------XXX-------------------------------------------

// a=""
// for(i=4;i>=0;i--){
//     a=''
//     for(k=i;k>=1;k--){
//     a=a+"* "
//     console.log(a)
// }}

// * * * * 
// * * * 
// * *
// *

// ------------------------------------XXX-------------------------------------------


// a=""
// for(i=1;i<=5;i++){
//     a="";
//     for(j=i;j<=5;j++){
//         a=a+"* "
//     }   
//     console.log(a)
// }

//-------------------------------xxx------------------------------
// a=""

// count=1
// for(i=1;i<=5;i++){
//     a=""
//     for(j=1;j<=i;j++){
//         a=a+count
//         count++
    
// }console.log(a)}

// 1
// 23
// 456
// 78910
// 1112131415
   
//--------------------xxxx-----------------------------------------

// a=""

// count=1
// for(i=5;i>=1;i--){
//     a=""
//     for(j=i;j>=1;j--){
//         a=a+j+" "
//         count++
    
// }console.log(a)}
   
// 5 4 3 2 1 
// 4 3 2 1 
// 3 2 1
// 2 1
// 1
//----------------------------xxx-----------------------------------
// count=1
// for(i=5;i>=1;i--){
//     a=""
//     for(j=i;j>=1;j--){
//         a=a+i+" "
//         count++
    
// }console.log(a)}

// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3
// 2 2
// 1

//-----------------------xxx-----------------------------------

//  a=""
// for(i=1;i<=8;i++){
//     a=a+1
//     console.log(a)
// }

// 1
// 11
// 111
// 1111
// 11111
// 111111
// 1111111
// 11111111

//------------------------xxx---------------------------------
//  a=""
// for(i=1;i<=8;i++){
//     a=a+"A "
//     console.log(a)
// }

// A 
// A A 
// A A A
// A A A A
// A A A A A
// A A A A A A
// A A A A A A A
// A A A A A A A A

//--------------------------XXX--------------------------------
// a=""


// for(i=1;i<=5;i++){
//     a=""
//     for(j=i;j>=1;j--){
//         a=a+i+""
        
    
// }console.log(a)}


// 1
// 22
// 333
// 4444
// 55555
//------------------xxxx-------------------
//  count=1
// for(i=1;i<=5;i++){
//     a=""
//     for(j=i;j<=5;j++){
//         a=a+count+"  "
//         count++
    
// }console.log(a)}

// 1  2  3  4  5  
// 6  7  8  9  
// 10  11  12
// 13  14
// 15

//-----------------------xxx-------------------

//  for (let i=2;i<=10;i++){
//     console.log(i,11-i)
//  }

//  2 9
//  3 8
//  4 7
//  6 5
//  7 4
//  8 3
//  9 2
//  10 1

//---------------xxx-----------------------//


// for(i=5;i>=1;i--){
//     a=" ";
//     for(j=i;j>=1;j--){ //spaces
//     a=a+" "
//     }
//     for(k=5;k>=i;k--){ //stars
//     a=a+"*"

//     }
//     console.log(a)
    
// }
//          *
//         **
//        ***
//       ****
//      *****
//-----------------xxx------------------------//


// a="";
// n=5;
// for(i=1;i<=n;i++){
//     for(j=0;j<=n-i;j++){
//     a+=" "
//     }
//     for(k=0;k<i*2-1;k++){ 
//     a+="*"
//     }
//     a+="\n"
// }
// console.log(a)

//     *
//    ***
//   *****
//  *******
// *********
//---------------------------xxx------------------------------//
// a="";
// n=5;
// for(i=n;i>=1;i--){
//     for(j=0;j<=n-i;j++){
//     a+=" "
//     }
//     for(k=0;k<(i*2)-1;k++){ 
//     a+="*"
//     }
//     a+="\n"
// }
// console.log(a)

//  *********
//   *******
//    *****
//     ***
//      *

//------------------------xxx---------------------------------//


// for(i=5;i>=1;i--){
//     a=" ";
//     for(j=i;j>=1;j--){ //spaces
//     a=a+" "
//     }
//     for(k=5;k>=i;k--){ //stars
//     a=a+i

//     }

//     console.log(a)
    
// }
//-------------------xxx------------------------//

// for (let i=1;i<=10;i++){
//         temp=''
//         for (let j=1;j<=i;j++){
//             temp = temp+ (i*j) + " "
//         }
//         console.log(temp)
//     }

// 1 
// 2 4 
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25
// 6 12 18 24 30 36
// 7 14 21 28 35 42 49
// 8 16 24 32 40 48 56 64
// 9 18 27 36 45 54 63 72 81
// 10 20 30 40 50 60 70 80 90 100

//-------------------------------------------xxx----------------------------//


// for(i=9;i>=2;i--){
//     a=""
//     b=""
//      for(j=9;j>=i;j--){
//      a=a+j;
//      }for(k=2;k<=i;k++){
//         b=b+" "
//      }
//      console.log(`${a} * 9 + ${i-2}${b}= ${a*9+i-2}`)
// }

// 9 * 9 + 7        = 88
// 98 * 9 + 6       = 888
// 987 * 9 + 5      = 8888
// 9876 * 9 + 4     = 88888
// 98765 * 9 + 3    = 888888
// 987654 * 9 + 2   = 8888888
// 9876543 * 9 + 1  = 88888888
// 98765432 * 9 + 0 = 888888888
//-----------------------------xxx------------------------------//
// a="";
// count=1
// for(i=4;i>=0;i--){
//     a='';
//      for(j=i;j>=1;j--){
//         a=a+"* " ;
        
//     }
    
//     for(k=i;k<=4;k++){
//     a=a+count+" ";
//     count++
//       }  console.log(a);
// }

// * * * * 1 
// * * * 2 3 
// * * 4 5 6
// * 7 8 9 10
// 11 12 13 14 15

//---------------------------xxxx---------------------------//

// a=""
// for(i=1;i<=5;i++){
    
//     for(j=0;j<i;j++){
//         a=a+String.fromCharCode(j+65)
//     }
//     a+="\n"
    
// }console.log(a)

// A
// AB
// ABC
// ABCD
// ABCDE
//----------------------------------------------------------------//
//Write a Program to add all Elements in Matrix

// function primenumbers(){

//     let n = readlineSync.questionInt("ENTER NUMBER TO FIND PRIME  : ");
//         console.log(`entered number is ${n} \n`);
//     if(n==1){
//         console.log(`${n} is neither prime nor composite number `)
//     }
//     for(let i=2;i<=n;i++){
//         if((n%i)==0){
//          console.log(`${i} is not a prime number `)
//         }
//         else  console.log(`${i} is a prime number `)
// }
// }












