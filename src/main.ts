import { bootstrap as ngBootstrap } from 'angular';
import { ModuleKarso } from './karso/karso.module';
import './style.scss';

ngBootstrap(document, [ModuleKarso]);
