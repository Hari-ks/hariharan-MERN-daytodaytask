import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "./Storage";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const WishList = () => {
    const { wishList } = useSelector(state => state.cart);
    console.log('WishListPage', wishList);
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleClick = (item) => {
        dispatch(cartActions.removeWishList(item))

    }
    const hanldeNavigate = () => {
        navigate('/shop')
    }
    return (
        <div style={{ width: '100%' }}>
            <h1>WishList Products</h1>
            <section style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                {
                    wishList?.map((item, index) => {
                        return (<>
                            <div key={item.id} style={{ border: '1px solid #cdcdcd', margin: 2, textAlign: 'center', padding: 10 }}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <img className="productImage" style={{ height: '200px', width: '200px' }} src={item.image} alt={item.title} />
                                <p>₹ {item.price}</p>
                                <button onClick={() => handleClick(item.id)}>Remove from Wishlist</button>

                            </div><div style={{ marginRight: '3%' }}></div>
                        </>
                        )
                    })
                }
            </section>
            <div><Button onClick={hanldeNavigate} variant="contained">Product Page</Button></div>

        </div>
    )
}

export default WishList;


