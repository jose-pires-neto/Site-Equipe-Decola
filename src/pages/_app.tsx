import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';

import { Wrapper } from '../styles/_app';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { ButtonChat } from '../components/Chat/buttonChat';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
      <ButtonChat />
      <Footer />
    </Wrapper>
  );
}
