document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    let selectedTabIndex = 0;
  
    const featuresBtn = document.getElementById("btn-features");
    const capabilitiesBtn = document.getElementById("btn-capabilities");
    const practicesBtn = document.getElementById("btn-practices");
    const manipulationBtn = document.getElementById("btn-manipulation");
    const inheritanceBtn = document.getElementById("btn-inheritance");
  
    const tabContent = document.getElementById("tab-content");
    const tabImage = document.getElementById("tab-image");
  
    const removeActive = function () {
      tabContent.classList.remove("active");
      //tabContent.style.backgroundColor = "rgb(2, 2, 170)";
      featuresBtn.classList.remove("active");
      capabilitiesBtn.classList.remove("active");
      practicesBtn.classList.remove("active");
      manipulationBtn.classList.remove("active");
      inheritanceBtn.classList.remove("active");
  
      updateTabContent(features[selectedTabIndex]);
    };
  
    const features = [
      //features
      [
        "Use Descriptive Variable and Function Names",
        "Keep Functions Small and Focused",
        "Prefer const and let over var",
        "Avoid Global Variables",
        "Write Modular Code",
      ],
      //capabilities
      [
        "Asynchronous Programming",
        "DOM Manipulation",
        "Event Handling",
        "Frameworks and Libraries",
        "APIs and AJAX",
      ],
  
      //practices
      [
        "Use Meaningful and Consistent Naming Conventions",
        "Keep Functions Short and Focused",
        "Avoid Global Variables",
        "Write Unit Tests",
        "Code Commenting and Documentation",
        "Use of Modern ES6+ Features",
        "Effective Use of Promises and Async/Await",
      ],
      [
        "Selecting Elements",
        "Modifying Element Content",
        "Changing Element Attributes",
        "Styling Elements",
        "Adding and Removing Elements",
        "Event Handling",
        "Traversing the DOM",
      ],
      [
        "Prototypal Inheritance",
        "Object Inheritance",
        "Class-Based Inheritance",
        "Inheritance Hierarchies",
        "Multiple Inheritance",
        "Single Inheritance",
        "Inheritance Patterns",
        "Method Overriding",
      ],
    ];
    //DOM manipulation
  
    const imagesArr = [
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGZ8vp0HsvotYad-g6kuQo-IuAzWfCcSflQ&s",
      ],
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2cibLb7FXG3xl_ua85gmxaCu8aTUqAAgAA&s",
      ],
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtzOxFHZD7Zj-ORCiD24lnOE3I-Bz-gD-xRA&s",
      ],
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zDUcA9kxuB-GXNm1ptYDv1tyXCAIXhhXmA&s",
      ],
      [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWMD2yX8oY0azw9UEZNzJuEwGcbUbWlj6UA&s",
      ],
    ];
  
    const updateTabContentImage = (imagesArr) => {
      const img = document.createElement("img");
      img.className = "imgs";
      img.src = imagesArr[0]; // Assuming each entry in imagesArr is an array with a single image URL
      tabImage.innerHTML = "";
      if (img.src) {
        tabImage.appendChild(img);
      }
    };
  
    const updateTabContent = (featuresArr) => {
      const list = document.createElement("ul"); //<ul></ul>
      let listContent = "";
      featuresArr.forEach((feature) => {
        listContent += `<li>${feature}</li>`;
      });
      list.innerHTML = listContent;
      tabContent.innerHTML = "";
      tabContent.appendChild(list);
      updateTabContentImage(imagesArr[selectedTabIndex]);
    };
  
    updateTabContent(features[selectedTabIndex]);
  
    featuresBtn.addEventListener("click", function () {
      selectedTabIndex = 0;
      removeActive();
      featuresBtn.classList.add("active");
      tabContent.classList.add("active");
    });
  
    capabilitiesBtn.addEventListener("click", function () {
      selectedTabIndex = 1;
      removeActive();
      capabilitiesBtn.classList.add("active");
      tabContent.classList.add("active");
    });
  
    practicesBtn.addEventListener("click", function () {
      selectedTabIndex = 2;
      removeActive();
      practicesBtn.classList.add("active");
      tabContent.classList.add("active");
    });
  
    manipulationBtn.addEventListener("click", function () {
      selectedTabIndex = 3;
      removeActive();
      manipulationBtn.classList.add("active");
      tabContent.classList.add("active");
    });
  
    inheritanceBtn.addEventListener("click", function () {
      selectedTabIndex = 4;
      removeActive();
      inheritanceBtn.classList.add("active");
      tabContent.classList.add("active");
    });
  });
  