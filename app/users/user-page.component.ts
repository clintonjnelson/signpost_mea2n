import { Component } from '@angular/core';
import { Sign, PhoneSign, EmailSign } from '../signs/sign.model';

const DEFAULT_FACEBOOK_SIGN: Sign = {
    _id: '12345',
    bgColor: '#3b5998',
    description: 'some sign',
    icon: 'facebook-official',
    knownAs: 'my name',
    linkUrl: 'http://facebook.com',
    picUrl: 'https://il5.picdn.net/shutterstock/videos/3178849/thumb/1.jpg',
    signName: 'facebook',
    signType: 'default',
    username: 'myactualusername',
    owner: 'someusername'
  };
const CUSTOM_ETSY_SIGN: Sign = {
    _id: '54321',
    bgColor: 'orange',
    description: 'etsy sign',
    icon: 'etsy',
    knownAs: 'my etsy name',
    linkUrl: 'http://etsy.com',
    picUrl: 'https://img0.etsystatic.com/161/0/98486062/iusa_75x75.48280840_n58p.jpg',
    signName: 'etsy',
    signType: 'custom',
    username: 'myetsyusername',
    owner: 'someusername'
};
const EMAIL_SIGN: EmailSign = {
    _id: '111111',
    bgColor: '#88B04B',
    description: 'email sign',
    icon: 'envelope',
    knownAs: 'my email name',
    linkUrl: '',
    picUrl: '',
    signName: 'email',
    signType: 'generic',
    username: 'myemailname',
    email: "fakeemailsomething@example.com",
    owner: 'someusername'
};
const PHONE_SIGN: PhoneSign = {
    _id: '555555',
    bgColor: '#964F4C',
    description: 'phone sign',
    icon: 'phone',
    knownAs: 'my phone name',
    linkUrl: '',
    picUrl: '',
    signName: 'phone',
    signType: 'generic',
    username: 'myphonename',
    phone: "(555)555-5555",
    owner: 'someusername'
};

const SIGNS: Sign[] = [DEFAULT_FACEBOOK_SIGN, CUSTOM_ETSY_SIGN, EMAIL_SIGN, PHONE_SIGN];



@Component({
  moduleId: module.id,
  selector: "user-page",
  templateUrl: 'user-page.component.html',
  styleUrls:  ['user-page.component.css']
})

export class UserPageComponent {
  signs: Sign[];

  // TODO: GET THE USER'S SIGNS BASED ON THE USERNAME IN THE ROUTE
  ngOnInit(): void {
    this.signs = SIGNS;
  }

  close(event: any): void {
    // INSTEAD OF MANUALLY PUSHING, MIGHT WANT TO JUST RELOAD FROM SERVER!
    this.signs.push(event);     // bubbles sign up, so add it to the list
  }
}
