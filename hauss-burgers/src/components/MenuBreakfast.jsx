import axios from "axios";

function getMenu() {
  return new Promise ((resolve, reject) => {
    return axios.get("https://my-json-server.typicode.com/typicode/demo/db")
      .then((response) => resolve(response.data.posts))
      .catch((err) => reject(err))
  })
}

function CreateMenu() {
  const data = getMenu();
  data.then((menu) => {
    cleanSection(document.querySelector('#products-container'));
    const sectionTitlesMenu = document.createElement('tr');

    const titleDescription = document.createElement('th');
    titleDescription.textContent='Description';
    const titleCost = document.createElement('th');
    titleCost.textContent='Cost';
    const titleUnit = document.createElement('th');
    titleUnit.textContent='Unit';

    sectionTitlesMenu.append(titleDescription, titleCost, titleUnit);
    document.querySelector('#products-container').appendChild(sectionTitlesMenu);

    menu.forEach((dish) => {
      const price = document.createElement('td');
      price.classList.add('products-center');
      price.textContent = `$ ${dish.id}.00`;

      const product = document.createElement('td')
      product.classList.add('products-center');
      product.textContent = dish.title;

      const row = document.createElement('tr');
      row.append(product, price)

      document.querySelector('#products-container').appendChild(row);
    })
  })
}

function cleanSection(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function MenuBreakfast() {
  
  return (
    <>
      <CreateMenu />
      <table id='products-container'></table>
    </>
  )
}

export default MenuBreakfast;