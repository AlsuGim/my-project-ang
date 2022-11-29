import { Injectable } from '@angular/core';
import { Vinil } from '../../shared/models/Vinil';
@Injectable({
  providedIn: 'root'
})
export class VinilService {

  constructor() { }
  getAll(): Vinil[] {
    return [
      {
        id: 1,
        name: '1',
        price: 3500,
        performer: 'rr',
        favorite: true,
        origins: ['Italy'],
        stars: 4.0,
        imgUrl: '/assets/пластинки/9.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/13.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/15.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/16.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/19.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/18.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/21.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/22.jpg',
        tags: ['pop', 'rock']
      },
      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/23.jpg',
        tags: ['pop', 'rock']
      },

      {
        id: 2,
        name: 'ee',
        price: 2000,
        performer: 'rr',
        favorite: false,
        origins: ['Italy'],
        stars: 5.0,
        imgUrl: '/assets/пластинки/24.jpg',
        tags: ['pop', 'rock']
      }
    ]
  }
}
// '/assets/пластинки/9.jpg',
//       '/assets/пластинки/10.jpg',
//       '/assets/пластинки/11.jpg',
//       '/assets/пластинки/12.jpg',
//       '/assets/пластинки/13.jpg',
//       '/assets/пластинки/6.jpg',
//       '/assets/пластинки/14.jpg',
//       '/assets/пластинки/15.jpg',
//       '/assets/пластинки/16.jpg',
//       '/assets/пластинки/17.jpg',
//       '/assets/пластинки/18.jpg',
//       '/assets/пластинки/19.jpg',
//       '/assets/пластинки/21.jpg',
//       '/assets/пластинки/22.jpg',
//       '/assets/пластинки/23.jpg',
//       '/assets/пластинки/24.jpg',
//       '/assets/пластинки/25.jpg',
//       '/assets/пластинки/26.jpg',
//       '/assets/пластинки/27.jpg',
//       '/assets/пластинки/29.jpg',
//       '/assets/пластинки/30.jpg',
