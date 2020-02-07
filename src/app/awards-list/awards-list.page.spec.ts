import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AwardsListPage } from './awards-list.page';

describe('AwardsListPage', () => {
  let component: AwardsListPage;
  let fixture: ComponentFixture<AwardsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
