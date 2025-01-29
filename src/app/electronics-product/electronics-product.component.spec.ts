import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsProductComponent } from './electronics-product.component';

describe('ElectronicsProductComponent', () => {
  let component: ElectronicsProductComponent;
  let fixture: ComponentFixture<ElectronicsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectronicsProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
