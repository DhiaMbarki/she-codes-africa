import GlobalStyles from "./prebuilt/GlobalStyles";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";



const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);



const Layout = ({ children, title }) => {
  return (
    <>
    <h1>hi</h1>
    <div>
      <GlobalStyles />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
      <Elements stripe={stripePromise}>{children}</Elements>
      </div>
    </>
  );
};

export default Layout;
