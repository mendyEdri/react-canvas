import {Viewable, BaseView, ViewTypes} from "./BaseView";

export interface Textable extends Viewable {
  text: string;
}

export class Text extends BaseView implements Textable {
  text: string;
  type = ViewTypes.text;
  
  constructor(text: string) {
    super();
    this.text = text;
  }
}
