import Image from "next/image";
import { HeroStyle } from "./heroStyle";
import test from "../../assets/gif1.gif";

export default function Hero() {
  return (
    <HeroStyle>
      <Image src={test} alt="gif de pessoas em uma reunião"></Image>
    </HeroStyle>
  );
}
