import { useState } from "react";
import { Button } from "../BaseComponents/Button/component";

export const OrderCounter = () => {
  const [amount, setAmount] = useState(0);

  return (
    <span>
      <Button
        type="counter"
        title=" - "
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
      />
      {amount}
      <Button
        type="counter"
        title=" + "
        onClick={() => setAmount(amount + 1)}
        disabled={amount === 5}
      />
    </span>
  );
};
