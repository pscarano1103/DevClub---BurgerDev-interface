import Logo from '../../assets/Logo.svg';
import { CartResume } from '../../components';
import { CartItens } from '../../components/CartItens';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="Logo DevBurger" />
      </Banner>

      <Title>Checkout - Pedido</Title>

      <Content>
        <CartItens></CartItens>
        <CartResume></CartResume>
      </Content>
    </Container>
  );
}
