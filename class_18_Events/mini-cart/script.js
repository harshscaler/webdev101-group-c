let allElements = document.querySelectorAll('.product');
let selector = document.querySelector('.product-selector');


// console.log(allElements);

function updateProductDetails(filter) {
    allElements.forEach((element) => {

        // console.log(element.id);
        if (filter === 'all'){
            element.style.display = 'block';
        }
        else if(filter === "vegetables"){
            element.style.display = element.id === 'vegetables' ? 'block' : 'none';
        }
        else if(filter === "fruits"){
            element.style.display = element.id === 'fruits' ? 'block' : 'none';
        }
        else if(filter === "grains"){
            element.style.display = element.id === 'grains' ? 'block' : 'none';
        }
    })
}
// console.log(selector);
selector.addEventListener('change', function() {
    const selectedFilter = selector.value;
    updateProductDetails(selectedFilter);
});