document.addEventListener('click', e => {
  //isDropdownButton é o botão que o evento encontrar que corresponda a data-dropdown-button
  const isDropdownButton = e.target.matches("[data-dropdown-button]")

  //se o botão do dropdown não for selecionado e se a gente tiver em um data-dropdown, o valor retornará nulo, não vai acontecer nada.
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

  let currentDropdown
  let svgRotate
  if(isDropdownButton) {
  //o data-dropdown mais perto do evento, ou seja, o dropdown atual
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')

    svgRotate = e.target.closest('.drop-down')
    svgRotate.classList.toggle('open')
  }

  document.querySelectorAll('.drop-down.open').forEach(openSVG => {
    if(openSVG === svgRotate) return
    openSVG.classList.remove('open')
  })

  document.querySelectorAll('[data-dropdown].active').forEach(activeDropdown => {
  //se o dropdown ativo for igual ao data-dropdown que foi clicado não faça nada
    if(activeDropdown === currentDropdown) return
    activeDropdown.classList.remove('active')
  })

  const toggleBtn = e.target.matches('[data-toggle-button')
  let nav

  if(toggleBtn){
  nav = document.querySelector('nav')
  nav.classList.toggle('active')
  }
})