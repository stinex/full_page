window.addEventListener('load', () => {

  const sections = document.querySelectorAll('.section'),
    content = document.querySelector('.main__content'),
    fullacreen = document.querySelector('.fullacreen')

  let spin_value = 0,
    n = 0,
    can_scroll = true,
    scroll = true;

  function scrollMain(e) {
    console.log(scroll)
    console.log(can_scroll)
    if (can_scroll) {
      if (scroll) {
        can_scroll = false
        if (e.deltaY > 0) {
          // scroll down
          if (spin_value < sections.length - 1)
            spin_value += 1
          console.log(can_scroll)
        } else {
          if (spin_value > 0)
            spin_value -= 1
          console.log(can_scroll)
          // scroll up
          setTimeout(function () { can_scroll = true }, 450)
        }
        scroll_content(spin_value)

        /* <======== Надо подумать ========> */
      } else {
        can_scroll = false
        // Если блок больше 100vh
        window.onscroll = function (e) {
          if (window.scrollY <= 0) {
            // начало блока
            setTimeout(function () { scroll = true; can_scroll = true }, 450)

          } else if (document.body.clientHeight >= sections[spin_value].getBoundingClientRect().bottom) {
            // конец блока
            console.log('123123')

            e.deltaY = 100
            setTimeout(function () { can_scroll = true; scroll = true; scrollMain(e) }, 450)
          }
        }
      }

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
    console.log(e)
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
    setTimeout(function () { }, 450)
  }







  function scroll_content(count) {
    // remove and add class active
    console.log(count)
    sections[n].classList.remove('active')
    sections[count].classList.add('active')


    if (sections[count].classList.contains('vh')) {
      document.body.style.overflow = 'hidden';
      content.setAttribute('style', '\
      -moz-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -o-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -webkit-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0); \
      transition: all 650ms ease 0s \
      ')
    } else if (sections[count].classList.contains('ah')) {
      scroll = false
      document.body.style.overflow = 'visible';
      content.setAttribute('style', '\
      -moz-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -o-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -webkit-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0); \
      transition: all 650ms ease 0s \
      ')

    } else if (sections[count].classList.contains('footer')) {
      document.body.style.overflow = 'hidden';
      content.setAttribute('style', '\
       -moz-transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0);\
       -o-transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0);\
       -webkit-transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0);\
       transform: translate3d(0, -'+ (sections[count - 1].offsetTop + sections[count].offsetHeight) + 'px, 0); \
       transition: all 650ms ease 0s \
       ')
    } else {
      console.log('213213')

      /* console.log(sections[count].getBoundingClientRect());
      content.setAttribute('style', '\
      -moz-transform: translate3d(0, -'+( sections[count].offsetTop )+ 'px, 0);\
      -o-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      -webkit-transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0);\
      transform: translate3d(0, -'+ sections[count].offsetTop + 'px, 0); \
      transition: all 650ms ease 0s \
      ') */
    }

    n = count

    if (count === 2) {
      fullacreen.setAttribute('style', '\
      overflow: visible;\
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
          5
        </footer>

      </div>




    </div>
  );
}

export default App;
