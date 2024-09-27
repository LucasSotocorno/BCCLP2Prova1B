import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Candidato from "./elementos/Candidato";
import { Button } from "bootstrap";

export default function DetalhesCandidato(props) {
    const [exibirCandidato, setExirCandidato] = useState(true);
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            { 
                <Candidato setExirCandidato={setExirCandidato}></Candidato>
                //<Button onClick={}>Voltar</Button>
            }
        </Container>
    );
}