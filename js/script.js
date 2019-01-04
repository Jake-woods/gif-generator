const form = document.querySelector('form');
const returnedImg = document.querySelector('#image');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const inputSearch = document.querySelector('#user-search').value;

   // URL structure
   const giphy = {
      api: 'https://api.giphy.com/v1/gifs/random?',
      apiKey: 'api_key=KvlI7qrbEwAVr36bcLHvtPTSMZItjtnu&tag=',
      search: `${inputSearch}`
   }

   // Source for image form search value
   const url = giphy.api + giphy.apiKey + giphy.search;
   console.log(url)
   // Fetch data on search and change image source
   fetch(url)
      .then(res => res.json())
      .then(data => {
         returnedImg.setAttribute('src', data.data.images.downsized.url);
      });

   // Reset form input
   form.reset();
});