const token = '4090d01b2231718f97101cb785dae48e8ee3a78d';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));


const app = "I don't do much.";
