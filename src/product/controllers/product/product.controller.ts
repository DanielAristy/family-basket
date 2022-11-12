import { ProductService } from './../../services/product/product.service';
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ProductDto } from 'src/product/dtos/product.dto/product.dto';

@Controller('api/')
export class ProductController {
    constructor(private readonly service: ProductService){}

    @Get('products')
    findAll(){
        return this.service.findAll();
    }

    @Post('product')
    save(
        @Body(
            new ValidationPipe({
              transform: true,
              whitelist: true,
              forbidNonWhitelisted: true,
            }),
        ) 
        product: ProductDto
    ): ProductDto {
        return this.service.createProduct(product);
    }
}
