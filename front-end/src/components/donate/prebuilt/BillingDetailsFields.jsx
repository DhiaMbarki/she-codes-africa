import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Jbira Neirouz"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="jbira.neirouz@example.com"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="B31 RBK TUNISIA CITY GAZELLA"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="TUNISIA"
        required
      />
    </>
  );
};

export default BillingDetailsFields;
