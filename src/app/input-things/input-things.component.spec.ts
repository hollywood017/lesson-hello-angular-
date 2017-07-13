import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputThingsComponent } from './input-things.component';

describe('InputThingsComponent', () => {
  let component: InputThingsComponent;
  let fixture: ComponentFixture<InputThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
