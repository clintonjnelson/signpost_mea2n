import { Component, Input } from '@angular/core';
import { HelpersService } from '../helpers/helpers.service';

@Component({
  moduleId: module.id,
  selector: 'icon-link',
  templateUrl: 'icon-links.component.html',
  styleUrls:  ['icon-links.component.css']
})

export class IconLinkComponent {
  @Input() url:      string;
  @Input() icon:     string;
  @Input() bgColor:  string;
  @Input() iconSize: string;

  constructor( private helpers: HelpersService ) {}
}
