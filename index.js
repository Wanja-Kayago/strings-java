// extract last four characters.
let x = "Extravaganza";
console.log(x.slice(8));

// insert eat
 const food = "The quick fox jumped over the lazy dog";
 let y = "eat"
 const food2 = `The q${y}uick fox jumped over the lazy dog`;
 console.log({food2});

// no of times "the" and "brown" appear
 const story = "The quick  brown fox jumped over the lazy dog" 
  a = "The quick brown fox jumped over the lazy dog"
 console.log((a.match(/the/)).length);
 console.log((a.match(/brown/)).length);

 //find "are"
 const string1 = "The pupils are ready in the library";
 m = "are";
 console.log(string1.includes(m));
 
 // find "sitting"
 const string2 = "The child was sitting on the table before it fell"
 n = "sitting"
 console.log(string2.includes(n));

 // convert to uppercase
 let s = "Wonderful";
 console.log(s.toUpperCase(s));

 // convert to lowercase
 let t = "amazing";
 console.log(t.toLowerCase(t));

 // convert to lowercase
 let u = "undERneath";
 console.log(u.toLowerCase(u));

 // convert to titlecase
 let v = "A wonderful world";
  let titleCase = "";
 v.split(" ").forEach(word => {
  const capitalizedWord = word.charAt(0).toUpperCase()  + word.slice(1).toLowerCase();
  titleCase += capitalizedWord + " ";
 });
 console.log(titleCase);
 


 
