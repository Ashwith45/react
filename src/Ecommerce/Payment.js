import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const navigate = useNavigate();

    const handlePayment = () => {
        alert("Order is placed successfully!");
        navigate("/");
    };

    return ( <
        div className = "payment-container" >
        <
        h2 > Choose Payment Method < /h2> <
        div className = "payment-options" >
        <
        button onClick = {
            () => setSelectedMethod("UPI") } > UPI < /button> <
        button onClick = {
            () => setSelectedMethod("Credit Card") } > Credit Card < /button> <
        button onClick = {
            () => setSelectedMethod("Debit Card") } > Debit Card < /button> <
        button onClick = {
            () => setSelectedMethod("Net Banking") } > Net Banking < /button> <
        /div>

        {
            selectedMethod === "UPI" && ( <
                div className = "payment-form" >
                <
                h3 > Select UPI App < /h3> <
                button > Google Pay < /button> <
                button > PhonePe < /button> <
                button > BharatPe < /button> <
                button > Paytm < /button> <
                /div>
            )
        }

        {
            (selectedMethod === "Credit Card" || selectedMethod === "Debit Card") && ( <
                div className = "payment-form" >
                <
                h3 > Enter Card Details < /h3> <
                input type = "text"
                placeholder = "Cardholder Name"
                value = { cardHolderName }
                onChange = {
                    (e) => setCardHolderName(e.target.value) }
                /> <
                input type = "text"
                placeholder = "Card Number"
                value = { cardNumber }
                onChange = {
                    (e) => setCardNumber(e.target.value) }
                /> <
                input type = "text"
                placeholder = "Expiry Date (MM/YY)"
                value = { expiryDate }
                onChange = {
                    (e) => setExpiryDate(e.target.value) }
                /> <
                input type = "password"
                placeholder = "CVV"
                value = { cvv }
                onChange = {
                    (e) => setCvv(e.target.value) }
                /> <
                /div>
            )
        }

        {
            selectedMethod === "Net Banking" && ( <
                div className = "payment-form" >
                <
                h3 > Enter Bank Details < /h3> <
                input type = "text"
                placeholder = "Bank Name"
                value = { bankName }
                onChange = {
                    (e) => setBankName(e.target.value) }
                /> <
                input type = "text"
                placeholder = "Account Number"
                value = { accountNumber }
                onChange = {
                    (e) => setAccountNumber(e.target.value) }
                /> <
                input type = "text"
                placeholder = "IFSC Code"
                value = { ifscCode }
                onChange = {
                    (e) => setIfscCode(e.target.value) }
                /> <
                /div>
            )
        }

        {
            selectedMethod && ( <
                button className = "proceed-button"
                onClick = { handlePayment } >
                Proceed <
                /button>
            )
        } <
        /div>
    );
}

export default Payment;