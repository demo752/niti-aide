import {defineConfig} from 'vite';
export default defineConfig({plugins:[{name:'omit-unused-ux4g-fonts',enforce:'pre',transform(code,id){if(id.replaceAll('\\','/').includes('ux4g-web-components/styles/ux4g.css'))return {code:code.replace(/@font-face\{[^}]+\}/g,''),map:null};}}]});
