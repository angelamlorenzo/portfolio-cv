import { animate, state, style, transition, trigger } from '@angular/animations';

const duration: string = '200ms';

const effectShow = [style({ opacity: 0 }), animate(duration, style({ opacity: 1 }))];

const effectHide = [style({ opacity: 1, display: 'block' }), animate(duration, style({ opacity: 0 }))];

const effectDown = [style({ top: -25, opacity: 0 }), animate(duration, style({ top: 0, opacity: 1 }))];

const effectUp = [style({ top: 0, opacity: 1, display: 'block' }), animate(duration, style({ top: -25, opacity: 0 }))];

export const moveDownUpStatus = trigger('moveDownUpStatus', [transition('false=>true', effectDown), transition('true=>false', effectUp)]);

export const showHideStatus = trigger('showHideStatus', [transition('false=>true', effectShow), transition('true=>false', effectHide)]);

export const showHideInOut = trigger('showHideInOut', [transition(':enter', effectShow), transition(':leave', effectHide)]);

export const collapseAnimation = trigger('collapseAnimation', [
  state('true', style({ height: '*' })),
  state('false', style({ opacity: 0, height: '0px' })),
  transition('true=>false', [animate(`${duration} ease-out`)]),
  transition('false=>true', [animate(`${duration} ease-in`)]),
]);
