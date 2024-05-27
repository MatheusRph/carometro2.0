import Image from "next/image";
import "./styles/info.css"

export default function Info() {
    return (
        <div className="container text-center m-0 flex-wrap">
            <div className="row m-0">
                <div className="col p-0 m-0 pt-5">
                    <Image src='/image/aluno1.jpg' alt="Foto do aluno" className="borda imagem" width={400} height={450}/>  
                </div>
                <div className="col p-0 m-0 pt-5 text-start jomhuria-regular">
                    <h1>Jair Messias Bolsonaro</h1>
                <div>
                    <h4>CEL: (14)99861-4567</h4>
                    <h4>E-mail: bolsonarojair@gmail.com</h4>
                    <h4>Nascimento: 99/99/2002 - Idade: 99</h4>
                    <h4>CPF: 565.884.123.15</h4>
                    <h4>RG: 66.124.543-75</h4>
                    
                    </div>
                    <div className="mt-5">
                        <h5>Observaçoes: </h5>
                        <h5>Ocorrencias: ""</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
