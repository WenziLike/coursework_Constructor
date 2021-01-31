import { TextBlock, TitleBlock } from './blocks';


export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;

        this.init();
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this));
        this.$el.innerHTML = this.template;
    }


    get template() {
        return [
            block('Text'),
            block('Title'),
        ].join('');
    }
    addBlock(event) {
        event.preventDefault();

        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        // console.log(event); // так можно получить значение формы

        // debugger    //про дебажить на ошибки

        const Constructor = type === 'text' ? TextBlock : TitleBlock;
        console.log(Constructor);

        const newBlock = new Constructor(value, { styles });
        console.log(newBlock);

        this.update(newBlock);


        event.target.value.value = '';
        event.target.styles.value = ''; // очистка формы
    }
}

function block(type) {
    return `
    <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
        <input type="form-control form-control-sm"
         name="value" placeholder="value">
    </div>
    <div class="form-group">
        <input type="form-control form-control-sm" 
        name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Create</button>
</form>
<hr>`;
}