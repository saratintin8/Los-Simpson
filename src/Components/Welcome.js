import styled from "styled-components";
import Imagen from "../Images/the-simpson.png";

export default function Welcome(props) {
    const {reqApi} = props;
    return (
        <ContentLogo>
            <WelcomeText>
                Bienvenido, para poder utilizar las frases, da clic en la imagen
            </WelcomeText>
            <Image src={Imagen} alt="lossimpson" onClick={reqApi} />
        </ContentLogo>
    );
}

const Image = styled.img`

    width:450px;
    height:auto;
    &:hover{
    cursor:pointer;
    }

`;

const ContentLogo = styled.div`

    width:100%;
    text-align:center;


`;

const WelcomeText = styled.p`
    color:#2a9d8f;
    text-align:center;
    font-weight:900;
    padding:50px 0 10px 0;
    font-size:25px;
`;