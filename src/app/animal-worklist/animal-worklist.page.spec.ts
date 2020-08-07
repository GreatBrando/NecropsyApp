import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalWorklistPage } from './animal-worklist.page';

describe('AnimalWorklistPage', () => {
  let component: AnimalWorklistPage;
  let fixture: ComponentFixture<AnimalWorklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalWorklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalWorklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
