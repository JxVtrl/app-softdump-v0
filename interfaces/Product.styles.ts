export interface ProductProps {
    id: string;
    name: string;
    price: number;
    image: string;
    type: 'main' | 'default';
    exclusive: boolean;
}