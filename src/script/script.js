const textContainer = Array.from(document.querySelectorAll('.textContainer'))
const btnClear = document.getElementById('btnClear')

const getDataStorage = () => {
  textContainer.forEach(item => {
    const answer = item.querySelector('.answer')
    const idItem = answer.id
    if (localStorage.getItem(idItem)) {
      answer.innerText = localStorage.getItem(idItem)
    }
  })
}

textContainer.forEach(item => {
  item.addEventListener('click', e => {
    const textItem = e.target.innerText.toLowerCase()

    const answer = item.querySelector('.answer')
    const idItem = answer.id

    const ask = prompt(`Cual es ${textItem}`)

    answer.innerText = ask
    localStorage.setItem(idItem, ask)
  })
})

btnClear.addEventListener('click', () => {
  localStorage.clear()
  textContainer.forEach(item => {
    const answer = item.querySelector('.answer')
    answer.innerText = ''
  })
})

getDataStorage()
