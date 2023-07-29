import { BaseHTMLElement, customElement, html } from 'dom-native';

@customElement("todo-mvc")
class TodoMvc extends BaseHTMLElement {  // extends HTMLElement

    init() {
        let htmlContent: DocumentFragment = html`
            <div class="box"></div>
            <h1>todos</h1>
            <todo-input></todo-input>
            <todo-list></todo-list>
        `;

        this.append(htmlContent);
    }
}