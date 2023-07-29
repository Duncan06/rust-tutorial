import { BaseHTMLElement, customElement, getChild, getChildren, html } from 'dom-native';

@customElement("todo-mvc")
class TodoMvc extends BaseHTMLElement {  // extends HTMLElement
    #todoInputEl!: TodoInput;
    #todoListEl!: HTMLElement;

    init() {
        let htmlContent: DocumentFragment = html`
            <div class="box"></div>
            <h1>todos</h1>
            <todo-input></todo-input>
            <todo-list></todo-list>
        `;
        [this.#todoInputEl, this.#todoListEl] = 
            getChildren(htmlContent, 'todo-input', 'todo-list');

        this.append(htmlContent);
        this.refresh();
    }

    async refresh() {
        let todos = [
            { id: 1, title: "mock 1", status: "Close" },
            { id: 2, title: "mock 2", status: "Open" }
        ];
        let htmlContent = document.createDocumentFragment();
        for (const todo of todos) {
            const el = document.createElement('todo-item');
            htmlContent.append(el);
        }

        this.#todoListEl.innerHTML = '';
        this.#todoListEl.append(htmlContent);

    }
}

@customElement("todo-input")
class TodoInput extends BaseHTMLElement { // extends HTMLElement
    #inputEl!: HTMLInputElement;

    init() {
        let htmlContent = html`
            <input type="text" placeholder="What needs to be done?">
        `;
        this.#inputEl = getChild(htmlContent, 'input');

        this.append(htmlContent);

    }
}

// todo-input tag
declare global {
    interface HTMLElementTagNameMap {
        'todo-input': TodoInput;
    }
}

@customElement('todo-item')
export class TodoItem extends BaseHTMLElement { // extends HTMLElement
    #titleEl!: HTMLElement;

    init() {
        let htmlContent = html`
            <c-check><c-ico name="ico-done"></c-ico></c-check>
            <div class="title">STATIC TITLE</div>
            <c-ico name="del"></c-ico>
        `;
        this.#titleEl = getChild(htmlContent, 'div');

        this.append(htmlContent);
    }
}