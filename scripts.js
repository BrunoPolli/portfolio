
window.onload = function(){

  // window.addEventListener("scroll", function(e) {
  //   e.preventDefault();
  // })
  
  const navContainer = document.querySelector("nav")
  const navBar = navContainer.querySelectorAll("a");
  navBar.forEach(item => {
    item.addEventListener("mouseenter", function() {
      navBar.forEach(others => {
        others.style.color = "rgb(129, 129, 129)"
      })
      item.style.color = "#448597"
    })
    item.addEventListener("mouseleave", function() {
      navBar.forEach(others => {
        others.style.color = "white"
      })
    })
  })

  function scroll(){
    
  }

  const next = document.getElementById('next')
  next.addEventListener("click", function() {
    rightArrow()
  })

  const prev = document.getElementById('prev')
  prev.addEventListener("click", function() {
    leftArrow()
  })

  const images = [
    {
      title: "Images Converter",
      description: "In the Machine Learning context, it's usual to formalize data before training models. This project was created to convert images to a given width and height size. Developed with Python, the system is runs in a prompt terminal, selecting through arrow and Enter keys.",
      url: "url('./images/images-converter-1.jpg')"
    },
    {
      title: "A beautiful place",
      description: "Thinking about vacance?",
      url: "url('./images/landscape.jpg')"
    },
    {
      title: "Night Sky",
      description: "The most amazing night skyies from east side",
      url: "url('./images/night-sky.jpg')"
    }
  ]

  var dot = document.getElementById("dots")
  var dotChildren = Array.from(dot.children)

  var position = 0
   
  var projectTitle = document.getElementById('project-title')
  var projectDescription = document.getElementById('project-description')
  
  projectTitle.innerHTML = images[0].title
  projectDescription.innerHTML = images[0].description

  dotChildren[0].setAttribute("class", "dot active")

 

  changeImage(position)
  
  function changeImage(position){

    const fl = document.getElementById('card-content')
    fl.style.backgroundImage = images[position].url
     
    var projectTitle = document.getElementById('project-title')
    var projectDescription = document.getElementById('project-description')
    
    projectTitle.innerHTML = images[position].title
    projectDescription.innerHTML = images[position].description

  }

  dotChildren.forEach((children, index) => {
    children.addEventListener("click", function(){
      activateDot(parseInt(children.dataset.index))
      changeImage(index)
    })
  })

  function activateDot(position){
    dotChildren.forEach((children, index) => {
      if(index == position){
        children.setAttribute("class", "dot active")
      }
      else{
        children.setAttribute("class", "dot")
      }
    })
  }







  function rightArrow(){
    // const random = Math.floor(Math.random() * 3)
    if(position < images.length - 1){
      position += 1
      changeImage(position)
      // const fl = document.getElementById('card-content')
      // fl.style.backgroundImage = images[position].url
      
      // projectTitle.innerHTML = images[position].title
      // projectDescription.innerHTML = images[position].description

      activateDot(position)

    }
    

  }
  
  function leftArrow(){
    if(position > 0){
      position -= 1
    }
    changeImage(position)
    // const fl = document.getElementById('card-content')
    // fl.style.backgroundImage = images[position].url

    // projectTitle.innerHTML = images[position].title
    // projectDescription.innerHTML = images[position].description

    activateDot(position)
  }

}