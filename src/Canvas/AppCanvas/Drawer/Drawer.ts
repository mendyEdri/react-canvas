import {Viewable} from '../../Views/BaseView';

export default interface Drawer {
    draw: (view: Viewable, children?: Viewable[]) => any
}
