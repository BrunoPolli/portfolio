
var currentProject = 0;
var position = 0

window.onload = function(){

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
    },
    {
      title: 'Expense Control',
      images: [
        {
          url: './images/expense-control/expense-control-icon.png',
          width: 60,
          height: 60,
          description: "Personal financial management is essential for ensuring stability and achieving financial goals. It allows for budgeting, debt management, and building an emergency fund. Additionally, it contributes to a healthier financial life and helps avoid financial surprises in the future."
        },
        {
          url: './images/expense-control/expense-control-1.jpg',
          width: 350,
          height: 200,
          description: "The project aims to provide an intuitive platform for personal financial management. Users can record and categorize their income and expenses, track their balance, and analyze financial reports over time. The goal is to help individuals manage their personal budget in a simple and effective way."
        },
        {
          url: './images/expense-control/expense-control-2.jpg',
          width: 350,
          height: 200,
          description: "The project is built using Flask for the backend, ensuring a robust and scalable API. The frontend is developed with React, providing an interactive and dynamic user interface. Together, these technologies offer a modern and efficient solution for financial management."
        }
        ]
    }
  ]

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

  var dot = document.getElementById("dots")
  var dotChildren = Array.from(dot.children)
   
  var projectTitle = document.getElementById('project-title')
  var projectDescription = document.getElementById('project-description')
  
  changeTexts()
  dotChildren[0].setAttribute("class", "dot active")

  var projectButtons = document.getElementById("card-buttons")
  var projectButtonChildrens = Array.from(projectButtons.children)
  projectButtonChildrens.forEach(project => {
    project.addEventListener("click", function(){
      const index = parseInt(project.dataset.index)
      changeProject(index)
      activateDot(0)
      changePosition(index)
      changeTexts()
    })
  })
  
  projectButtonChildrens[0].setAttribute("class", "card-button active-button")

  function changePosition(index){
    const carousel = document.getElementById("carousel")


    switch(index){
      case 0:
        carousel.style.transform = 'translateX(0px)';
        indexPosition = 0;
        break
      case 1:
        carousel.style.transform = 'translateX(-1050px)';
        indexPosition = -1050;
        break
      case 2:
        carousel.style.transform = 'translateX(-2100px)';
        indexPosition = -2100;
        break
      case 3:
        carousel.style.transform = 'translateX(-3150px)';
        indexPosition = -3150;
        break
    }
  }

  function changeProject(s_position){
    projectButtonChildrens.forEach((button, index) => {
      if(index == s_position){
        button.setAttribute("class", "card-button active-button")
        currentProject = s_position
        position = 0
      }
      else{
        button.setAttribute("class", "card-button")
      }
    })
  }

  function changeTexts(){
    var projectTitle = document.getElementById('project-title')
    var projectDescription = document.getElementById('project-description')
    
    projectTitle.innerHTML = projects[currentProject].title
    projectDescription.innerHTML = projects[currentProject].images[position].description
  }
  
  function changeImage(e_position){
    var cardVideo = document.getElementById('project-video');
    var cardImage = document.getElementById('project-image');

    const cardImageContainer = document.getElementById('card-image')

    if(currentProject == 0 && e_position == 2){
      cardImageContainer.removeChild(cardImage)
      const video = document.createElement("video")
      video.src = projects[currentProject].images[e_position].url
      video.controls = true
      video.width = projects[currentProject].images[e_position].width
      video.setAttribute("id", "project-video")
      cardImageContainer.appendChild(video)
    }
    else{
      if(cardVideo){
        cardImageContainer.removeChild(cardVideo)
      }
      if(cardImage){
        cardImage.src = projects[currentProject].images[e_position].url
        cardImage.width = projects[currentProject].images[e_position].width
        cardImage.height = projects[currentProject].images[e_position].height
      }
      else{
        const image = document.createElement("img")
        image.src = projects[currentProject].images[e_position].url
        image.width = projects[currentProject].images[e_position].width
        image.height = projects[currentProject].images[e_position].height
        image.setAttribute("id", "project-image")
        cardImageContainer.appendChild(image)
      }
    }
     
    var projectTitle = document.getElementById('project-title')
    var projectDescription = document.getElementById('project-description')
    
    projectTitle.innerHTML = projects[currentProject].title
    projectDescription.innerHTML = projects[currentProject].images[e_position].description
  }

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

  var indexPosition = 0;

  function rightArrow(){
    const carousel = document.getElementById("carousel")

    if(position < 2){
      position += 1
    }
 
    else{
      position = 0
    }
    
    activateDot(position)
 
    if (indexPosition >= -3500){
      carousel.style.transform = `translateX(${indexPosition - 350}px)`;
      indexPosition -= 350;
    }
    else{
      carousel.style.transform = "translateX(0px)";
      indexPosition = 0;
    }
 
    switch(indexPosition){
      case 0:
        changeProject(0)
        break
      case -1050:
        changeProject(1)
        break
      case -2100:
        changeProject(2)
        break
      case -3150:
        changeProject(3)
        break
      case -4200:
        changeProject(0)
        break
    }
    changeTexts()

  }
  
  function leftArrow(){

    const carousel = document.getElementById("carousel")
    if(position > 0){
      position -= 1
    }
    else{
      position = 2
    }
    activateDot(position)
 
    if (indexPosition != 0){
      carousel.style.transform = `translateX(${indexPosition + 350}px)`;
      indexPosition += 350;
    }
    else{
      carousel.style.transform = "translateX(-3850px)";
      indexPosition = -3850;
    }
 
    switch(indexPosition){
      case -3850:
        changeProject(3)
        break
      case -2800:
        changeProject(2)
        break
      case -1750:
        changeProject(1)
        break
      case -700:
        changeProject(0)
        break
    }

    changeTexts()
  }

}