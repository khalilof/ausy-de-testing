import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService
      ]
    });
    service = TestBed.inject<ProductsService>(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products ', () => {
    const prods = ['product1', 'product2', 'product3', 'product4'];
    service.getProducts().subscribe(v => {
      expect(v.length).toBe(4);
      expect(v[0]).toEqual(prods[0]);
      expect(v[1]).toEqual(prods[1]);
      expect(v[2]).toEqual(prods[2]);
      expect(v[3]).toEqual(prods[3]);
    });
  });
});
