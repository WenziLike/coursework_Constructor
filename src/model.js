//модельня часть конструктора (шаблон)+ инлайнстили
//===========================================================
// импортирум картинку
import image from './assets/img/Js.svg';
//==================================
import {
    TitleBlock,
    TextBlock,
    ImageBlock,
    TextColumnsBlock,
    SocialBlock,
    LogoBlock,
} from './classes/blocks';
//==================================
import { css } from './utiles';
// console.log(image);

//===========================================================
//тут можно прописать текст контента,p заголовка , колонок


const title = `JavaScript Website Builder My`;
const text = `"'S.O.L.I.D. STANDS FOR:
 <br> S — Single responsibility principle, O — Open closed principle,
  L — Liskov substitution principle,<br> I — Interface segregation principle, 
  D — Dependency Inversion principle'"<hr>`;
const textColumn = [
    `Using "VanillaJS" means using plain JavaScript 
    without any additional libraries like jQuery.
    People use it as a joke to remind other developers 
    that many things can be done nowadays without the need
     for additional JavaScript libraries.`,

    `ES6 module system:A few years ago,
     there was no concept of modules in JavaScript.
     It was impossible to directly reference or include one JavaScript 
     file in another. ECMAScript 2015 (ES6) introduces this module system.`,
];
// const socialIcon = `help my frends`;
const socialIcon = [
    `<hr>`,
    'facebook',
];



//===========================================================
// модельная система макета по умолчанию 
export const model = [
    //====================================================
    new TitleBlock(title, {
        tag: 'h1',
        styles: css({
            background: '#2c2c2c',
            color: '#ec0404',
            padding: '0.6em',
            'text-align': 'center',
        })
    }),
    //====================================================
    new TextBlock(text, {
        styles: css({
            background: '',
            padding: '2em',
            'text-align': 'center',
            'font-weight': '700',
            'font-size': '20px',
        })
    }),
    //====================================================
    // реализация лого 
    new LogoBlock(image, {
        alt: 'my image',
        nameClass: 'my-image',
        imageStyles: css({
            background: '#FFCC00',
            position: 'absolute',
            top: '10px',
            left: '40px',
            width: '50px',

        })
    }),
    //====================================================
    // реализация изображения
    new ImageBlock(image, {
        alt: 'my image',
        nameClass: 'my-image',
        imageStyles: css({
            // ! по центру
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120px',
            height: '120px',
            // 'margin-top': '50px',
        })
    }),
    //====================================================
    new TextColumnsBlock(textColumn, {
        styles: css({
            padding: '0 2em',
            'text-align': 'center',
            'font-size': '18px',
            'font-weight': '700',
        })
    }),
    //====================================================
    //! реализовать иконки на соц сеть
    new SocialBlock(socialIcon.join(''), {
        styles: css({
            padding: '0 2em',
            // background: '#2c2c2c',
            cursor: 'pointer',
            margin: "40px",
            'text-decoration': 'none',
            'font-weight': '700',
            'font-size': '25px',
        })
    })
];