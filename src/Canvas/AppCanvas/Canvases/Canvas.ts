import {Drawer}  from '../Drawer';
import {Api} from '../Api';
import {Viewable} from '../../Views/BaseView';
import {Stack} from './Utils';

export default interface Canvasable {
    readonly drawer: Drawer;
    readonly api?: Api;

    draw: (view: Viewable) => any;
    fetch: (url: string, params?: any) => any;
    onLoad: () => void;
    cache: () => void;
}

export enum FunctionsType {
    draw = 'draw',
    fetch = 'fetch',
    onLoad = 'onLoad',
    cache = 'cache'
}

type ActionType = {
    type: keyof typeof FunctionsType
    action?: () => void
}

export abstract class BaseCanvas implements Canvasable {
    abstract drawer: Drawer;
    abstract api?: Api | undefined;
    protected stack = new Stack<ActionType>();

    private getJSX = (views: Viewable[] | undefined = []): any => {
        let jsx = [];
        for (const item of views) {
            let children = [];
            if (item?.children !== undefined) {
                children = this.getJSX(item.children);
            }
            jsx.push(this.drawer.draw(item, children));
        }
        return jsx;
    }
    
    private drawRecursive = (view: Viewable) => {
        let jsx = this.drawer.draw(view, this.getJSX(view.children));
        return jsx;
    }

    draw = (view: Viewable) => {
        this.stack.push({type: FunctionsType.draw});
        return this.drawRecursive(view);
    }
    
    fetch = (url: string, params?: any) => {
        this.stack.push({type: FunctionsType.fetch, action: this.api?.get});
        return this;
    }

    onLoad = () => {
        this.stack.push({type: FunctionsType.onLoad});
        return this;
    }

    cache = () => {
        this.stack.push({type: FunctionsType.cache});
        return this;
    }
} 