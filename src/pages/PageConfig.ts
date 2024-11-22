import Capa from "./1.Capa";
import VersiculosJoao from "./2.VersiculosJohn";
import { Prezado } from "./3.PrezadoLeitor";
import Usufruir from "./4.Usufruir";

export interface PageConfig {
  component: React.ComponentType;
  title: string;
}

export const pages: PageConfig[] = [
  {
    component: Capa,
    title: "Capa",
  },
  {
    component: VersiculosJoao,
    title: "Versículos de João",
  },
  {
    component: Prezado,
    title: "Prezado Leitor",
  },
  {
    component: Usufruir,
    title: "Usufruir sem usucapir",
  },
];
