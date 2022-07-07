import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"

import classes from "./CartButton.module.css"

const CartButton = () => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  )
}

export default CartButton
