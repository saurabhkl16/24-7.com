import { TestBed } from '@angular/core/testing';

import { ProjectKService } from './project-k.service';

describe('ProjectKService', () => {
  let service: ProjectKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
