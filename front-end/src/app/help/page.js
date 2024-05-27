// pages/index.js
import MyNavbar from "@/components/nav-bar";
import "bootstrap/dist/css/bootstrap.css";

import './style.css'




export default function Carometro() {
  return (
    <>
      <MyNavbar />
      <div class="container text-center">
        <div class="row">
          <div class="row col-12 gap-3">
            <div class='infos'>
              AJUDA!
            </div>
            <div class='topics'>
              Para utilizar o carometro você precisa estar logado!!
            </div>
            <div class='topics'>
              Para acessar o carometro <a class="active" href="/">CLICK AQUI</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
