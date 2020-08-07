import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PathRequestPage } from './path-request.page';

describe('PathRequestPage', () => {
  let component: PathRequestPage;
  let fixture: ComponentFixture<PathRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PathRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
