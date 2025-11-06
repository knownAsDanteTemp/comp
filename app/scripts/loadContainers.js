import * as element from "../scripts/modules/element.js"

const addContainers = () => {
    const mainBox = element.add(document.body, "section", "mainBox")
    const componentBox = element.add(mainBox, "div", "componentBox")
    const confMenuBox = element.add(document.body, "section", "confMenuBox")
    const controlsBox = element.add(document.body, "section", "controlsBox")
    const infoBox = element.add(document.body, "section", "infoBox")

    return [mainBox, componentBox, confMenuBox, controlsBox, infoBox]
}

const addStyles = () => {
    const path = [
        { rel: "stylesheet", href: "app/styles/globalConf.css" },
        { rel: "stylesheet", href: "app/styles/globalClass.css" },
        { rel: "stylesheet", href: "app/styles/mainContainers.css" }
    ]

    Object.entries(path).forEach(item => element.add(document.head, "link", null, "mainContainers", item[1]))
}

const addClass = (array) => {
    const toAddClass = {
        mainBox: ["mainBox max center"],
        componentBox: ["componentBox relative max"],
        confMenuBox: ["confMenuBox absolute panelMenu"],
        controlsBox: ["controlsBox absolute"],
        infoBox: ["infoBox absolute"]
    }

    array.forEach(item => {
        const container = item.id
        const oldClass = item.className
        const newClassName = oldClass + " " + toAddClass[container]
        item.className = (newClassName)
    })
}

export const loadContainers = () => {
    const containers = addContainers()
    addStyles()
    addClass(containers)
}   
