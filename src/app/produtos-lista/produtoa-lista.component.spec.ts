import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoaListaComponent } from './produtoa-lista.component';

describe('ProdutoaListaComponent', () => {
  let component: ProdutoaListaComponent;
  let fixture: ComponentFixture<ProdutoaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutoaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
