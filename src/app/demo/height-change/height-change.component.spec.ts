import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { NgxHeightToggleModule } from '../../modules/ngx-height-toggle/ngx-height-toggle.module';
import { HeightChangeComponent } from './height-change.component';
import { IpsumService } from '../shared/services/ipsum/ipsum.service';

describe('HeightChangeComponent', () => {

  let component: HeightChangeComponent;
  let fixture: ComponentFixture<HeightChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxHeightToggleModule],
      declarations: [HeightChangeComponent],
      providers: [IpsumService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    it('should set paragraphs with ipsums', inject ([IpsumService], (service: IpsumService) => {
      const mockIpsum = 'mock ipsum text';
      const ipsum = spyOn(service, 'getIpsum').and.returnValue(mockIpsum);
      component.ngOnInit();
      expect(ipsum).toHaveBeenCalledTimes(3);
      expect(component.paragraph1).toBe(mockIpsum);
      expect(component.paragraph2).toBe(mockIpsum);
      expect(component.paragraph3).toBe(mockIpsum);
    }));
  });

  describe('toggle', () => {

    it('should toggle value of open', () => {
      component.open = false;
      component.toggle();
      expect(component.open).toBeTruthy();
      component.toggle();
      expect(component.open).toBeFalsy();
    });
  });

});
