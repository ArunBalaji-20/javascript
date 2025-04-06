

document.addEventListener('DOMContentLoaded',()=>{
    const cartData=document.getElementById('cart-data');

   

    document.addEventListener('click',(e)=>{
        const parent = e.target.parentNode;
        console.log(parent.classList[0]); 
        // console.log(id)
        if(parent.classList[0]==='cart-cls'){
            const currState = window.getComputedStyle(cartData).display;
            console.log(currState);
            if (currState==='none'){
                cartData.style.display='block';
            }
            else {
                cartData.style.display = 'none';
            }
        }

        if(parent.classList[0]=='stepper'){
            const g= parent.parentElement;
            // console.log(g.classList)
            console.log(g.querySelectorAll('p')[0].innerText);
            console.log(parent.querySelector('input').value)
            let product={
                name:`${g.querySelectorAll('p')[0].innerText}`,
                quantity:`${parent.querySelector('input').value}`

            }

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if product already exists
            let existing = cart.find(item => item.name === product.name);
 
            if (existing) {
                existing.quantity = product.quantity; // Increase quantity
                existing.price=  parseInt(existing.unitPrice) * parseInt(product.quantity)
             // console.log(existing.price.slice(1))
            } else {
                cart.push(product);
            }
            
            localStorage.setItem('cart',JSON.stringify(cart));
            console.log(cart)
        }

        if(parent.classList[0]==='card'){
            let product={
                name: `${parent.querySelectorAll('p')[0].innerText}`,
                price: `${parent.querySelectorAll('p')[1].innerText.slice(1)}`,
                unitPrice: `${parent.querySelectorAll('p')[1].innerText.slice(1)}`,
                quantity: 1

        }
           // Add new product

           //console.log(product)
           let cart = JSON.parse(localStorage.getItem('cart')) || [];

           // Check if product already exists
           let existing = cart.find(item => item.name === product.name);

           if (existing) {
               existing.quantity = parseInt(existing.quantity)+1; // Increase quantity
               existing.price=  parseInt(existing.price) + parseInt(product.price)
            // console.log(existing.price.slice(1))
           } else {
               cart.push(product);
           }
           
           localStorage.setItem('cart',JSON.stringify(cart));
          // console.log(cart)
           window.dispatchEvent(new CustomEvent('cartUpdated', {
            detail: { cart }  // optional: include updated cart data
        }));
        
        }
    })

    // window.addEventListener('cartUpdated', (e) => {
    //     console.log('LocalStorage cart updated:', e.detail.cart);
    //     cartData.innerHTML+=`
    //             <div class="cart-items">
    //             <p>${e.detail.cart[0].name}</p>
    //             <div class="stepper">
    //                 <button onclick="changeValue(-1)">-</button>
    //                  <input type="number" id="quantity" value="0" min="0">
    //                 <button onclick="changeValue(1)">+</button>
    //             </div>
    //         </div>
    //     `
    //     // cartData.style.display='block';
    // });
    
    window.addEventListener('cartUpdated', (e) => {
        const cart = e.detail.cart;
        console.log('LocalStorage cart updated:', cart);
    
        // Clear old content
        cartData.innerHTML = '';
        let totalPrice=0;
    
        // Re-render all items in the cart
        cart.forEach((item, index) => {
            totalPrice+=parseInt(`${item.price}`);
            cartData.innerHTML += `
                <div class="cart-items">
                    <p>${item.name}</p>
                    <div class="stepper">
                        <button onclick="changeValue(-1, ${index})">-</button>
                        <input type="number" id="quantity-${index}" value="${parseInt(item.quantity)}" min="0">
                        <button onclick="changeValue(1, ${index})">+</button>
                    </div>
                </div>
                <hr />
            `;
        });
        // console.log(totalPrice)
        cartData.append(`Total:${totalPrice}`)
    });

  

})

function changeValue(n, incoming) {
    const textArea = document.querySelector(`#quantity-${incoming}`);
    let currentVal = parseInt(textArea.value);

    if (n === 1) {
        textArea.value = currentVal + 1;
    } else if (n === -1 && currentVal > 0) {
        textArea.value = currentVal - 1;
    }
}
