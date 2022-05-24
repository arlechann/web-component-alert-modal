export class Modal extends HTMLElement {
    _root;
    constructor() {
        super();
        this._root = this.attachShadow({ mode: 'closed' });
    }
    connectedCallback() {
        this.open = !['false', 'null', '0', '', null].includes(this.getAttribute('open'));
        this.render();
    }
    attributeChangedCallback(prop, oldValue, newValue) {
        this.render();
    }
    static get observedAttributes() {
        return ['open'];
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(value) {
        if (value) {
            this.setAttribute('open', 'true');
        }
        else {
            this.removeAttribute('open');
        }
    }
    render() {
        const coverHTML = this.open ? '<div class="cover" id="cover"></div>' : '';
        const modalHTML = this.open ? '<div class="modal" id="modal"><slot></slot></div>' : '';
        const styleHTML = `
    <style>
    .cover {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      z-index: 2;
    }

    .modal {
      position: fixed;
      top: 100px;
      right: 0;
      left: 0;
      background: #fff;
      width: 600px;
      border-radius: 0.5em;
      margin: auto;
      padding: 2em;
      z-index: 3;
    }
    </style>
    `;
        this._root.innerHTML = `${styleHTML}<div>${coverHTML}${modalHTML}</div>`;
        const closeModal = () => {
            this.open = false;
        };
        const coverElm = this._root.getElementById('cover');
        coverElm?.addEventListener('click', closeModal);
    }
}
