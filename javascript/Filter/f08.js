// Function to filter palindrome names:
const a = [{ name: 'sam' }, { name: 'bob' }, { name: 'hannah' }, { name: 'john' }, { name: 'steve' }];
const f = a.filter(({ name }) => name === name.split('').reverse().join(''));

console.log("palindrom : ", f);
