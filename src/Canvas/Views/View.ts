import {BaseView, Viewable, ViewTypes} from './BaseView';

export class View extends BaseView implements Viewable {
    type = ViewTypes.view;
    children?: Viewable[] = [];

    constructor(view?: Viewable[] | Viewable) {
        super();
        this.addAsChildren(view);
    }

    addAsChildren = (view?: Viewable[] | Viewable) => {
        if (Array.isArray(view)) {
            this.children?.concat(view);
        } else {
            this.children?.push(view as Viewable);
        }
    }
}