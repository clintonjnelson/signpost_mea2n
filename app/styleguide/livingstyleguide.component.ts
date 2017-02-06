import { Component } from '@angular/core';
import { User } from '../users/user.model';
import { Sign, EmailSign, PhoneSign } from 'signs/sign.model';

const USERS: User[] = [
    {username: 'Jen',   picUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg'},
    {username: 'clint', picUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/44_Bill_Clinton_3x4.jpg/220px-44_Bill_Clinton_3x4.jpg'}
  ];
const DEFAULT_FACEBOOK_SIGN: Sign = {
    _id: '12345',
    bgColor: 'red',
    description: 'some sign',
    icon: 'facebook-official',
    knownAs: 'my name',
    linkUrl: 'http://facebook.com',
    picUrl: 'https://il5.picdn.net/shutterstock/videos/3178849/thumb/1.jpg',
    signName: 'facebook',
    signType: 'facebook',
    username: 'myactualusername',
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
    signType: 'email',
    username: 'myemailname',
    email: "fakeemail@example.com"
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
    signType: 'phone',
    username: 'myphonename',
    phone: "(555)555-5555"
};

const SIGNS: Sign[] = [DEFAULT_FACEBOOK_SIGN, CUSTOM_ETSY_SIGN, EMAIL_SIGN, PHONE_SIGN];

@Component({
  moduleId: module.id,
  selector: 'livingstyleguide',
  templateUrl: 'livingstyleguide.component.html',
  styleUrls:  ['livingstyleguide.component.css']
})

export class LivingStyleGuideComponent {
  // May need to hardcode things in here for components brought in


  // SearchResultsComponent
  users = USERS;
  signs = SIGNS;

  // SignComponent
  customSign = CUSTOM_ETSY_SIGN;
  defaultSign = DEFAULT_FACEBOOK_SIGN;
  emailSign   = EMAIL_SIGN;
  phoneSign   = PHONE_SIGN;

}
