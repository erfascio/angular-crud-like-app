import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtenteComponent } from './list-utente.component';

describe('ListUtenteComponent', () => {
  let component: ListUtenteComponent;
  let fixture: ComponentFixture<ListUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUtenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
