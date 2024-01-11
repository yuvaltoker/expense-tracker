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
    list_item.addEventListener('click', () => {
        list_item.classList.add('click-li')
        /* 
        
        
        
        why is this not working?
        
        
        
        */ 
        console.log('clicked')})
    list_item.addEventListener('click', e => {
        handlePageItemClick(e);
    });
    return list_item
}

function handlePageItemClick(e) {
    // getting liItem to be liPage
    const page_id = e.target.id.slice(0, -4).concat('Page')
    hideAllPages()
    showPage(page_id)
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
    page.id = page_name.toLowerCase().concat('Page')
    page.name = page_name
    return page
}

function hideAllPages() {
    const pages = document.getElementById('pages')
    for (const child of pages.children) {
        child.hidden = true
    }
}

function showPage(page_id) {
    const page = document.getElementById(page_id)
    const content_header = document.getElementById(content_header_id)
    content_header.textContent = page_id
    page.hidden = false
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

function createContentHeader(header_id) {
    const header = document.createElement('header')
    header.id = header_id
    return header
}

function createContent(page_names) {
    const content = document.createElement('div')
    content.id = 'content'
    content.className = 'content'
    const header = createContentHeader(content_header_id)
    const pages = createPages(page_names)
    appendComponent(content, header)
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
const content_header_id = 'content-header'
const content_header_class = 'content-header'

const container = createComponents(page_names)
body.append(container)
// get first clean up of pages
hideAllPages()
// showPage gets pageID
showPage(page_names[0].toLowerCase().concat('Page'))

const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')


sidebar.addEventListener('mouseenter', () => container.classList.add('hover-sidebar'))
sidebar.addEventListener('mouseleave', () => container.classList.remove('hover-sidebar'))

content.addEventListener('mouseenter', () => container.classList.add('hover-content'))
content.addEventListener('mouseleave', () => container.classList.remove('hover-content'))