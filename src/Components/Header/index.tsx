import { 
  Container, 
  TextBox, 
  Title,
  Text,
  Logo
} from "./Styles";
import LogoMarvel from "../../assets/logo/Group@1,5x.svg"

export const Header = () => {
  return(
    <Container>
      <TextBox>
        <Logo src={LogoMarvel} />
        <Title>EXPLORE O UNIVERSO</Title>
        <Text>Mergulhe no domínio deslumbrante de todos os personagens clássicos 
          que você ama - e aqueles que você descobrirá em breve!
        </Text>
      </TextBox>
    </Container>
  );
}