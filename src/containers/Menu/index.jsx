import { useEffect, useState } from 'react';
import {
  Banner,
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductsContainer,
} from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { useNavigate } from 'react-router-dom';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];

      setCategories(data);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyValue: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    }

    loadCategories();
    loadProducts();
  }, []);

  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR <br /> HAMBURGER <br /> ESTÁ AQUI{' '}
          <span>Esse cardápio está irresistível</span>
        </h1>
      </Banner>

      <CategoriesMenu>
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            onClick={() => {
              navigate({ pathname: '/cardapio' });
            }}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>

      <ProductsContainer>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
