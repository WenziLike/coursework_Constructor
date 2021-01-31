import { model } from './model';
import { Site } from './classes/site';
import { Sidebar } from './classes/sidebar';
// подключил css стили
import './style/main.scss';
// переменная получаем ее с файла  Site js 
const site = new Site('#site');

// функция  обновления  сайта и модели при добавлении нового блока
const updateCallback = newBlock => {
    model.push(newBlock);
    site.render(model);
}


new Sidebar('#panel', updateCallback);

site.render(model);