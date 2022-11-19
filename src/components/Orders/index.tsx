import { orders } from '../../mocks/orders';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕰"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨🏻‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}