/* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const
 দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।/ */ 
//error with const 
//   const myName ='Ridwan Elahee';
//  myName = 'Razob';
//  console.log(myName);

//run with let
//  let myName ='Ridwan Elahee';
//  myName = 'Razob';
//  console.log(myName);

/* টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */
// const car =[{name : 'soto car',price : 200000,color : 'red'},
//             {name : 'soto car',price : 200000,color : 'red'}];
// const tepString = `Ths is ${myName} ,${car[0].name} `
// console.log(tepString);

/* ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।  */
// const sum =num =>num / 5;
// const result =sum(10);
// console.log(result);
/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */
// const add =(num1,num2) => (num1 + 2) * (num2 +2);
// const result =add(2,2);
// console.log(result);
/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। */
// const mul =(num1,num2,num3) => num1 *num2 *num3;
// const restul =mul(10,10,10);
// console.log(restul);
/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */
// const add =(num1,num2) => {
//     const sum=num1 + num2;
//     const mul=sum *2;
//     return mul;
// }
// const result = add(10,10);
// console.log(result);

/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */
// const number=[1,2,5,4,7,55,45,154,151,21,124,521];
// const mul=number.map(n => n * 5 );
// console.log(mul);

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো
 */
// const number=[1,2,5,4,7,55,45,154,151,21,124,521];
// const mul=number.filter(n => n  % 2 === 1 );
// console.log(mul);
/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */ 

// const car =[{name : 'soto car',price : 200000,color : 'red'},
//             {name : 'soto car',price : 200000,color : 'red'}];
// const priceObject =car.find(p =>p.price);
// console.log(priceObject);            
/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */
/* const car ={name : 'soto car',price : 200000,color : 'red'};
const {price} =car;
console.log(price); */
/*  array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। */

/* const number=[1,2,5,4,7,55,45,154,151,21,124,521];
// const [three] =number[3];

const three =number[3];
console.log(three); */
/* ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।  */
const number =((num1,num2,num3 = 7) => num1 + num2 +num3);
const restul =number(10,20);
console.log(restul);