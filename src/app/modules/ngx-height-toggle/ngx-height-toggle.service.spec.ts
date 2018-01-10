import { TestBed, inject } from '@angular/core/testing';
import { NgxHeightToggleService } from './ngx-height-toggle.service';

describe('NgxHeightToggleService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxHeightToggleService]
    });
  });

  it('should be created', inject([NgxHeightToggleService], (service: NgxHeightToggleService) => {
    expect(service).toBeTruthy();
  }));

  describe('contentChange', () => {

    it('should call next on contentChanges subject object', inject([NgxHeightToggleService], (service: NgxHeightToggleService) => {
      const next = spyOn(service.contentChanges, 'next').and.callFake(() => {
        return null;
      });
      service.contentChange();
      expect(next).toHaveBeenCalled();
    }));
  });

});
