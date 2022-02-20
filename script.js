let selected_products = document.getElementById("table");

Add_Items = (e) => {
    let productName = e.parentElement.firstChild.nextElementSibling.innerText;
    let ProductTable = [];
    
    if(localStorage.getItem('Products') === null){
        ProductTable = [];
    }
    else {
        ProductTable = JSON.parse(localStorage.getItem('Products'));
    }

    ProductTable.push(productName);
    localStorage.setItem('Products', JSON.stringify(ProductTable));

    console.log("Selected Product: ", ProductTable);

    ShowProducts();

}
document.addEventListener('DOMContentLoaded',ShowProducts);
function ShowProducts() {
    
    while (selected_products.firstChild){
         selected_products.removeChild(selected_products.firstChild);
    }

    let ProductTable = [];
    if(localStorage.getItem('Products') === null){
        ProductTable = [];
    }
    else {
        ProductTable = JSON.parse(localStorage.getItem('Products'));
    }

    ProductTable.forEach(product => {

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = product;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = "120";
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.innerHTML = "0";
    tr.appendChild(td3);

    let btn = document.createElement('button');
    btn.innerHTML = "Remove"
    tr.appendChild(btn);

    selected_products.appendChild(tr);
    })
    
}

selected_products.addEventListener('click', removeItem);
function removeItem(e) {
    if (e.target.innerText == "Remove") {
        //e.target.parentElement.remove();
        let element = e.target.parentElement;
        let name = e.target.parentElement.firstChild.innerText;

        let table = JSON.parse(localStorage.getItem('Products'));
        let i = 0, j = 0;
        let newTable = [];
        table.forEach(e => {
            console.log(table[i]);
            if(name != e){
                newTable[j] = table[i];
                j += 1;
            }  
            i += 1;    
        })
        console.log("previous: ", table);
        console.log("new: ", newTable);

        localStorage.clear()
        localStorage.setItem('Products', JSON.stringify(newTable));
        ShowProducts();

       
    }
    
}


