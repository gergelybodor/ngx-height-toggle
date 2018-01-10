import { TestBed, inject } from '@angular/core/testing';
import { IpsumService } from './ipsum.service';

describe('IpsumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpsumService]
    });
  });

  it('should be created', inject([IpsumService], (service: IpsumService) => {
    expect(service).toBeTruthy();
  }));

  describe('getIpsum', () => {

    it('should return random item from ipsums array', inject([IpsumService], (service: IpsumService) => {
      expect(service['ipsums']).toContain(service.getIpsum());
    }));
  });

  describe('getDifferentIpsum', () => {

    it('should return different item from ipsums array than passed', inject([IpsumService], (service: IpsumService) => {
      const mockCurrentIpsum = 'current mock ipsum text';
      const mockOtherIpsum = 'some other mock ipsum text';
      service['ipsums'] = [mockCurrentIpsum, mockOtherIpsum];
      expect(service.getDifferentIpsum(mockCurrentIpsum)).toBe(mockOtherIpsum);
    }));

    it('should return passed parameter if ipsums array has one or less items', inject([IpsumService], (service: IpsumService) => {
      const passedIpsum = 'some ipsum text';
      service['ipsums'] = ['some mock ipsum text'];
      expect(service.getDifferentIpsum(passedIpsum)).toBe(passedIpsum);
      service['ipsums'] = [];
      expect(service.getDifferentIpsum(passedIpsum)).toBe(passedIpsum);
    }));

    it('should return passed parameter if it isn\'t in the ipsums array', inject([IpsumService], (service: IpsumService) => {
      const passedIpsum = 'some ipsum text not part of array';
      service['ipsums'] = ['some mock ipsum text', 'some other mock ipsum text'];
      expect(service.getDifferentIpsum(passedIpsum)).toBe(passedIpsum);
    }));
  });

});
