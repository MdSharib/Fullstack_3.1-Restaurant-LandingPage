const itemsSection = document.getElementById("items-section");

let items = [];
let order = {};

const getMenu = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    const data = await res.json();
    // console.log(data);

    // error handling
    if (!res.ok) {
      throw new Error("An error occured" + res.status);
    }

    items = data;
    displayItems();
    
    await TakeOrder();
    console.log("order items are: ", order);

    const prepStatus = await orderPrep();
    console.log("order preparation status is: ", prepStatus);

    const payStatus = await payOrder();
    console.log("order payment status is: ", payStatus);

    thankyouFnc();
  } catch (err) {
    itemsSection.innerHTML = "Oops! something went wrong!!"
    console.log(err.message);
  }
};

function delay(timer) {
  return new Promise((resolve) => setTimeout(resolve, timer));
}

// second function
const TakeOrder = async () => {
  await delay(2500);
  let obj = {
    item1: items[0]["name"],
    item2: items[1]["name"],
    item3: items[2]["name"],
  };
  order = obj;
};

// third function
const orderPrep = async () => {
  await delay(1500);
  return { order_status: true, paid: false };
};

// fourth function
const payOrder = async () => {
  await delay(1000);
  return { order_status: true, paid: true };
};

// fifth function
const thankyouFnc = () => {
  alert("Thank you for eating with us today!");
};

const displayItems = () => {
  let toDisplay = "";
  items.forEach((val) => {
    return (toDisplay += `<div class="item-card">
        <div class="card-img">
            <img src=${val["imgSrc"]}>
        </div>
        <div class="card-description">
            <div class="card-info">
                <div class="card-info-title"><b>${val["name"]}</b></div>
                <div class="card-info-price">$${val["price"]}/-</div>
            </div>
            <div class="addToCart-btn">
                <button><img src="./resources/plus.png"></button>
            </div>
        </div>
    </div>`);
  });

  itemsSection.innerHTML = toDisplay;
};

// first function
getMenu();
