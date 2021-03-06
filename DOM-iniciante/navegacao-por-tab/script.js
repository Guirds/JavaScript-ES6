initTabNav = () => {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    activeTab = index => {
      tabContent.forEach(content => {
        content.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTabNav()

initAccordion = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'ativo'

  accordionList[0].classList.add(activeClass)
  accordionList[0].nextElementSibling.classList.add(activeClass)

  function activeAccordion () {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }

  accordionList.forEach(list => {
    list.addEventListener('click', activeAccordion)
  })
}
initAccordion()
