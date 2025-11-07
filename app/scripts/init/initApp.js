import { loadContainers } from "../loadContainers.js"
import * as iface from "./loadInterface.js"

const main = async () => {
    loadContainers()

    await iface.addListMenu()
    await iface.addConfigMenu()
}

main()