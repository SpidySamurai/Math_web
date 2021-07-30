function calculateDiscountPrice(price, discount) {
  const discountPrice = (price * (100 - discount)) / 100;
  return discountPrice;
}

function onclickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;

  const precioWithDiscount = calculateDiscountPrice(priceValue, discountValue);

  // const resultP = document.getElementById("resultP");
  // resultP.innerText = "Price with discount is $" + precioWithDiscount;
  alert("Price with discount is $" + precioWithDiscount);
}

const coupons = [
  {
    name: "Coupon10",
    discount: 10,
  },
  {
    name: "Coupon20",
    discount: 20,
  },
  {
    name: "Coupon30",
    discount: 30,
  },
];

function onclickButtonPriceDiscountCoupon() {
  const inputPrice = document.getElementById("inputPriceCoupon");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("inputCoupon");
  const discountCoupon = inputCoupon.value;

  const isCouponValueValid = (coupon) => {
    return coupon.name === discountCoupon;
  };

  const userCoupon = coupons.find(isCouponValueValid);
  if (!userCoupon) {
    alert("The coupon is not valid.");
  } else {
    const discountValue = userCoupon.discount;

    console.log(discountValue);
    const precioWithDiscount = calculateDiscountPrice(
      priceValue,
      discountValue
    );

    // const resultP = document.getElementById("ResultP");
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    alert("Price with discount is $" + precioWithDiscount);
  }
}
