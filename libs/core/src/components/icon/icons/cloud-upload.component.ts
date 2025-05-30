import { gdsCustomElement } from '../../../scoping'
import { GdsIcon } from '../icon'

/**
 * @element gds-icon-cloud-upload
 */
@gdsCustomElement('gds-icon-cloud-upload')
export class IconCloudUpload extends GdsIcon {
  /** @private */
  static _regularSVG = `<path d="M12 19.25V11.75M12 11.75L14.5 14.25M12 11.75L9.5 14.25M15 19.25H18.125C20.4032 19.25 22.25 17.4032 22.25 15.125C22.25 12.8468 20.4032 11 18.125 11C18.0814 11 18.038 11.0007 17.9948 11.002C17.9983 10.9184 18 10.8344 18 10.75C18 7.43629 15.3137 4.75 12 4.75C9.3716 4.75 7.13793 6.44009 6.32647 8.7928C3.74507 9.12339 1.75 11.3287 1.75 14C1.75 16.8995 4.10051 19.25 7 19.25H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  /** @private */
  static _solidSVG = `<path d="M5.77996 8.12427C6.80396 5.70153 9.20241 4 12 4C15.5725 4 18.4969 6.77542 18.7344 10.2877C21.1392 10.5876 23 12.639 23 15.125C23 17.8174 20.8174 20 18.125 20H12.75V13.5607L13.9697 14.7803C14.2626 15.0732 14.7374 15.0732 15.0303 14.7803C15.3232 14.4874 15.3232 14.0126 15.0303 13.7197L12.5303 11.2197C12.2374 10.9268 11.7626 10.9268 11.4697 11.2197L8.96967 13.7197C8.67678 14.0126 8.67678 14.4874 8.96967 14.7803C9.26256 15.0732 9.73744 15.0732 10.0303 14.7803L11.25 13.5607V20H7C3.68629 20 1 17.3137 1 14C1 11.1041 3.05102 8.68825 5.77996 8.12427Z" fill="currentColor"/>`
  /** @private */
  static _name = 'cloud-upload'
  /** @private */
  static _width = 24
  /** @private */
  static _height = 24
  /** @private */
  static _viewBox = '0 0 24 24'
}