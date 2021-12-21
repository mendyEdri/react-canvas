import {BaseView, Viewable, ViewTypes} from './BaseView';

export interface Pressable extends Viewable {
    onPress: () => void;
}

export default class Button extends BaseView implements Pressable {
    type = ViewTypes.button;
    
    onPress = () => {

    }
}