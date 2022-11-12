import { Injectable } from '@nestjs/common';
import { ProductDto } from '../../dtos/product.dto/product.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {
    private products: ProductDto[] = [
        { 
            id: uuid(),
            name: "Leche Cola", 
            price: 3000,
            date: new Date().toISOString(),
        },
        { 
            id: uuid(),
            name: "Galletas Ducales", 
            price: 5000,
            date: new Date().toISOString(),
        },
        { 
            id: uuid(),
            name: "NestCafe Buendia", 
            price: 15000,
            date: new Date().toISOString(),
        },
    ];

    findAll(){
        return this.products;
    }

    createProduct(productDto: ProductDto){
        const newProduct = {
            id: uuid(),
            ...productDto,
            date: new Date().toISOString(),
        };
        this.products.push(newProduct);
        
        return newProduct;
    }
}
