import GlobalStyles from "./prebuilt/GlobalStyles";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Layout = ({ children }) => {
  return (
    <>
      <h1>Donation</h1>

      <GlobalStyles />
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;
