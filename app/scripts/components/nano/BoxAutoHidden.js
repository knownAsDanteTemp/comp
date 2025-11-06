
import { AttributeConfigurable } from "../_templates/reactiveComp.js"
import { add } from "../../modules/element.js"

export class boxAutoHidden extends AttributeConfigurable {
    constructor() {
        super()

        this.container.innerHTML = `
            <div class="toogleBottom">

            </div>
        `

        this.classStyle.textContent = `
            .mainContainer {
                width: 10
            }
        `
    }

    connectedCallback() {

        const defaultConfCss = {
            sizeW: "auto",
            sizeH: "auto",
            side: ["left", "right"],
        }

        const defaultConfLogic = {
            eventDom: this,
            eventName: this.id
        }

        const confCss = this.getConfig(defaultConfCss)
        const confLogic = this.getConfig(defaultConfLogic)
        console.log(confCss, confLogic)

        this.applyConfCss(confCss)

/*         const applyConfCss = (confCss) => {
            this.style.setProperty("--togglePos")
        }
 */    }
}

customElements.define("box-autohidden", boxAutoHidden)