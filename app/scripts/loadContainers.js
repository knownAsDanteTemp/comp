import * as element from "../scripts/modules/element.js"

export const containers = (box) => {
    const mainBox = element.add(box, "section", "mainBox", "mainBox relative max")
    const componentBox = element.add(mainBox, "div", "componentBox", "componentBox relative max")
    const listMenuBox = element.add(box, "section", "listMenuBox", "listMenuBox absolute maxV")
    const confMenuBox = element.add(box, "section", "confMenuBox", "confMenuBox absolute maxV")
    const controlsBox = element.add(box, "section", "controlsBox", "controlsBox absolute")
    const infoBox = element.add(box, "section", "infoBox", "infoBox absolute")
}

export const addStyles = () => {
    const path = [
        "app/styles/globalClass.css",
        "app/styles/mainContainers.css"
    ]

    path.forEach(url => element.add(document.head, "link", null, "mainContainers", { href: url, rel: "stylesheet" }))
}