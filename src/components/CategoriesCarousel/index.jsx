import { useEffect, useState } from 'react';
import { api } from '../../services/api.js';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, ContainerItens, Title } from './styles.js';


export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data)
            console.log(data);
        }

        loadCategories();
    }, []);


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1280, min: 690 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 2
        }
    };


    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel.default
                responsive={responsive}
                infinite={true}
                partialVisbile={false}
                itemClass='crousel-item'
            >
                {categories.map(category => (
                    <ContainerItens key={category.id} imageUrl={category.url}>
                        <p>{category.name}</p>
                    </ContainerItens>
                ))}

            </Carousel.default>
        </Container>
    )
}