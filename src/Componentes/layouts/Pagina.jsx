import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import { Container } from "react-bootstrap";

export default function Pagina(props) {
    const[listaCurtidas,setListaCurtidas] = useState([]);
    const[listaNCurtidas,setListaNCurtidas] = useState([]);
    return (
        <Container fluid>
            <Cabecalho/>
            {props.children}
            <Rodape informacoes={"O 1º turno do pleito está marcado para 6 de outubro."}/>
        </Container>
    );
}