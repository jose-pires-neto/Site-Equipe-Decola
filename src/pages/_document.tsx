import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
