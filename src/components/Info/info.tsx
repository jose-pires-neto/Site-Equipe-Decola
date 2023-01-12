import React, { useState, useEffect, useMemo } from 'react';
import { InfoSection, InfoCard, InfoContent, ContainerInfo } from './infoStyle';

export default function Info() {
  const dataInicial = useMemo(() => new Date('2022-08-01'), []);
  const [meses, setMeses] = useState(0);

  const calcularMeses = () => {
    const dataAtual = new Date();
    const diferenca = dataAtual.getTime() - dataInicial.getTime();
    const mesesPassados = Math.floor(diferenca / (30 * 24 * 60 * 60 * 1000));
    setMeses(mesesPassados);
  };

  useEffect(() => {
    calcularMeses();
    const interval = setInterval(calcularMeses, 30 * 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerInfo>
      <InfoSection>
        <InfoContent>
          <InfoCard>
            <h3>+4</h3>
            <p>Clientes atendidos</p>
          </InfoCard>
          <hr />
          <InfoCard>
            <h3>+15</h3>
            <p>Trabalhos concluidos</p>
          </InfoCard>
          <hr />
          <InfoCard>
            <h3>+{meses}</h3>
            <p>Meses no mercado</p>
          </InfoCard>
        </InfoContent>
      </InfoSection>
    </ContainerInfo>
  );
}
