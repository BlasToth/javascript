class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
            <style>
                #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0,0,0,0.75);
                    z-index: 1;
                    opacity: 0;
                    pointer-events: none;
                }

                :host([opened]) #backdrop,
                :host([opened]) #modal {
                    opacity: 1;
                    pointer-events: all;
                }

                #modal {
                    position: fixed;
                    top: 15vh;
                    left: 25%;
                    width: 50%;
                    z-index: 2;
                    background: white;
                    border-radius: 0 2px 8px rgba(0,0,0,0.26);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    opacity: 0;
                    pointer-events: none;
                }
                header {
                    padding: 1rem;
                }
                header h1 {
                    font-size: 1.25rem;
                }
                #main {
                    padding: 1rem;
                }
                ::slotted(p) {
                    font-weight: bold;
                }
                #actions {
                    border-top: 1px solid #ccc;
                    padding: 1rem;
                    display: flex;
                    justify-content: flex-end;

                }
                #actions button {
                    margin: 0 0.25rem;
                }
                #cancel {
                    background: red;
                    border-radius: 5px;
                    color: white;
                    outline: none;
                    border: none;
                    height: 1.5rem;
            
                }
                #confirm {
                    background: green;
                    border-radius: 5px;
                    color: white;
                    outline: none;
                    border: none;
                    height: 1.5rem;
                }
            </style>
            <div id="backdrop"></div>
            <div id="modal">
                <header>
                    <h1>Please confirm</h1>
                </header>
                <section id="main">
                    <slot></slot>
                </section>
                <section id="actions">
                    <button id="cancel">Cancel</button>
                    <button id="confirm">Confirm</button>
                </section>
            </div>
        `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
        if (this.hasAttribute('opened')) {
            this.isOpen = true;
            // this.shadowRoot.querySelector('#backdrop').style.opacity = 1;
            // this.shadowRoot.querySelector('#backdrop').style.pointerEvents = 'all';
            // this.shadowRoot.querySelector('#modal').style.opacity = 1;
            // this.shadowRoot.querySelector('#modal').style.pointerEvents = 'all';
    } else {
        this.isOpen = false;
    }
  }

  static get observedAttributes() {
      return ['opened'];
  }
  open() {
      this.setAttribute('opened', '');
      this.isOpen = true;
  }
}

customElements.define("bt-modal", Modal);
