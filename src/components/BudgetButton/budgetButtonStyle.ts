import { styled } from "../../styles";

export const ButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const Button = styled("button", {
  backgroundColor: "$brandBlue800",
  padding: "1rem 3rem",
  border: "none",
  borderRadius: "40px",
  color: "white",
  fontSize: "1.8rem",
  width: "40rem",
});
