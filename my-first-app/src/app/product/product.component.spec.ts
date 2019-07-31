import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { By } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports :[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
    // .then(() =>{
    //    fixture = TestBed.createComponent(ProductComponent);
    //    component = fixture.componentInstance;
    //    fixture.detectChanges();
    // })
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ProductComponent);
  //   component = fixture.componentInstance; //create acomponent
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  fit('should have title as Product Component', async() => {
    const fixture = TestBed.createComponent(ProductComponent);
    const component = fixture.componentInstance;
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Product Component');
    // fixture.detectChanges();
    // let  h1 = fixture.nativeElement.querySelector('h1');
    //  expect(h1.textContent).toContain('Product Component');
  })

  // fit('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(ProductComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));

  // fit('onClick of submit button, it should call addProduct function', () => {

    
  //   const fixture = TestBed.createComponent(ProductComponent);
  //   fixture.detectChanges();

  //   const productComponent = fixture.debugElement.componentInstance();
    
  //   let spy = spyOn(productComponent,'addPorduct');


  //   fixture.detectChanges();
  //   // let btn = fixture.debugElement.nativeElement.querySelector('button');

  //   let btn = fixture.debugElement.query(By.css('button')).nativeElement;

  //   btn.click();

  //   expect(spy).toHaveBeenCalled();
  //   expect(spy).toHaveBeenCalledTimes(2);
  // })
});
