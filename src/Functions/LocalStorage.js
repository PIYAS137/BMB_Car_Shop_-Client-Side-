

export const getStoredCartData=()=>{
    const storedDataString = localStorage.getItem("cart");
    if(storedDataString){
        return JSON.parse(storedDataString)
    }
    return []
}

const saveFullDataToLS=(cart)=>{
    const dataConvert = JSON.stringify(cart);
    localStorage.setItem("cart",dataConvert)
}

const addToLocalStorage=(id)=>{
    const cart = getStoredCartData()
    if(!cart.includes(id)){
        cart.push(id);
        saveFullDataToLS(cart)
    }else{
        return -1
    }
}
export const removeFromLocalStorage = (id) => {
    const cart = getStoredCartData();
    const index = cart.indexOf(id);
    if (index !== -1) {
      cart.splice(index, 1);
      saveFullDataToLS(cart);
      return cart;
    } else {
      return -1; 
    }
  }
  

export {addToLocalStorage}