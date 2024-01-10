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
    list_item.id = name.toLowerCase() + 'Item'
    // Adding event listeners using JavaScript
    list_item.addEventListener('click', function() {
        handlePageItemClick(name);
    });
    return list_item
}

function createMenuList(pages_names) {
    const menu_list = document.createElement('ul')
    const list_items = pages_names.map((page_name) => createMenuListItem(page_name))
    list_items.forEach(list_item => {
        list_item.className = 'sidebar-list-item'
        appendComponent(menu_list, list_item)
    });
    return menu_list
}

function createSidebar(pages_names) {
    // main of sidebar
    const side_bar = document.createElement('nav')
    side_bar.className = 'sidebar'
    const side_bar_header = createSidebarHeader('E.T')
    appendComponent(side_bar, side_bar_header)
    const side_bar_menu = createMenuList(pages_names)
    appendComponent(side_bar, side_bar_menu)
    return side_bar
}

function createPage(page_name) {
    const page = document.createElement('div')
    page.textContent = page_name
    page.id = page_name.toLowerCase() + 'Page'
    return page
}

function hideAllPages() {
    const pages = document.getElementById('pages')
    for (const child of pages.children) {
        child.hidden = true
    }
}

function showPage(page_name) {
    const page = document.getElementById(page_name.toLowerCase() + 'Page')
    page.hidden = false
}

function handlePageItemClick(page_name) {
    hideAllPages()
    showPage(page_name)
}

function createPages(page_names) {
    const pages = document.createElement('div')
    pages.id = 'pages'
    pages.className = 'pages'
    const list_pages = page_names.map((page_name) => createPage(page_name))
    list_pages.forEach(page => {
        page.className = 'page'
        appendComponent(pages, page)
    })
    return pages
}

function createContent(page_names) {
    const content = document.createElement('div')
    content.id = 'content'
    content.className = 'content'
    const pages = createPages(page_names)
    appendComponent(content, pages)
    return content
}

function createContainer() {
    const container = document.createElement('div')
    container.className = 'container'
    return container
}

function createComponents(page_names) {
    const container = createContainer()
    const side_bar = createSidebar(page_names)
    appendComponent(container, side_bar)
    const content = createContent(page_names)
    appendComponent(container, content)
    return container
}

// pageName must be unique
const page_names = ['Home', 'About', 'Contact'];

const container = createComponents(page_names)
body.append(container)
// hideAllPages()
// showPage(page_names[1])

const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')
//const container = document.querySelector('.container')

sidebar.addEventListener('mouseenter', () => container.classList.add('hover-sidebar'))
sidebar.addEventListener('mouseleave', () => container.classList.remove('hover-sidebar'))

content.addEventListener('mouseenter', () => container.classList.add('hover-content'))
content.addEventListener('mouseleave', () => container.classList.remove('hover-content'))