export class AttributeConfigurable extends HTMLElement {
    constructor() {
        super()

        this.dom
        this.container
        this.classStyle
        this.eventDom
        this.eventName
        
        this._initClass()
    }



    _initClass() {
        this._initDom()
        this._initContainer()
        this._initStyle()
    }

    _initDom() {
        this.dom = this.attachShadow({ mode: "open" })
    }

    _initContainer() {
        this.container = document.createElement("div")
        this.container.classList.add("mainContainer")
        this.dom.appendChild(this.container)
    }

    _initStyle() {
        this.classStyle = document.createElement("style")
        this.classStyle.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                width: 100%;
                height: 100%;
            }
        `
        this.dom.appendChild(this.classStyle)
    }

    setProp(props){
        Object.entries(props).forEach(([prop, value]) => {
            console.log(prop, value)
            this[prop] = value
        })

    }

    event(par) {
        this.eventDom.dispatchEvent(new CustomEvent(this.eventName, {detail: par} ))
    }

    getConfig(defaultConf) {
        let config = {}

        Object.entries(defaultConf).forEach(([key, value]) => {
            const attrValue = this.getAttribute(key)
            let newValue
            Array.isArray(value)
                ? newValue = attrValue ? attrValue : value[0]
                : newValue = attrValue ? attrValue : value
            config[key] = newValue
        })
        return config
    }

    applyConfCss(cssConf) {
        Object.entries(cssConf).forEach(([key, value]) => { this.style.setProperty(`--${key}`, value) })
    }
}