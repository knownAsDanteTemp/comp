export const add = (container, tag, idName = null, classNames = null, objAttr = null) => {
    if (!tag || !container) { console.log("module newElement: missing parameters\nnot create element"); return }

    const createdElement = document.createElement(tag)
    if (idName) createdElement.id = idName
    if (classNames) createdElement.className = classNames
    if (objAttr) Object.entries(objAttr).forEach(([key, value]) => { createdElement[key] = value })
    container.appendChild(createdElement)
    return createdElement
}