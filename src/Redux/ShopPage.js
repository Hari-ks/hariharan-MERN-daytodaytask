import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductApi from "../APIService/ProductsAPI";
import { cartActions } from "./Storage";
import './Style.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const CartPage = () => {
    const dispatch = useDispatch();
    const [localData, setLocalData] = useState([]);

    const { totalItems, data, totalCount } = useSelector(storeObj => {

        return {
            totalItems: storeObj.cart?.cartProducts?.length,
            data: storeObj.cart?.cartProducts,
            totalCount: storeObj.cart?.totalCount
        }
    })

    console.log('total count', totalCount)

    const handleRemove = (count, itemIndex) => {
        dispatch(cartActions.removeFromCart({ count: count, itemIndex }));
    }

    const handleUpdate = (item) => {
        console.log('update', item)
        dispatch(cartActions.addProductCount(item.id));
        console.log('handle update', localData)
    }

    const handleMinus = (item) => {

        dispatch(cartActions.decreaseProductCount(item.id))
    }
    const handleClear = () => {
        dispatch(cartActions.clearCart())
        dispatch(cartActions.clearTotalCount());
    }

    const handleCheckOut = () => {
        var currentdate = new Date();
        const checkOutData = [{ 'TOTAL PRODUCT': totalCount, 'CheckOut Date&Time': currentdate }, ...data]
        ProductApi.post('/checkOut', checkOutData)
            .then((res) => {
                alert('Successfully Products Check Outed. Thanks for Order...')
                dispatch(cartActions.clearCart());
                dispatch(cartActions.clearTotalCount());

            }).catch((err) => console.log('Error from api', err))
    }

    const handleInput = (e, index) => {
        const count = e.target.value
        dispatch(cartActions.addTotalCount({ count: parseInt(count), index }))

    }

    return (
        <div className="shopContainer">
            <h1 className="cartPagetext">Cart Page</h1>
            <h2>Total Items: {totalCount}</h2>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
                    <span>S.No</span>
                    <span>Image</span>
                    <span>Title</span>
                    <span>Price</span>
                    <span>Count</span>
                    <span>Action</span>
                </div>
                {

                    data?.map((item, index) => {


                        return (

                            <div key={`item-${index}-${item.id}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderBottom: '1px solid #cdcdcd', textAlign: 'center', padding: 10 }}>
                                <span>{index + 1}</span>
                                <img src={item.image} alt={item.title} height={40} width='50px' />
                                <span style={{ width: 'auto' }}> <h4 style={{ width: 'auto' }}>{item.product}</h4></span>
                                <span style={{ width: 'auto' }}><p>₹ {item.price}</p></span>

                                <span styles={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <button className="minusButton" disabled={item.count == 1 ? "true" : false} onClick={() => handleMinus(item)} style={{ padding: 4, fontSize: 20 }}>-</button>
                                    <span>
                                        <input type="number" onChange={(e) => handleInput(e, index)} value={item.count || 1} style={{ padding: 8, width: 30, borderRadius: '4px', textAlign: 'center' }} />
                                    </span>
                                    <button className="plusButton" disabled={totalCount >= 100 ? 'true' : false} onClick={() => handleUpdate(item)} style={{ padding: 4, fontSize: 20 }}>+</button>
                                </span>
                                <button onClick={() => handleRemove(item.count, index)}><DeleteIcon /></button>
                            </div>

                        )


                    })
                }
                {
                    data.length > 0 ?
                        <div className="checkOutButtonsDIV">

                            <Button onClick={handleCheckOut} variant="contained">Check Out</Button>
                            <Button onClick={handleClear} variant="outlined" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </div> : null}
            </section>
        </div>
    )
}

export default CartPage;




