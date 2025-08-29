1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
 getElementById : getElementById হলো এমন একটি ট্যাগ, যার মাধ্যমে শুধু একটি এলিমেন্ট বা একটি আইডিকে নির্দিষ্টভাবে ধরা যায়। এর মাধ্যমে আমরা বিভিন্ন ধরনের কাজ করতে পারি। getElementById ব্যবহার করলে একটি নির্দিষ্ট মান ধরা হবে এবং সেই নির্দিষ্ট মানের উপর কাজ করা যাবে। তাই getElementById মূলত একটি নির্দিষ্ট আইডির জন্য ব্যবহার করা হয়।
 getElementsByClassName : এটি এমন একটি ট্যাগ, যেটির মাধ্যমে আমরা একের অধিক একই রকম ট্যাগ ধরতে পারি। কারণ আমরা ক্লাসের মধ্যে লিখব ট্যাগ। আমরা getElementByClassName ব্যবহার করে একই রকম বিভিন্ন ক্লাস, যেগুলোতে ভ্যালু বা মান দেওয়া আছে, সেগুলো ধরতে পারি এবং তার উপর অনেক ধরনের কাজ করতে পারি, যা আমাদের জন্য অনেক ব্যবহারযোগ্য হয়ে থাকে। এটি আইডির মতো, কিন্তু আইডিতে শুধু একটি ব্যবহার করা যায় বা একটি নির্দিষ্ট মানের উপর কাজ করা যায়। অথচ আমরা ক্লাস ব্যবহার করে অনেকগুলোকে একসাথে কাজ করতে পারি।
 querySelector / querySelectorAll : whereIsElement এবং querySelectorAll প্রায় একই রকম কাজ করে, কিন্তু এদের মধ্যে querySelectorAll একটি অ্যারে-অবজেক্ট রিটার্ন করে। যদিও এটি সরাসরি অ্যারে নয়, তবে অ্যারের মতো কাজ করে, যা একে অনেক বেশি কার্যকর করে তোলে। তবে querySelector-এ এটি হয় না। তবুও আমরা এর মাধ্যমে বিভিন্ন ধরনের কাজ করতে পারি। এর সাহায্যে আমরা নির্দিষ্ট কোনো ট্যাগকে একসাথে ধরতে পারি। যেমন: h1, p, div—বিভিন্ন ধরনের ট্যাগ আমরা সিলেক্ট করতে পারি। querySelector শুধু তোমাকে একটি এলিমেন্ট এনে দেবে, কিন্তু querySelectorAll তোমাকে এলিমেন্টগুলোর মধ্যে NodeList আকারে এনে দেবে, যা অনেক বেশি উপযোগী হয়।


2.How do you create and insert a new element into the DOM?

Ans:
 Step 1: প্রথমে আমরা HTML এর মধ্যে একটি div নিব এবং ওই div-এর মধ্যে আমরা একটি আইডি নিব।
 Step 2: তারপর JavaScript-এ আমরা একটি খালি array নিব।
 Step 3: যেই বাটনের উপর click করলে আমাদের একটি element তৈরি হবে, ওই বাটনের মধ্যে আমাদের একটি object তৈরি করতে হবে এবং সেই object-টি JavaScript-এর ফাঁকা    
         array-এর মধ্যে push করতে হবে।
 Step 4: তারপর আমরা একটি function তৈরি করতে পারি। এরপর ফাংশনের মধ্যে ওই HTML id ধরতে হবে।
 Step 5: এরপর আমাদের একটি element তৈরি করতে হবে, যার নাম হলো createElement। তারপর আমাদের ঐ createElement-এর মধ্যে আমাদের কাঙ্ক্ষিত element পাঠাতে হবে।  
        innerHTML-এ থাকবে যা আমরা দেখতে চাই, অথবা যেটি হতে পারে একটি বক্স।
 Step 6: তারপর ওই createElement-টি appendChild করে দিতে হবে HTML-এর div-এর মধ্যে।

অবশেষে এটি কাজ করবে।

3.What is Event Bubbling and how does it work?

Ans:
 JavaScript-এ যখন  click, submit ব্যবহার করো, তখন সেই event শুধু ওই element-এ সীমাবদ্ধ থাকে না। ওই ভেতরের element থেকে বাইরের parent element পর্যন্ত ধাপে ধাপে উপরে উঠতে থাকে।
 ধরি,
 আমরা প্রথমে একটি  section নি এবং একটা তার id নি,  এরপর ওই  section এর মধ্যে একটা div নি এবং তার ও একটা id নি এর div এর মধ্যে একটা h1, p এবং  button নি এবং তাদের ও একটা id নি। তারপর Java Script এর মধ্যে দিয়ে সব id এক এক করে ধরি।  এবং click function তৈরি করি।  এর ফলে আমার যখন button বা h1, p এ গুলো উপর click করবো তখন সে click হবে এবং তার  parent element গুলো কে তাও ধরবে।  কিন্তু যদি div 
 বা section এর মধ্যে কিন্তু h1,p, button বাইরে click করি তখন শুরু div বা section ধরবে। 

 অন্য দিকে শুধু button click করলে যেনো botton element টা কাজ করে এর জন্য আমরা even.stopPropagation() ব্যবহার করতে পারি।


4.What is Event Delegation in JavaScript? Why is it useful?

Ans:
 Event Delegation হলো একটি টেকনিক, যেখানে আমরা প্রতিটি child element-এ আলাদা আলাদা event listener না বসিয়ে parent element-এ একটি event listener বসাই। তারপর event bubbling-এর মাধ্যমে বোঝা যায় কোন child element-এ event হয়েছে।
 step1.পারফরম্যান্স ভালো হয় অনেক element থাকলেও একটাই listener কাজ করে।
 step2.ডায়নামিক element হ্যান্ডেল করতে পারে পরে যদি নতুন child element যোগ হয়, তাতেও আলাদা event listener বসাতে হয় না।
 step3.কোড ছোট ও পরিষ্কার হয় বারবার একই ধরনের কোড লিখতে হয় না।

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:
 preventDefault() = কাজ বন্ধ করো
 1.এই method ব্রাউজারের default behavior বন্ধ করতে ব্যবহার করা হয়। Checkbox বা অন্যান্য form element-এর default কাজ বন্ধ করতে চাই
 stopPropagation() = উপরে যেও না
 1.এই method event bubbling বন্ধ করতে ব্যবহার হয়। মানে event আর parent element-এ যাবে না।

       
