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

function initScrollSuave () {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')

  function scrollToSection (event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    /*
  //Forma alternativa
  const topo = section.offsetTop
  window.scroll({
    top: topo,
    behavior: 'smooth'
  })
  */
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave()

initAnimacaoScroll = () => {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6

    animalScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0
        if (isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }

    animalScroll()
  }
  window.addEventListener('scroll', animalScroll)
}
initAnimacaoScroll()
