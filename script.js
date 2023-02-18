// getMenu function
function getMenu() {
    fetch('https://free-food-menus-api-production.up.railway.app/burgers')
      .then(response => response.json())
      .then(data => {
        const menuList = document.getElementById('menu-list');
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.innerText = item.name + ' - ' + item.price;
          menuList.appendChild(listItem);
        });
      })
      .catch(error => console.error(error));
  }
  
  // takeOrder function
  function takeOrder() {
    const orderPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = ['burger1', 'burger2', 'burger3'];
        const order = { burgers };
        resolve(order);
      }, 2500);
    });
    return orderPromise;
  }
  
  // orderPrep function
  function orderPrep() {
    const orderPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderStatus = true;
        const paid = false;
        const order = { orderStatus, paid };
        resolve(order);
      }, 1500);
    });
    return orderPromise;
  }
  
  // payOrder function
  function payOrder() {
    const orderPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const orderStatus = true;
        const paid = true;
        const order = { orderStatus, paid };
        resolve(order);
      }, 1000);
    });
    return orderPromise;
  }
  
  // thankyouFnc function
  function thankyouFnc() {
    alert('Thank you for your order!');
  }
  
  // webpage logic
  document.addEventListener('DOMContentLoaded', () => {
    getMenu();
  
    const orderBtn = document.getElementById('order-btn');
    orderBtn.addEventListener('click', () => {
      takeOrder()
        .then(order => {
          console.log('Order:', order);
          return orderPrep();
        })
        .then(order =>
            {
                console.log('Order status:', order);
                return payOrder();
                })
                .then(order => {
                console.log('Payment status:', order);
                if (order.paid) {
                thankyouFnc();
                }
                })
                .catch(error => console.error(error));
                });
                });  