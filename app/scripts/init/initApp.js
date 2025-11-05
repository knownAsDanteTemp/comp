import * as init from "../loadContainers.js"

const main = () => {
    const body = document.getElementsByTagName("body")[0]

    const containers = init.containers(body)
    init.addStyles()
    init.addClass(containers)
}

main()