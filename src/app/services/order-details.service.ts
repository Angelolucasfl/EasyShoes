import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  Shoes = [
    {
      id:1,
      ShoeName:"Court Vision Lo",
      ShoeDetails:"Tenis Nike - Feminino",
      ShoePrice:350,
      ShoeImg:"../../../assets/products/shoe1.jpg"
    },
    {
      id:2,
      ShoeName:"All Star CT AS Core OX CT0001",
      ShoeDetails:"Tenis Converse - Feminino",
      ShoePrice:280,
      ShoeImg:"../../../assets/products/shoe2.jpg"
    },
    {
      id:3,
      ShoeName:"Runfalcon 3.0",
      ShoeDetails:"Tenis Adidas - Feminino",
      ShoePrice:299,
      ShoeImg:"../../../assets/products/shoe3.jpg"
    },
    {
      id:4,
      ShoeName:"Air Winflo 9",
      ShoeDetails:"Tenis Nike - Feminino",
      ShoePrice:300,
      ShoeImg:"../../../assets/products/shoe4.jpg"
    },
    {
      id:5,
      ShoeName:"Smash V3 BDP",
      ShoeDetails:"Tenis Puma - Masculino",
      ShoePrice:260,
      ShoeImg:"../../../assets/products/shoe5.jpg"
    },
    {
      id:6,
      ShoeName:"Revolution 6 Psv",
      ShoeDetails:"Tenis Nike - Masculino",
      ShoePrice:380,
      ShoeImg:"../../../assets/products/shoe6.jpg"
    }
  ]
}
