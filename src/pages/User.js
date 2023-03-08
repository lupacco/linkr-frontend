import styled from "styled-components";
import Header from "../components/Header";

export default function User(){
    return(
        <>
            <Header/>
            <Container>
                <h1>Juvenal Juvêncio's posts</h1>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: green;
    margin: auto;
`