import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';  // Import the necessary modules
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with default values', () => {
    expect(component.form).toBeTruthy()
    expect(component.form.controls['username'].value).toBe('');
    expect(component.form.controls['email'].value).toBe('');
    expect(component.form.controls['password'].value).toBe('');
    expect(component.form.valid).toBe(false);
  });

  it('should disable the button if the form is invalid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });

  it('should validate the email field', () => {
    const emailControl = component.form.controls['email'];

    expect(emailControl.valid).toBe(false);
    expect(emailControl.errors).toEqual({ required: true });

    emailControl.setValue('invalid-email');
    expect(emailControl.errors).toEqual({ email: true });

    emailControl.setValue('name@email.com');
    expect(emailControl.errors).toBeNull();
    expect(emailControl.valid).toBe(true);
  });
});