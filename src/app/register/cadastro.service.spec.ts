import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CadastroService } from './cadastro.service';
import { User } from './user.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('CadastroService', () => {
  let service: CadastroService;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClient
      ],
      imports:[
        HttpClientTestingModule,
        HttpClientModule
      ]
    });

    service = TestBed.inject(CadastroService);
    httpClient = TestBed.inject(HttpClient)

  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Deve retornar um User",()=> {
    const userMock: User = {
      name:"Bruno",
      surname:"Medeiros"
    }

    spyOn(service["http"],"post").and.returnValue(of(userMock))

    service.addUser(userMock)

    expect(service["http"].post).toHaveBeenCalled()

  })


});
