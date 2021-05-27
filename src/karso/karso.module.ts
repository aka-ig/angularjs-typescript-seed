import { module as ngModuel } from 'angular';
import { KarsoRootComponent } from './components/root/root.component';

const karso = ngModuel('karso', []);
karso.component('karsoRoot', KarsoRootComponent);

export const ModuleKarso = karso.name;
