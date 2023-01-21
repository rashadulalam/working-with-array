
/**
 * 1. Array filter()
 * একটি নির্দিষ্ট array থেকে কন্ডিশনের মাধ্যমে কিছু array আইটেম কে আলাদা করার জন্য filter(); ব্যবহার করা হয়। filter() একটি function কে তার value হিসেবে নেয়। সেই function এর উপর ভিত্তি করে সে কাজ করে এবং সে function টি মূলত কন্ডিশন। filter() function আগের ‍array কে অক্ষত রেখে নতুন array return করে।
 */

const age1 = [32, 33, 43, 12, 18, 15, 19, 14, 52];

function isVoter( vAge ) {
    return vAge >= 18;
}
const voterList = age1.filter(isVoter);

/**
 * 1. Array find()
 * এটি যে কোন একটা condition এর উপর ভিত্তি করে তার প্রথম item কে বা সেইম item কে খুঝে বের করতে সাহায্য করে।
 */

const age2 = [32, 33, 43, 12, 18, 15, 19, 14, 52];

function checkPerson( age2 ) {
    return age2 > 33;
}

const person = age2.find(checkPerson);

// console.log(person);

/**
 * 1. Array map()
 * একটি  array  এররর মধ্যে থাকা প্রত্যকেটি item কে আমাদের প্রয়োজন অনুযায়ী যেকোন কাজ যে কোন  কিছু করতে পারি। প্রত্যেকটা value/ item কে নিয়ে কোন কিছু করতে চাইলে map() ব্যবহার করবো।
 */
const age3 = [32, 33, 43, 12, 18, 15, 19, 14, 52];

function newNumber( age3 ) {
    return age3 * 2
}

const newAge = age3.map(newNumber);
// console.log(age3)
// console.log(newAge);

/**
 * 1. Array reduce()
 * array  এর একটা item এর সাথে আরেকটা item এর মধ্যে কানেকশন তৈরি করে কাজ করে। reduce() main array কে কোন পরিবর্তন করেনা এবং এটি নতুন araay return করে।
 */
const age4 = [32, 33, 43, 12, 18, 15, 19, 14, 52];

function getTotal(first, last) {
    return first + last;
}
const total = age4.reduce( getTotal );
// console.log(total)

/**
 * 1. Array sort()
 * array  এর ভিতরে item গুলো সাজানোর জন্য sor() ব্যবাহর করা হয়। এটি মেইন array কে ও পরিববর্তন করে।
 */
const fruits = ["mango", "jackfruit", "banana", "orange", "blackberry", "watermelon"];
fruits.sort();
console.log(fruits)