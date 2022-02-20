
let selected_products = document.getElementById("table"); //all the selected products
let quantity = 1;


//Adding new item to the local storage
Add_Items = (e) => {

    let productName = e.parentElement.firstChild.nextElementSibling.innerText; //Selected product name
    let ProductTable = [];
    let update = true; //Helps to prevent multiple same product selection


    if (localStorage.getItem('Products') === null) {
        ProductTable = [];
    }
    //geting previous selected items from local storage
    else {
        ProductTable = JSON.parse(localStorage.getItem('Products'));
    }

    //Checking the previous items with new selected item
    ProductTable.forEach(item => {
        if (productName == item) {
            window.alert('Already Added');
            update = false;
        }
    })

    //update if the selected item is not already selected
    if (update) {
        ProductTable.push(productName);
        localStorage.setItem('Products', JSON.stringify(ProductTable));
    }
    //showing the product on the page
    ShowProducts(ProductTable);
}
document.addEventListener('DOMContentLoaded', ShowProducts);
function ShowProducts() {
    
//clearing the previous table from the page
    while (selected_products.firstChild) {
        selected_products.removeChild(selected_products.firstChild);
    }

    //geting the existing items from local storage
    let ProductTable = [];
    if (localStorage.getItem('Products') === null) {
        ProductTable = [];
    }
    else {
        ProductTable = JSON.parse(localStorage.getItem('Products'));
    }

    //creating table on the page with the stored data from local storage
    ProductTable.forEach(product => {

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = product;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = "120";
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = quantity;
        tr.appendChild(td3);

        let btn = document.createElement('button');
        btn.innerHTML = "Remove"
        tr.appendChild(btn);

        selected_products.appendChild(tr);
    })

}

//To remove specific product from the list
selected_products.addEventListener('click', removeItem);
function removeItem(e) {
    if (e.target.innerText == "Remove") {
        //name of the product that need to rempve from the cart
        let Pname = e.target.parentElement.firstChild.innerText;

      
        let table = JSON.parse(localStorage.getItem('Products'));
        let i = 0, j = 0;
        let newTable = [];

        
        table.forEach(e => {
            console.log(table[i]);
            if (Pname != e) {
                newTable[j] = table[i];
                j += 1;
            }
            i += 1;
        })

        //updating the local storage with new table
        localStorage.clear()
        localStorage.setItem('Products', JSON.stringify(newTable));

        //showing the result with new table
        ShowProducts();


    }

}


