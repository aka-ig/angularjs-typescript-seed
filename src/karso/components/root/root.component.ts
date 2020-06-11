import { IComponentOptions, IComponentController } from 'angular';
import template from './root.component.html';
import './root.component.scss';

class KarsoRootComponentController implements IComponentController {
    constructor() { }

    $onInit() {
        console.log('Root')
    }
}

export const KarsoRootComponent: IComponentOptions = {
    template: template,
    controller: KarsoRootComponentController
};
