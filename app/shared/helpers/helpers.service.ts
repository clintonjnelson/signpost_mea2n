import { Injectable } from '@angular/core';

@Injectable()

export class HelpersService {

  // Build FontAwesome Class styling syntax from icon name
  buildIconClass(iconName: string, size: string = '4'): string {
    return (`fa fa-${iconName} fa-${size}x`);
  }

  // Phone Formatter Function?
}
