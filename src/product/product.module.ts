import { Module, Post } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';
import { LoggerMiddleware } from './logger.middelware';
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes(
        { path: 'api/product', method: RequestMethod.POST,},
        { path: 'api/products', method: RequestMethod.ALL,}
      );
  }
}
