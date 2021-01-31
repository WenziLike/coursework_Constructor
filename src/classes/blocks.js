import { col, row } from "../utiles";
//====================================================
// основной класс експорта
class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован!!!');
    }
}
//====================================================
export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { tag = 'h2', styles } = this.options;
        return row(col(`
        <${tag}>${this.value}</${tag}>
`), styles);
    }
}
//====================================================
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return row(col(`
        <p class="margin-bottom:0;">${this.value}</p>
`), this.options.styles);
    }
}
//====================================================
export class LogoBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { alt, styles, imageStyles, nameClass } = this.options;
        const html = `<a><img src="${this.value}" 
        class="${nameClass}" alt="${alt}" style="${imageStyles}" />;</a>`;
        return row(html, styles);
    }
}
//====================================================
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const { alt, styles, imageStyles, nameClass } = this.options;
        const html = `<img src="${this.value}" 
        class="${nameClass}" alt="${alt}" style="${imageStyles}" />`;
        return row(html, styles);
    }
}
//====================================================
export class TextColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const html = this.value.map(item => col(item));
        return row(html.join(''), this.options.styles);
    }
}
//====================================================
//! реализовать несколько ссылок иконок и чтоб можно было вставлять сылки разных пользователей
export class SocialBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        return row(col(`
        <a href="https://www.facebook.com/WenziLike" 
        target="_blank">${this.value}</a>
`), this.options.styles);
    }
}


