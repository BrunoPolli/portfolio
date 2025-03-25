var projects = [
  {
    title: 'Parallax Landing page',
    images: [
      {
        url: './images/landing-page/landing-page-icon.png',
        width: 60,
        height: 60,
        description: 'A simple landing page to explore the parallax effect. The parallax effect is a design technique in which the background moves at a different speed than other layers. It creates a sense of perspective and depth during navigation'
      },
      {
        url: './images/landing-page/landing-page-1.jpg',
        width: 350,
        height: 200,
        description: "This page was designed and developed with HTML, CSS, and JavaScript. With a simple structure, it's focused on clearly showcasing the parallax effect. The layout is minimalist, with no excessive elements, ensuring that the user focuses on the visual experience. The smooth transitions between layers create a sense of immersion, making the navigation more engaging and interesting."
      },
      {
        url: './images/landing-page/landing-page-example.mp4',
        width: 350,
        description: 'The main objective of this project is to test and demonstrate the effectiveness of the parallax effect, observing how it may enhance the user experience in terms of aesthetics and usability. Watch the demonstration in this video.'
      }
    ]
  },
  {
    title: 'Images Converter',
    images: [
      {
        url: './images/images-converter/gear.png',
        width: 60,
        height: 60,
        description: 'In Machine Learning (ML) projects, it’s essential to ensure that input data, such as images, is pre-processed in an adequate way before being used to train models. Image processing, such as size and quality adjustments, can directly impact model performance. This project was developed to facilitate image preparation, offering a simple and automated way to adjust image dimensions, ensuring that all images follow a standard before being sent for training.'
      },
      {
        url: './images/images-converter/images-converter-1.jpg',
        width: 350,
        height: 200,
        description: 'This project consists of a Python script that, when executed, shows an interactive menu in the terminal, allowing the user to navigate through options using the arrow keys and select chosen actions with the Enter key. The system offers three options:convert-images: Allows the user to convert images by adjusting their size based on given input values.\nverify-images: Verifies if the images were converted correctly, ensuring that the size changes are within the correct values.\nsave-images: Saves all converted images in Azure Blob Storage, providing an efficient way to store and access data for training the model.'
      },
      {
        url: './images/images-converter/images-converter-3.jpg',
        width: 350,
        height: 200,
        description: "This system was designed with the needs of image pre-processing in Machine Learning contexts in mind. In ML projects, especially when working with large volumes of image data, it's essential to ensure that all images are the correct size and format. The script facilitates this task, providing an efficient solution to convert, verify, and store images, helping ensure that all data is ready to be used in model training in an optimized way."
      }
    ]
  },
  {
    title: 'Sensor Reading',
    images: [
      {
        url: './images/sensor-reading/azure-functions.png',
        width: 60,
        height: 60,
        description: "In many monitoring systems, such as in agricultural or cultivation environments, it is crucial to continuously track sensor data in real-time, like temperature and soil moisture. This project was developed to collect and store this data in an automated way, using an Azure Function that is triggered periodically, making requests to a physical sensor API and saving the information in a cloud database."
      },
      {
        url: './images/sensor-reading/sensor-reading-1.jpg',
        width: 350,
        height: 200,
        description: "The system consists of a timer-triggered Azure Function, which is executed every hour. It makes an HTTP request to a physical sensor API that collects temperature and soil moisture data. After receiving the response with the data, the Azure Function stores it in an Azure Table, allowing the information to be accessed later. The function is configured to run automatically without manual intervention, ensuring that the data is collected continuously and efficiently"
      },
      {
        url: './images/sensor-reading/sensor-reading-2.jpg',
        width: 350,
        height: 200,
        description: "This project was created to automate the process of collecting sensor data, which is crucial in many environmental monitoring scenarios. The Azure Function ensures that the temperature and soil moisture data is securely and scalably stored, making the information available for future analysis or decision-making. This type of automation helps improve the efficiency of systems that depend on continuous data collection, while also ensuring that the information is always up-to-date and accessible"
      }
      ]
  }
]

