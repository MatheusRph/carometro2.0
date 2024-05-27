import Curso from "@/components/curso";
import Info from "@/components/info";
import NameAluno from "@/components/nameAluno";
import MyNavbar from "@/components/nav-bar";
import './style.css'

export default function Alunos() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <NameAluno></NameAluno>
      <Curso></Curso>
      <Info></Info>
    </>
  );
}
