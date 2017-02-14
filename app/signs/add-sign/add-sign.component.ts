import { Component, Output, EventEmitter } from '@angular/core';
import { HelpersService } from '../../shared/helpers/helpers.service';
import { Sign } from '../sign.model';

export class Link {
  url:     string;
  icon:    string;
  bgColor: string;
}

const OLINKS: Link[] = [
  {url: 'www.google.com', icon: 'facebook', bgColor: 'green'},
  {url: 'www.google.com', icon: 'instagram', bgColor: 'blue'},
  {url: 'www.google.com', icon: 'linkedin', bgColor: 'red'},
  {url: 'www.google.com', icon: 'vine', bgColor: 'orange'},
  {url: 'www.google.com', icon: 'reddit', bgColor: 'yellow'},
  {url: 'www.google.com', icon: 'snapchat', bgColor: 'purple'},
  {url: 'www.google.com', icon: 'pinterest', bgColor: 'black'}
];

const CUSTOM_SIGNS: Sign[] = [
  { signName: 'podcast', signType: 'custom', bgColor: 'red', icon: 'podcast',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'etsy', signType: 'custom', bgColor: 'blue', icon: 'etsy',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'quora', signType: 'custom', bgColor: 'brown', icon: 'quora',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'meetup', signType: 'custom', bgColor: 'yellow', icon: 'meetup',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'website', signType: 'custom', bgColor: 'green', icon: 'globe',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'digg', signType: 'custom', bgColor: 'orange', icon: 'digg',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'amazon', signType: 'custom', bgColor: 'yellow', icon: 'amazon',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'angellist', signType: 'custom', bgColor: 'green', icon: 'angellist',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'flickr', signType: 'custom', bgColor: 'black', icon: 'flickr',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'houzz', signType: 'custom', bgColor: 'purple', icon: 'houzz',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
  { signName: 'spotify', signType: 'custom', bgColor: 'green', icon: 'spotify',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '', username: '', owner: '' },
]

// HOW SHOW THE PHONE & EMAIL SIGNS?????
const GENERIC_SIGNS: Sign[] = [
  { signName: 'phone', signType: 'generic', bgColor: 'purple', icon: 'phone',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '#', username: '', owner: '' },
  { signName: 'email', signType: 'generic', bgColor: 'black', icon: 'envelope',
    _id: '', description: '', knownAs: '', linkUrl: '#', picUrl: '#', username: '', owner: '' },
];




@Component({
  moduleId: module.id,
  selector: 'add-sign',
  templateUrl: 'add-sign.component.html',
  styleUrls:  ['add-sign.component.css']
})

export class AddSignComponent {
  oauths: Link[] = OLINKS;
  customs: Sign[] = CUSTOM_SIGNS;
  selectedSign: Sign;

  showAddSignIcons: boolean = false;
  showSignForm: boolean = false;
  @Output() saveEE  = new EventEmitter<any>()
  @Output() destroyEE = new EventEmitter<any>();

  constructor(private helpers: HelpersService) {}


  toggleShowAddSignIcons(input: any = null): void {
    // If setting value directly, do that. Else, just toggle the value
    if(typeof(input) === 'boolean') { this.showAddSignIcons = input; }
    else { this.showAddSignIcons = !this.showAddSignIcons; }
  }

  toggleShowForm(input: any = null):void {
    // If setting value directly, do that. Else, just toggle the value
    if(typeof(input) === 'boolean') { this.showSignForm = input; }
    else { this.showSignForm = !this.showSignForm; }
  }

  setSign(sign: Sign) {
    this.selectedSign = sign;
    console.log("SETTING SIGN TO: ", sign);
  }

  destroy(event: any) {
    console.log("IN ADD-SIGN DESTROY FUNCTION; EVENT IS ", event);
    // SHOULD NEVER NEED THIS ON AN ADD-SIGN AREA; ONLY ON NORMAL SIGN.
    // if(!!event.sign && event.destroy === true) {
    //   this.destroyEE.emit(event);
    // }
    this.toggleShowForm(false);
  }

  save(event: any) {
    console.log("SIGN AT THE ADDSIGN LEVEL IS: ", event);
    // Reset the area to closed. Triggered by event emitters from inner save/close
    this.closeForms();
    this.saveEE.emit(event);    // keep passing the sign up
  }

  private closeForms() {
    this.toggleShowAddSignIcons(false);
    this.toggleShowForm(false);
  }
}

