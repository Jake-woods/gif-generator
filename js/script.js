const form = document.querySelector('form');
const returnedImg = document.querySelector('#image');


// Prevent page from reloading
form.addEventListener('submit', (e) => {
   e.preventDefault();
   const inputSearch = document.querySelector('#user-search').value;

   // URL structure
   const giphy = {
      api: 'https://api.giphy.com/v1/gifs/search?',
      apiKey: '&api_key=KvlI7qrbEwAVr36bcLHvtPTSMZItjtnu',
      search: `&q=${inputSearch}`
   }

   // Source for image form search value
   const url = giphy.api + giphy.apiKey + giphy.search;

   // Fetch data on search and change image source
   fetch(url)
      .then(res => res.json())
      .then(data => {
         const randomImg = Math.floor(Math.random() * data.data.length);

         returnedImg.setAttribute('src', data.data[randomImg].images.downsized.url);
      });
   // Reset form input
   form.reset();
});