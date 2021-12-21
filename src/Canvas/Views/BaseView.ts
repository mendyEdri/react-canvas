
export enum ViewTypes {
  text = 'text',
  view = 'view',
  button = 'button',
  hstack = 'hstack',
  vstack = 'vstack'
}

export interface Viewable {
  type: ViewTypes;
  margin: (margin: number) => void;
  padding: (padding: number) => void;
  backgroundColor: (color: string) => void;
  toJson: (type: string) => any;
  children?: Viewable[];
  map: ViewMap
}

export interface ViewType { 
  id: string;
  margin?: number;
  padding?: number;
  backgroundColor?: string;
  // ..to be extended with view type props that we want to enable
}

interface ViewMap {
  id: string;
  style?: any;
}

export abstract class BaseView implements Viewable {
  map: ViewMap = {id: `${BaseView.randomIdMaker()}`, style: {}};
  type: ViewTypes;

  constructor() {
    this.type = ViewTypes.view;
  }
  
  static randomIdMaker = () => {
    return Math.random();
  }

  margin = (margin: number) => {
    this.map.style.margin = margin
    return this;
  };

  padding = (padding: number) => {
    this.map.style.padding = padding;
    return this;
  };

  width = (width: number) => {
    this.map.style.width = width;
    return this;
  }

  height = (height: number) => {
    this.map.style.height = height;
    return this;
  }

  size = (size: number) => {
    this.map.style.height = size;
    this.map.style.width = size;
    return this;
  }

  backgroundColor = (color: string) => {
    this.map.style.backgroundColor = color;
    return this;
  }

  public toJson = (type: string) => {
    return {
      type,
      ...this.map
    };
  };
}
