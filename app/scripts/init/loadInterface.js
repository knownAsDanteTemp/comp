import * as element from "../modules/element.js"

export const addListMenu = async () => {
    const path = "../components/nano/BoxAutoHidden.js"
    await import(path)
    const listMenuBox = document.getElementById("listMenuBox")

    const config = {
        css: {
            sizeW: "200px",
            sizeW_min: "40px",
            sizeH: "100%",
            side: "left",
            margin: "10px",
            iconColor: "whitesmoke",
            back: getComputedStyle(document.documentElement).getPropertyValue("--darkCrystal"),
            transition: `${getComputedStyle(listMenuBox).getPropertyValue("transition")}`
        },
        logic: {
            icon: "menu",
        }
    }

    const props = {
        eventDom: document,
        eventName: "listMenuSelection",
    }

    element.add(listMenuBox, "box-autohidden", "listMenuBox", null, config, props)
}

export const addConfigMenu = async () => {
    const path = "../components/nano/BoxAutoHidden.js"
    await import(path)
    const configMenuBox = document.getElementById("configMenuBox")

    const config = {
        css: {
            sizeW: "200px",
            sizeW_min: "40px",
            sizeH: "100%",
            side: "right",
            margin: "10px",
            iconColor: "whitesmoke",
            back: getComputedStyle(document.documentElement).getPropertyValue("--darkCrystal"),
            transition: `${getComputedStyle(listMenuBox).getPropertyValue("transition")}`
        },
        logic: {
            icon: "tune"
        }
    }

    const props = {
        eventDom: document,
        eventName: "configMenuSelection",
    }

    element.add(configMenuBox, "box-autohidden", "confMenuBox", null, config, props)
}