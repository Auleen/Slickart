import React from "react";
import "./Footer.css";
import GooglePayButton from "@google-pay/button-react";

function Footer(props) {
  return (
    <div className="footer fixed-bottom">
      <button
        className="reset"
        onClick={() => {
          props.reset();
        }}
      >
        Reset
      </button>
      <div className="total">
        <strong>Total Bill:</strong> ${props.total}
      </div>
      {/* <button className="pay">Pay Now</button> */}
      <div className="paybutton">
        <GooglePayButton
          environment="TEST"
          buttonColor="white"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            buttonColor: "white",
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "USD",
              countryCode: "US",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
