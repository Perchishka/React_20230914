import { useState } from "react";
import { Button } from "../Button/component";
export const OrderCounter = () => {
  const [amount, setAmount] = useState(0);

  return (
    <span>
      <Button
        title="-"
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
      />
      {amount}
      <Button
        title="+"
        onClick={() => setAmount(amount + 1)}
        disabled={amount === 5}
      />
    </span>
  );
};
