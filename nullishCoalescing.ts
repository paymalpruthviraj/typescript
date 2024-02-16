
const user = {
    id: 123,
    email: 'user@example.com',
   
    displayName: null
};


const displayName = user.displayName ?? "Guest";

console.log(displayName); 
