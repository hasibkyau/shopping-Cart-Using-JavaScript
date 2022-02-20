let selected_products = document.querySelector("table");

Add_Items = (e) => {
    let productName = e.parentElement.firstChild.nextElementSibling.innerText;
    console.log("Selected Product: ", productName);

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = productName;
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
}

selected_products.addEventListener('click', removeItem);
function removeItem(e) {
    if (e.target.innerText == "Remove") {
        e.target.parentElement.remove();
    }
}