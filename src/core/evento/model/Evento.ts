import Convidado from "./Convidado";

export default interface Evento {
    id: string; // uuid
    alias: string; // aniversário-nome-data
    senha: string;
    nome: string;
    data: Date;
    local: string;
    descricao: string;
    imagem: string;
    imagemBackground: string;
    publicoEsperado: number;
    convidados: Convidado[];
}