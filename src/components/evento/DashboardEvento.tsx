import { Convidado, Evento } from "@/core";
import InformacoesEvento from "./InformacoesEvento";
import AcessarViaQrCode from "./AcessarViaQeCode";
import Estatistica from "../shared/Estatistica";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={props.evento} className="flex-1" />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de convidados"
          valor={props.evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de confirmações:"
          valor={props.presentes.length}
          imagem="/icones/confirmados.svg"
        />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de confirmados:"
          valor={props.totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>
    </div>
  );
}
