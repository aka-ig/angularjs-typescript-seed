import * as angular from 'angular';
import { KarsoRootComponent } from './components/root/root.component';

const karso = angular.module('karso', []);
karso.component('karsoRoot', KarsoRootComponent);

export const ModuleKarso = karso.name;
