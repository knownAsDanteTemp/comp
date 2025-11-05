import * as init from "../scripts/loadContainers.js"

const main = () => {
    const body = document.getElementsByTagName("body")[0]

    init.containers(body)
    init.addStyles()
}

main()