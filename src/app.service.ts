import { Injectable } from '@nestjs/common';
import {pokemon }from "./pokemon";
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPokemonList() {
    return pokemon;
  }

}
