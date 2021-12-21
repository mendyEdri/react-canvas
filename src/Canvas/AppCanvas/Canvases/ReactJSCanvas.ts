import Canvasable, {BaseCanvas} from './Canvas';
import {Drawer, ReactJS} from '../Drawer';
import {Api, FetchApi} from '../Api';

// ** This is an implementation demo, all dependencies should be injected **/

export default class ReactJSCanvas extends BaseCanvas implements Canvasable {
    readonly drawer: Drawer = new ReactJS();
    api?: Api;

    fetch = (url: string, params?: any) => {
        this.api = new FetchApi(url);
        return this;
    }
}