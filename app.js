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
        list_item.className = 'sidebar-list-item'
        appendComponent(menu_list, list_item)
    });
    return menu_list
}

function createSidebar() {
    // main of sidebar
    const side_bar = document.createElement('nav')
    side_bar.className = 'sidebar'
    const side_bar_header = createSidebarHeader('E.T')
    appendComponent(side_bar, side_bar_header)
    const side_bar_menu = createMenuList()
    appendComponent(side_bar, side_bar_menu)
    return side_bar
}

function createPage(name) {
    const page = document.createElement('div')
    page.textContent = name
    return page
}

function createContent() {
    const content = document.createElement('div')
    const pages_names = ['Page 1', 'Page 2', 'Page 3']
    const list_pages = pages_names.map((page_name) => createPage(page_name))
    list_pages.forEach(page => {
        page.className = 'page'
        appendComponent(content, page)
    })
    return content
}

function createContainer() {
    const container = document.createElement('div')
    container.className = 'container'
    return container
}

function createComponents() {
    const container = createContainer()
    const side_bar = createSidebar()
    appendComponent(container, side_bar)
    const content = createContent()
    appendComponent(container, content)
    return container
}

const container = createComponents()
body.append(container)

const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
//const container = document.querySelector('.container')

sidebar.addEventListener('mouseenter', () => container.classList.add('hover-sidebar'))
sidebar.addEventListener('mouseleave', () => container.classList.remove('hover-sidebar'))

content.addEventListener('mouseenter', () => container.classList.add('hover-content'))
content.addEventListener('mouseleave', () => container.classList.remove('hover-content'))


