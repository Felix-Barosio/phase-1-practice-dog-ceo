console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((res) => res.json())
    .then((dogs) => {
      const container = document.querySelector("#dog-image-container");
      dogs.message.forEach((dog) => {
        const img = document.createElement("img");
        img.src = dog;
        container.appendChild(img);
      });
    });

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      const myBreed = document.querySelector("#dog-breeds");
      Object.keys(data.message).forEach((breed) => {
        const list = document.createElement("li");
        list.innerText = breed;
        myBreed.appendChild(list);
      });
        document.querySelector("#breed-dropdown").addEventListener("change", (e) => {
        e.preventDefault();
          const selectOption = e.target.value;
          document.querySelectorAll("li").forEach((list) => {
            list.style.display = "block";
            if (list.innerText[0] !== selectOption) {
              list.style.display = "none";
            }
          });
        });
      document.querySelectorAll("li").forEach((list) => {
        list.addEventListener("click", () => {
          console.log(list.innerText);
        });
      });
    });
});
