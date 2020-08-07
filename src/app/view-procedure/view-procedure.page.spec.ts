import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewProcedurePage } from './view-procedure.page';

describe('ViewProcedurePage', () => {
  let component: ViewProcedurePage;
  let fixture: ComponentFixture<ViewProcedurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcedurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProcedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
