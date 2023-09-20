import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {json} from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello-world")
  helloWorld() {
    return this.appService.getHello();
  }

  @Get()
  getPokemon() {
    return (this.appService.getPokemonList());
  }
}
