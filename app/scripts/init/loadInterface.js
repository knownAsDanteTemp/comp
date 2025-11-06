import * as element from "../modules/element.js"

export const loadMenuList = async () => {
    const path = "../components/nano/boxAutoHidden.js"
    await import(path)

    const config = {
        sizeW: "200px",
        sizeH: "100%",
        side: "left",
    }

    const props = {
        eventDom: document,
        eventName: "listMenuSelection"
    }

    const component = element.add(document.body, "box-autohidden", "listMenuBox", null, config)
    component.setProp(props)
}