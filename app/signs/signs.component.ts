import { Component, Input, OnInit } from '@angular/core';
import { Sign, PhoneSign, EmailSign } from './sign.model';

const DEFAULT_FACEBOOK_SIGN: Sign = {
    _id: '12345',
    bgColor: 'red',
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
    picUrl: 'https://il5.picdn.net/shutterstock/videos/3178849/thumb/1.jpg',
    signName: 'etsy',
    signType: 'custom',
    username: 'myetsyusername',
    owner: 'someusername'
};
const EMAIL_SIGN: EmailSign = {
    _id: '111111',
    bgColor: 'green',
    description: 'email sign',
    icon: 'envelope',
    knownAs: 'my email name',
    linkUrl: '',
    picUrl: 'https://il5.picdn.net/shutterstock/videos/3178849/thumb/1.jpg',
    signName: 'email',
    signType: 'generic',
    username: 'myemailname',
    email: "fakeemailsomething@example.com",
    owner: 'someusername'
};
const PHONE_SIGN: PhoneSign = {
    _id: '555555',
    bgColor: 'blue',
    description: 'phone sign',
    icon: 'phone',
    knownAs: 'my phone name',
    linkUrl: '',
    picUrl: 'https://il5.picdn.net/shutterstock/videos/3178849/thumb/1.jpg',
    signName: 'phone',
    signType: 'generic',
    username: 'myphonename',
    phone: "(555)555-5555",
    owner: 'someusername'
};

const SIGNS: Sign[] = [DEFAULT_FACEBOOK_SIGN, CUSTOM_ETSY_SIGN, EMAIL_SIGN, PHONE_SIGN];


@Component({
  moduleId: module.id,
  selector: 'signs-list',
  templateUrl: 'signs.component.html',
  styleUrls:  ['signs.component.css']
})

export class SignsComponent implements OnInit {
  @Input() signs: Sign[];

  // TODO: GET THE USER'S SIGNS BASED ON THE USERNAME IN THE ROUTE
  ngOnInit(): void {
    if(!this.signs || !this.signs.length) {
      this.signs = SIGNS;
    }
  }
}
