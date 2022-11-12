import { IsOptional, IsUUID, IsString, IsPositive, IsNumber, IsNotEmpty } from "class-validator";
import { v4 as uuid } from 'uuid';

export class ProductDto {
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    @IsString()
    @IsNotEmpty()
    readonly name: string;
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly price: number;
    @IsOptional()
    readonly date?: string;
    constructor(userDto: ProductDto){
        this.id = userDto?.id ?? uuid();
        this.name = userDto?.name;
        this.price = userDto?.price;
        this.date = userDto?.date ?? new Date().toISOString();
    }
}
