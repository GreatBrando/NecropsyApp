import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NecropsyTaskFulfillmentPage } from './necropsy-task-fulfillment.page';

describe('NecropsyTaskFulfillmentPage', () => {
  let component: NecropsyTaskFulfillmentPage;
  let fixture: ComponentFixture<NecropsyTaskFulfillmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecropsyTaskFulfillmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NecropsyTaskFulfillmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
