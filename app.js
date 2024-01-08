const body = document.body

function appendComponent(father, child) {
    father.append(child)
}

function createSidebarHeader(text) {
    const header = document.createElement('header')
    header.textContent = text
    return header
}

function createMenuListItem(name) {
    const list_item = document.createElement('li')
    list_item.textContent = name
    return list_item
}

function createMenuList() {
    const menu_list = document.createElement('ul')
    const items = ['Item 1', 'Item 2', 'Item 3']
    const list_items = items.map((item) => createMenuListItem(item))
    list_items.forEach(list_item => {
        list_item.className = 'side-bar-list-item'
        appendComponent(menu_list, list_item)
    });
    return menu_list
}

function createSidebar() {
    // main of sidebar
    const side_bar = document.createElement('nav')
    side_bar.className = 'side-bar'
    const side_bar_header = createSidebarHeader('E.T')
    appendComponent(side_bar, side_bar_header)
    const side_bar_menu = createMenuList()
    appendComponent(side_bar, side_bar_menu)
    return side_bar
}

function createComponents(body){
    side_bar = createSidebar()
    appendComponent(body, side_bar)
}

createComponents(body)

