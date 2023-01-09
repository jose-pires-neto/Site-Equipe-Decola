import { Button, ButtonContainer } from "./budgetButtonStyle";
import Link from "next/link";

export default function BudgetButton() {
  return (
    <ButtonContainer>
      <Link href="https://api.whatsapp.com/send?phone=5591984490280">
        <Button>
          <p>FAÇA O SEU ORÇAMENTO {">>>"} </p>
        </Button>
      </Link>
    </ButtonContainer>
  );
}
