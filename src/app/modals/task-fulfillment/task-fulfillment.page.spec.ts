import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskFulfillmentPage } from './task-fulfillment.page';

describe('TaskFulfillmentPage', () => {
  let component: TaskFulfillmentPage;
  let fixture: ComponentFixture<TaskFulfillmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFulfillmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFulfillmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
