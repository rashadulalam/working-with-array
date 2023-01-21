
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

console.log(person);