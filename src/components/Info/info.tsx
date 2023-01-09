import { InfoSection, InfoCard, InfoContent, ContainerInfo } from "./infoStyle";

export default function Info() {
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
            <h3>+4</h3>
            <p>Meses no mercado</p>
          </InfoCard>
        </InfoContent>
      </InfoSection>
    </ContainerInfo>
  );
}
