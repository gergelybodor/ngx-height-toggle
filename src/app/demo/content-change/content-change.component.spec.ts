import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { NgxHeightToggleModule } from '../../modules/ngx-height-toggle/ngx-height-toggle.module';
import { ContentChangeComponent } from './content-change.component';
import { IpsumService } from '../shared/services/ipsum/ipsum.service';
import { NgxHeightToggleService } from '../../modules/ngx-height-toggle/ngx-height-toggle.service';

describe('ContentChangeComponent', () => {

  let component: ContentChangeComponent;
  let fixture: ComponentFixture<ContentChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxHeightToggleModule],
      declarations: [ContentChangeComponent],
      providers: [IpsumService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {

    it('should set paragraphs with ipsums', inject([IpsumService], (service: IpsumService) => {
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

  describe('updateContent', () => {

    it('should set variable paragraph2 with new ipsum and call contentChange on NgxHeightToggleService',
      inject([IpsumService, NgxHeightToggleService], (service: IpsumService, heightToggleService: NgxHeightToggleService) => {
        component.paragraph2 = '';
        const mockIpsum = 'mock ipsum text';
        const ipsum = spyOn(service, 'getDifferentIpsum').and.returnValue(mockIpsum);
        const updateContent = spyOn(heightToggleService, 'contentChange').and.callFake(() => {
          return null;
        });
        component.updateContent();
        expect(component.paragraph2).toBe(mockIpsum);
        expect(updateContent).toHaveBeenCalled();
      })
    );
  });

});
