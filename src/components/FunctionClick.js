import React from "react";

function FunctionClick() {
  function changeEvent(e) {
    e.preventDefault();
    console.log("hello");
  }
  return (
    <div>
      <a href="www.google.com" onClick={changeEvent}>
        Click
      </a>
    </div>
  );
}

export default FunctionClick;
/*
const cart =["Shoes", "Mobiles"];
const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId)
});

function createOrder(cart){
    const pro=new Promise (function(resolve, reject){
        if(!validateCart(cart)){
            const err= new Error("Error");
            reject(err);
        }
        const orderId=("1234");
            if(orderId){
             resolve(orderId);   
            }
    });
    return pro;
}

function validateCart(cart){
    return true;
}

*/
