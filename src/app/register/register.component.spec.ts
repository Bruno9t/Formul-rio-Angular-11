import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CadastroService } from './cadastro.service';

import { RegisterComponent } from './register.component';
import { User } from './user.interface';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let service:CadastroService
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      providers:[
        CadastroService,
        HttpClient
      ],
      imports:[
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CadastroService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Deve chamar o onSubmit",()=>{

    const userMock: User = {
      name:"Bruno",
      surname:"Medeiros"
    }

    spyOn(service,"addUser").and.returnValue(of(userMock))

    component.onSubmit()

    expect(service.addUser).toHaveBeenCalled()

  })
});
