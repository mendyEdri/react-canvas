import {Text as TextClass} from './Views/Text';
import {Viewable} from './Views/BaseView';
import {View as ViewClass} from './Views/View';

export const Text = (text: string) => {
    return new TextClass(text);
}

export const View = (viewable?: Viewable | Viewable[]) => {
    return new ViewClass(viewable);
}
