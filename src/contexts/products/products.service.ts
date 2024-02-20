import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    const products = await this.prismaService.product.findMany();
    return products;
  }

  async findOne(productId: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
    });
    return product;
  }
}
