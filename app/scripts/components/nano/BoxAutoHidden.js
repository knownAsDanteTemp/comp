
import { AttributeConfigurable } from "../_templates/reactiveComp.js"
import { add } from "../../modules/element.js"

export class boxAutoHidden extends AttributeConfigurable {
    constructor() {
        super()

        this.addLink(this.dom, "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap", "stylesheet")
        this.addLink(document.head, "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap", "stylesheet")

        this.container.innerHTML = `
            <div class="menuBox relative">
                <div class="closeBox absolute center">
                    <div class="closeButtom">
                        <div class="inputBox relative center max">
                            <span class="closeIcon material-symbols-outlined center"></span>
                            <input id="expandInput" type="checkbox" class="hiddenInput">
                        </div>
                    </div>
                </div>
            </div>
        `

        this.classStyle.textContent = `
            .mainContainer {
                position: absolute;
                top: 10px;
                display: flex;
                width: calc(var(--sizeW) - var(--margin));
                height: calc(var(--sizeH) - var(--margin) * 2);
                transition: var(--transition);

                .menuBox {
                    width: 100%;
                    height: 100%;
                    background: var(--back);

                    .closeBox {
                        top: 6px;
                        width: var(--sizeW_min);
                        height: auto;

                        .closeButtom {
                            width: 30px;
                            aspect-ratio: 1/1;
                            border-radius: 50%;
                        }
                        
                        .closeIcon {
                            color: var(--iconColor);
                            font-size: 20px;
                        }
                    }
                }
            }

            .relative {position: relative;}
            .absolute {position: absolute;}
            .center {display: flex; justify-content: center; align-items: center;}
            .max {width: 100%; height: 100%;}
            .hiddenInput {position: absolute; width: 100%; height: 100%; appearance: none; cursor: pointer;}
        `
    }

    connectedCallback() {

        const attrCss = JSON.parse(this.getAttribute("css"))
        const defaultConfCss = {
            sizeW: "auto",
            sizeW_min: "80px",
            sizeH: "auto",
            side: ["left", "right"],
            margin: "20px",
            back: "red",
            iconColor: "blue",
            transition: "2s"
        }
        const css = this.getConfig(defaultConfCss)
        const logic = JSON.parse(this.getAttribute("logic"))

        const side = (css) => {
            const mainContainer = this.dom.querySelector(".mainContainer")
            mainContainer.style.left = css.side === "left" ? css.margin : 0
        }

        const applyIcon = (logic) => {
            const closeBox = this.dom.querySelector(".closeBox")
            closeBox.style.left = css.side === "left" ? `calc(100% - ${closeBox.offsetWidth}px)` : 0

            const closeIcon = this.dom.querySelector(".closeIcon")
            closeIcon.textContent = logic.icon
        }

        const expand = (boolean, css, parent, defaultParentWidth) => {
            const mainContainer = this.dom.querySelector(".mainContainer")
            const minWidth = parseFloat(css.sizeW_min) + parseFloat(css.margin) + "px"
            mainContainer.style.width = boolean ? css.sizeW_min : `calc(var(--sizeW) - var(--margin))`
            parent.style.width = boolean ? minWidth : `${defaultParentWidth}px`
        }

        const main = async () => {
            this.applyConfCss(css)
            side(css)
            applyIcon(logic)
            console.log(css)

            const expandInput = this.dom.querySelector(("#expandInput"))
            const hostBox = this.parentElement
            let defaultHostWidth = hostBox.offsetWidth
            expandInput.addEventListener("change", (e) => {
                expand(e.target.checked, css, hostBox, defaultHostWidth)
            })
        }

        main()
    }
}

customElements.define("box-autohidden", boxAutoHidden)