window.onload = function(){

  // window.addEventListener("scroll", function(e) {
  //   e.preventDefault();
  // })
  var currentProject = 0;
  // var projectVideo = getElementById("project-video")
  // projectVideo.style.visibility = "hidden"

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

  const next = document.getElementById('next')
  next.addEventListener("click", function() {
    rightArrow()
  })

  const prev = document.getElementById('prev')
  prev.addEventListener("click", function() {
    leftArrow()
  })

  // const images = [
  //   {
  //     title: "Images Converter",
  //     description: "In the Machine Learning context, it's usual to formalize data before training models. This project was created to convert images to a given width and height size. Developed with Python, the system is runs in a prompt terminal, selecting through arrow and Enter keys.",
  //     // url: "url('./images/images-converter-1.jpg')"
  //   },
  //   {
  //     title: "A beautiful place",
  //     description: "Thinking about vacance?",
  //     // url: "url('./images/landscape.jpg')"
  //   },
  //   {
  //     title: "Night Sky",
  //     description: "The most amazing night skyies from east side",
  //     // url: "url('./images/night-sky.jpg')"
  //   }
  // ]
  

  var dot = document.getElementById("dots")
  var dotChildren = Array.from(dot.children)

  var position = 0
   
  var projectTitle = document.getElementById('project-title')
  var projectDescription = document.getElementById('project-description')
  
  projectTitle.innerHTML = projects[0].title
  projectDescription.innerHTML = projects[0].description

  dotChildren[0].setAttribute("class", "dot active")

  var projectButtons = document.getElementById("card-buttons")
  var projectButtonChildrens = Array.from(projectButtons.children)
  projectButtonChildrens.forEach(project => {
    project.addEventListener("click", function(){
      changeProject(parseInt(project.dataset.index))
      activateDot(0)
      changeImage(0)
    })
  })
  
  projectButtonChildrens[0].setAttribute("class", "card-button active-button")

  changeImage(position)

  function changeProject(position){
    projectButtonChildrens.forEach((button, index) => {
      if(index == position){
        button.setAttribute("class", "card-button active-button")
        currentProject = position
      }
      else{
        button.setAttribute("class", "card-button")
      }
    })

    changeImage(position)
    
  }

  
  function changeImage(position){
    var cardVideo = document.getElementById('project-video');
    var cardImage = document.getElementById('project-image');

    const cardImageContainer = document.getElementById('card-image')
    
    
    // const fl = document.getElementById('project-image')

    if(currentProject == 0 && position == 2){

      cardImageContainer.removeChild(cardImage)
      
      const video = document.createElement("video")
      video.src = projects[currentProject].images[position].url
      video.controls = true
      video.width = projects[currentProject].images[position].width
      video.setAttribute("id", "project-video")
      cardImageContainer.appendChild(video)
      // projectVideo.style.visibility = "visible"
      // projectVideo.style.marginLeft = `-${toString(fl.offsetWidth / 2 - 170)}px`
      // fl.src = projects[currentProject].images[0].url
      // fl.style.visibility = "hidden"
    }
    else{
      if(cardVideo){
        cardImageContainer.removeChild(cardVideo)
      }
      if(cardImage){
        cardImage.src = projects[currentProject].images[position].url
        cardImage.width = projects[currentProject].images[position].width
        cardImage.height = projects[currentProject].images[position].height
      }
      else{
        const image = document.createElement("img")
        image.src = projects[currentProject].images[position].url
        image.width = projects[currentProject].images[position].width
        image.height = projects[currentProject].images[position].height
        image.setAttribute("id", "project-image")
        cardImageContainer.appendChild(image)

      }
      
      // fl.style.visibility = "visible"
      // projectVideo.style.visibility = "hidden"
      // projectVideo.style.marginLeft = "-170px"
      
      // fl.style.backgroundImage = projects[currentProject].images[position].url
      // fl.src = projects[currentProject].images[position].url
    }
    // if(currentProject == 0 && position == 1){
    //   fl.style.objectFit = "contain"

    // }

    
     
    var projectTitle = document.getElementById('project-title')
    var projectDescription = document.getElementById('project-description')
    
    projectTitle.innerHTML = projects[currentProject].title
    projectDescription.innerHTML = projects[currentProject].images[position].description

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
    if(position < 2){
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