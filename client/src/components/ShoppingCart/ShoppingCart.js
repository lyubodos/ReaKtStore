import  {useState} from 'react'

export default function ShoppingCart(
    
) {

    const [cartItems, setCartItems] = useState([]);

    

    return (
        <section className="shopping-cart">
            <h1>Items</h1>
            <div>
                {cartItems.length === 0 && <div>No items in cart</div>}
            </div>
        </section>
    )
}
