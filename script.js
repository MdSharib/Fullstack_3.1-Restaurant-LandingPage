const itemsSection = document.getElementById("items-section");

let items = [];

const  getMenu = async() => {
    const res = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
    const data = await res.json();
    console.log(data);
    items =data;
    displayItems();
   
}   


const displayItems = () => {
    let toDisplay = "";
    items.forEach((val) => {
        return toDisplay += `<div class="item-card">
        <div class="card-img">
            <img src=${val["imgSrc"]}>
        </div>
        <div class="card-description">
            <div class="card-info">
                <div class="card-info-title">${val["name"]}</div>
                <div class="card-info-price">$${val["price"]}/-</div>
            </div>
            <div class="addToCart-btn">
                <button> +</button>
            </div>
        </div>
    </div>`
    });

    itemsSection.innerHTML = toDisplay;

}


// first function
getMenu()