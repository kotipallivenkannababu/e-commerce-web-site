import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClearCart, OrderDetails, IncCart, DecCart, RemoveFromCart } from './store';
import './CartComponent.css';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

function CartComponent() {
  const cartObjects = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [couponCode, setCouponCode] = useState('');
  const couponCodeRef = useRef();

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);

  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('qr');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleCouponApply = () => {
    const codeValue = couponCodeRef.current.value.trim().toUpperCase();
    setCouponCode(codeValue);

    switch (codeValue) {
      case 'NANI10':
        setCouponDiscountPercentage(10);
        toast.success('🎉 NANI10 applied! 10% discount added.');
        break;
      case 'NANI20':
        setCouponDiscountPercentage(20);
        toast.success('🎉 NANI20 applied! 20% discount added.');
        break;
      case 'NANI30':
        setCouponDiscountPercentage(30);
        toast.success('🎉 NANI30 applied! 30% discount added.');
        break;
      default:
        toast.error('❌ Invalid Coupon Code!');
        setCouponDiscountPercentage(0);
    }
    couponCodeRef.current.value = '';
  };

  const calculateAmounts = () => {
    let totalPrice = cartObjects.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let discountAmount = (discountPercentage / 100) * totalPrice;
    let afterDiscount = totalPrice - discountAmount;
    let couponDiscount = (couponDiscountPercentage / 100) * afterDiscount;
    let afterCoupon = afterDiscount - couponDiscount;
    let shipping = 30;
    let tax = (afterCoupon * 5) / 100;
    let finalAmount = afterCoupon + tax + shipping;
    return { totalPrice, discountAmount, couponDiscount, tax, shipping, finalAmount };
  };

  const { totalPrice, discountAmount, couponDiscount, tax, shipping, finalAmount } = calculateAmounts();

  const cartListItems = cartObjects.map((item, index) => (
    <li key={index} className="cart-item">
      <img className="cart-img" src={item.image} alt={item.name} />
      <span className="item-name">{item.name}</span>
      <span className="item-price">₹{item.price}</span>
      <div className="quantity-box">
        <button onClick={() => {dispatch(DecCart(item))
          toast.warn('Product Quantity decrease to cart Successfully')
        }}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => {dispatch(IncCart(item))
          toast.success('Product added to cart Successfully')
        }}>+</button>
      </div>
      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
      <div className="item-actions">
        <button className="btn-remove" onClick={() => {dispatch(RemoveFromCart(item))
           toast.error('Product Remove to cart Successfully')
        }}>Remove</button>
      </div>
    </li>
  ));

  const handlePaymentSuccess = () => {
    const purchaseDateTime = new Date().toLocaleString();
    let orderDetailsObject = {
      orderId: 'ORD-' + new Date().getTime(),
      purchaseDateTime: purchaseDateTime,
      items: [...cartObjects],
      finalAmount: finalAmount,
    };

    const templateParams = {
      order_id: orderDetailsObject.orderId,
      orders: cartObjects.map(item => ({
        name: item.name,
        price: (item.price * item.quantity).toFixed(2),
        units: item.quantity,
        imageUrl: item.image
      })),
      cost: {
        shipping: shipping.toFixed(2),
        tax: tax.toFixed(2),
        total: finalAmount.toFixed(2)
      },
      email: customerEmail
    };

    console.log('✅ Purchase completed:', orderDetailsObject);
    dispatch(ClearCart());
    dispatch(OrderDetails(orderDetailsObject));

    emailjs.send(
      'service_pkicvpe',    // Replace with your actual Service ID
      'template_o5y3pjj',   // Replace with your actual Template ID
      templateParams,
      'gimfEfjaE6hdhlA1x'   // Replace with your Public Key
    )
      .then((response) => {
        console.log('✅ Email successfully sent!', response.status, response.text);
      })
      .catch((error) => {
        console.error('❌ Failed to send email:', error);
      });

    setPaymentSuccessful(true);

    setTimeout(() => {
      navigate("/orders");
    }, 5000);
  };

  // Countdown for showing the redirect message
  useEffect(() => {
    if (cartObjects.length === 0 && paymentSuccessful && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [cartObjects.length, paymentSuccessful, countdown]);

  return (
    <div className="cart-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="cart-title">🛒 Cart Summary</h1>

      {cartObjects.length > 0 ? (
        <>
          <div className="cart-list">
            <div className="cart-header">
              <span>Image</span>
              <span>Product</span>
              <span>Price (₹)</span>
              <span>Quantity</span>
              <span>Total (₹)</span>
              <span>Actions</span>
            </div>
            {cartListItems}
          </div>

          <div className="summary-section">
            <h3>💰 Total Price: ₹{totalPrice.toFixed(2)}</h3>
            <div className="discount-buttons">
              <button onClick={() => {setDiscountPercentage(10);
                       toast.success('🏷️ 10% Discount Applied!'); }}>🏷️ Apply 10% Discount</button>
              <button onClick={() => {setDiscountPercentage(20);
                      toast.success('🏷️ 20% Discount Applied!');}}>🏷️ Apply 20% Discount</button>
              <button onClick={() => {setDiscountPercentage(30)
                      toast.success('🏷️ 30% Discount Applied!');}}>🏷️ Apply 30% Discount</button>
            </div>

            <h4> 🎉 Discount Amount: -₹{discountAmount.toFixed(2)}</h4>
            <div className="coupon-section">
              <input type="text" ref={couponCodeRef} placeholder="Enter Coupon Code" />
              <button onClick={handleCouponApply}>Apply Coupon</button>
            </div>
            <h4> 🎟️ Coupon ({couponCode}): -₹{couponDiscount.toFixed(2)}</h4>
            <h4>🧾 Tax (5%): +₹{tax.toFixed(2)}</h4>
            <h4>🚚 Shipping: +₹{shipping.toFixed(2)}</h4>
            <h3>💵 Final Amount: ₹{finalAmount.toFixed(2)}</h3>

            <div className="email-section">
              <h4>📧 Enter your email to receive the order details:</h4>
              <input
                type="email"
                placeholder="Enter your email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>

            <div className="payment-method">
              <h3>💳 Select Payment Method:</h3>
              <button onClick={() => setPaymentMethod('qr')}>📱 QR Code</button>
              <button onClick={() => setPaymentMethod('card')}>💳 Card</button>
            </div>

            {paymentMethod === 'qr' && !paymentSuccessful && (
              <div className="qr-section">
                <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>
                <QRCode value={`upi://pay?pa=kotipallibabu@ybl&pn=MyStore&am=${finalAmount.toFixed(2)}&cu=INR`} />
                <p>UPI ID: kotipallibabu@ybl</p>
                <button onClick={handlePaymentSuccess} className="confirm-payment-btn">
                  ✅ I've Completed Payment
                </button>
              </div>
            )}

            {paymentMethod === 'card' && !paymentSuccessful && (
              <div className="card-section">
                <h4>Enter Card Details</h4>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Cardholder Name" />
                <input type="text" placeholder="Expiry Date (MM/YY)" />
                <input type="text" placeholder="CVV" />
                <button onClick={handlePaymentSuccess} className="confirm-payment-btn">
                  ✅ I've Completed Payment
                </button>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toast("Wow so easy!")}>
              Notify!
            </button>
          </div>
        </>
      ) : paymentSuccessful ? (
        <div>
          <h2 className="thank-you-message">
            ✅ Payment Successful! Redirecting to orders page... </h2>
          <p style={{ textAlign: 'center' }}>➡️ Redirecting to your Orders page in {countdown} seconds...</p>

        </div>
      ) : (
        <div>
          <h2>Your cart is Empty! 🛒</h2>
          <p style={{ textAlign: 'center' }}>Your cart empty please add some products...</p>
        </div>
      )}
    </div>

  );
}

export default CartComponent;
