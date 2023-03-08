import styled from "styled-components";
//Components
import Header from "../components/Header";
import Post from "../components/Post";
import UserPicture from "../components/UserPicture";

export default function User(){
    return(
        <>
            <Header/>
            <Container>
                <div>
                    <UserPicture/>
                    <h1>Juvenal Juvêncio's postsssss</h1>
                </div>
                <Post/>
            </Container>
        </>
    )
}

const Container = styled.div`
    >div{
        display: flex;
        align-items: center;
        margin: 32px 0;
        >h1{
            margin-left: 8px;
            font-family: 'Oswald', sans-serif;
            color: #FFFFFF;
            font-size: 50px;
            font-weight: 700;
        }
    }
    background-color: green;
    margin: 0 20%;
`