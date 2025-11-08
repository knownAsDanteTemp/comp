export const add = (container, tag, idName = null, classNames = null, objAttr = null, objProps = null) => {
    if (!(container && tag)) throw new Error("Module ELEMENT ADD: \n>>> missing container or tag")

    const createdElement = document.createElement(tag)
    if (idName) createdElement.id = idName
    if (classNames) createdElement.className = classNames
    if (objAttr) Object.entries(objAttr).forEach(([key, value]) => {
        const type = typeof value
        if (type === "object") createdElement.setAttribute(key, JSON.stringify(value))
        if (type === "string") createdElement.setAttribute(key, value)
    })
    if (objProps) Object.entries(objProps).forEach(([key, value]) => createdElement[key] = value)
    container.appendChild(createdElement)
    return createdElement
}

export const css = (item, style) => {
    Object.entries(style).forEach(([key, value]) => {
        item.style[key] = value
    })
}