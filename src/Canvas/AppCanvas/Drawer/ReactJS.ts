import React from 'react';
import Drawer from './Drawer';
import {Viewable, ViewTypes} from '../../Views/BaseView';
import {Textable} from '../../Views';


const mapViewToReact = (view: Viewable,) => {
    switch (view?.type) {
        case ViewTypes.view: 
            return React.createElement('div', {style: {...view.map.style}}, 'DIV');
        case ViewTypes.text: 
            return React.createElement('p', {}, (view as Textable).text);
        default: 
            return React.createElement('div', {style: {width: 100, height: 100, color: 'green'}});
    }
}

export class ReactJS implements Drawer {
    draw = (view: Viewable) => {        
        return mapViewToReact(view);
    };
}