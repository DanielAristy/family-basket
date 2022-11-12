import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void{
        const { method, url: path, query, params, body } = req;
        console.log("Request... Method", method, "Url:", path, "Query", query, "Params", params, "Body", body);        
        next();
    }
}