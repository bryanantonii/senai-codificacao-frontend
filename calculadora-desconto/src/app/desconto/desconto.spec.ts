import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Desconto } from './desconto';

describe('Desconto', () => {
  let component: Desconto;
  let fixture: ComponentFixture<Desconto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desconto],
    }).compileComponents();

    fixture = TestBed.createComponent(Desconto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
