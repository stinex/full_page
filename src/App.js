
window.addEventListener('load', () => {

  const sections = document.querySelectorAll('.section'),
    content = document.querySelector('.main__content'),
    fullacreen = document.querySelector('.fullacreen')
  let spin_value = 0
  let can_scroll = true
  let n = 0
  // let tY = 0

  function scrollMain(e) {
    if (can_scroll) {
      can_scroll = false
      if (e.deltaY > 0) {
        // scroll down
        if (spin_value < sections.length - 1)
          spin_value += 1
      } else {
        if (spin_value > 0)
          spin_value -= 1
        // scroll up
      }
      scroll_content(spin_value)
    }
    setTimeout(function () { can_scroll = true }, 450)
  }
  window.addEventListener('wheel', scrollMain)


  var touchPos;
  document.body.ontouchstart = function (e) {
    touchPos = e.changedTouches[0].clientY
  }

  document.body.ontouchend = function (e) {
    can_scroll = true
  }

  document.body.ontouchmove = function (e) {
    let newTouchPos = e.changedTouches[0].clientY;

    if (can_scroll) {
      can_scroll = false
      // console.log(spin_value, newTouchPos, touchPos)
      if (newTouchPos < touchPos) {
        // scroll down
        if (spin_value < sections.length - 1)
          spin_value += 1
      } else {
        if (newTouchPos > touchPos && spin_value > 0)
          spin_value -= 1
        // scroll up
      }
      scroll_content(spin_value)
    }
    setTimeout(function () { }, 650)
  }







  function scroll_content(count) {
    // remove and add class active
    sections[n].classList.remove('active')
    sections[count].classList.add('active')

    // let sum = sections[count].scrollHeight + tY
    console.log(sections)
    console.log(sections[count].getBoundingClientRect())
    console.log(sections[count].offsetTop)
    // console.log('Высота блока', sections[count].scrollHeight)
    // console.log('Высота прошлое значение', tY)
    // console.log('Высота сумма высота + прошлое значение', sum)
    // console.log(sections[count].offsetTop)

    if (sections[count].classList.contains('vh')) {
      content.setAttribute('style', '\
      -moz-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -o-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -webkit-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0); \
      transition: all 650ms ease 0s \
      ')
    } else if (sections[count].classList.contains('footer')) {

      content.setAttribute('style', '\
      -moz-transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0);\
      -o-transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0);\
      -webkit-transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0);\
      transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0); \
      transition: all 650ms ease 0s \
      ')
    } else {
      console.log('213213')
      content.setAttribute('style', '\
      -moz-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -o-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -webkit-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0); \
      transition: all 650ms ease 0s \
      ')
    }



    n = count
    // tY = sum

    if (count === 2) {
      fullacreen.setAttribute('style', '\
      overflow: visible;\
      height: auto;\
      ')
    }

  }

})

function App() {
  return (
    <div className="fullacreen">

      <div className="main__content">
        <div className='section vh one'>
          1
        </div>
        <div className='section vh two'>
          2
        </div>
        <div className='section vh three'>
          3
        </div>
        <div className='section vh four'>
          4
        </div>
        <footer className='footer section'>
          4
        </footer>

      </div>




    </div>
  );
}

export default App;
