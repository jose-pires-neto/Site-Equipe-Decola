import { InfoSection, InfoCard, InfoContent } from "./infoStyle";

export default function Info() {
  return (
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
          <h3>+4</h3>
          <p>Meses no mercado</p>
        </InfoCard>
      </InfoContent>
    </InfoSection>
  );
}
