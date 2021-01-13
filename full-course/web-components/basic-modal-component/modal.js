class Modal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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
                }
                #modal {
                    position: fixed;
                    top: 15vh;
                    left: 25%;
                    width: 50%;
                    height: 30rem;
                    z-index: 2;
                    background: white;
                    border-radius: 0 2px 8px rgba(0,0,0,0.26);
                }
            </style>
            <div id="backdrop"></div>
            <div id="modal"></div>
        `;
    }
}

customElements.define('bt-modal', Modal);