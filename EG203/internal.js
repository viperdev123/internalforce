document.addEventListener("DOMContentLoaded", function () {
    // Get all the <a> elements within the <ul>
    var links = document.querySelectorAll("ul li a");

    // Get the div elements
    var lengthDiv = document.querySelector(".Length");
    var supportDiv = document.querySelector(".Support");
    var loadsDiv = document.querySelector(".Loads");

    // Add click event listeners to each <a> element
    links.forEach(function (link) {
        link.addEventListener("click", function () {
            // Remove the "active" class from all <a> elements
            links.forEach(function (link) {
                link.classList.remove("active");
            });

            // Add the "active" class to the clicked <a> element
            this.classList.add("active");

            // Toggle the display of the respective div
            if (this.textContent === "Length") {
                lengthDiv.style.display = "block";
                supportDiv.style.display = "none";
                loadsDiv.style.display = "none";
            } else if (this.textContent === "Support") {
                lengthDiv.style.display = "none";
                supportDiv.style.display = "block";
                loadsDiv.style.display = "none";
            } else if (this.textContent === "Loads") {
                lengthDiv.style.display = "none";
                supportDiv.style.display = "none";
                loadsDiv.style.display = "block";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the input element
    var inputElement = document.querySelector('.BLength');

    // Get the select element
    var selectElement = document.querySelector('.ULength');

    // Get the div element to update
    var scaleNumberDiv = document.querySelector('.scaleNumber');

    // Add event listeners to both input and select elements
    inputElement.addEventListener('input', updateScaleNumber);
    selectElement.addEventListener('change', updateScaleNumber);

    // Function to update the scale number
    function updateScaleNumber() {
        // Get the selected option
        var selectedOption = selectElement.options[selectElement.selectedIndex];

        // Get the scale number from the input element
        var scaleNumber = parseFloat(inputElement.value); // Parse as float

        // Check if the scale number is less than 0
        if (scaleNumber < 0) {
            // If it's less than 0, set it to 0
            scaleNumber = 1;
            inputElement.value = scaleNumber;
        }
        var updatedContent = scaleNumber + ' ' + selectedOption.textContent;
        scaleNumberDiv.textContent = updatedContent;
    }
    updateScaleNumber();
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons and the image element
    var btnSupfix = document.querySelector('.btnSupfix');
    var btnSupRoller = document.querySelector('.btnSupRoller');
    var btnSupWall = document.querySelector('.btnSupWall');
    var suppic = document.querySelector('.SuppicLeft img');

    // Add event listeners to each button
    btnSupfix.addEventListener('click', function () {
        suppic.src = "/asset/sup_fixed.png";
        suppic.parentElement.style.top = '39%';
        suppic.parentElement.style.left = '395px';
    });

    btnSupRoller.addEventListener('click', function () {
        suppic.src = "/asset/sup_fluid.png";
        suppic.parentElement.style.top = '39%';
        suppic.parentElement.style.left = '395px';
    });

    btnSupWall.addEventListener('click', function () {
        suppic.src = "/asset/sup_anchorage.png";
        suppic.parentElement.style.top = '37%';
        suppic.parentElement.style.left = '387px';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons and the image element
    var btnSupfix2 = document.querySelector('.btnSupfix2');
    var btnSupRoller2 = document.querySelector('.btnSupRoller2');
    var btnSupWall2 = document.querySelector('.btnSupWall2');
    var suppic2 = document.querySelector('.SuppicRight img');

    // Add event listeners to each button
    btnSupfix2.addEventListener('click', function () {
        suppic2.src = "/asset/sup_fixed.png";
        suppic2.parentElement.style.top = '39%';
        suppic2.parentElement.style.left = '1390px';
        suppic2.parentElement.style.transform = 'none'; // Reset transform
    });

    btnSupRoller2.addEventListener('click', function () {
        suppic2.src = "/asset/sup_fluid.png";
        suppic2.parentElement.style.top = '39%';
        suppic2.parentElement.style.left = '1390px';
        suppic2.parentElement.style.transform = 'none'; // Reset transform
    });

    btnSupWall2.addEventListener('click', function () {
        suppic2.src = "/asset/sup_anchorage.png";
        suppic2.parentElement.style.top = '37%';
        suppic2.parentElement.style.left = '1390px';
        suppic2.parentElement.style.transform = 'rotate(180deg)'; // Rotate 180 degrees
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all the buttons and load divs
    var btnforce1 = document.querySelector('.btnforce1');
    var btnforce2 = document.querySelector('.btnforce2');
    var btnforce3 = document.querySelector('.btnforce3');
    var btnforce4 = document.querySelector('.btnforce4');

    var load1 = document.querySelector('.Load1');
    var load2 = document.querySelector('.Load2');
    var load3 = document.querySelector('.Load3');
    var load4 = document.querySelector('.Load4');

    // Get all the Cancel buttons
    var cancelButtons = document.querySelectorAll('.cancle-add button');

    // Function to hide all Load divs
    function hideAllLoadDivs() {
        load1.style.display = "none";
        load2.style.display = "none";
        load3.style.display = "none";
        load4.style.display = "none";
    }

    // Add event listeners to each button
    btnforce1.addEventListener('click', function () {
        hideAllLoadDivs();
        load1.style.display = "block";
        removeActiveClass();
        btnforce1.classList.add('activebtn');
    });

    btnforce2.addEventListener('click', function () {
        hideAllLoadDivs();
        load2.style.display = "block";
        removeActiveClass();
        btnforce2.classList.add('activebtn');
    });

    btnforce3.addEventListener('click', function () {
        hideAllLoadDivs();
        load3.style.display = "block";
        removeActiveClass();
        btnforce3.classList.add('activebtn');
    });

    btnforce4.addEventListener('click', function () {
        hideAllLoadDivs();
        load4.style.display = "block";
        removeActiveClass();
        btnforce4.classList.add('activebtn');
    });
    cancelButtons.forEach(function (cancelButton) {
        cancelButton.addEventListener('click', function () {
            hideAllLoadDivs();
            removeActiveClass();
        });
    });
    function removeActiveClass() {
        btnforce1.classList.remove('activebtn');
        btnforce2.classList.remove('activebtn');
        btnforce3.classList.remove('activebtn');
        btnforce4.classList.remove('activebtn');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('ul li a');
    var loadDivs = document.querySelectorAll('.Load1, .Load2, .Load3, .Load4');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            loadDivs.forEach(function (loadDiv) {
                loadDiv.style.display = "none";
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var inputElement = document.querySelector('.BLength');
    var BLength = parseInt(inputElement.value);
    var positionInput = document.querySelector('.position-input');
    var arrowPointLoad = document.querySelector('.arrowPointLoad');
    var magnitudeElement = document.querySelector('.Magnitude');
    var positionInput2 = document.querySelector('.position-input2');
    var momentElement = document.querySelector('.Moment');
    var magnitudeMomentElement = document.querySelector('.Magnitude-Moment');
    var arrowInitialLeft = 420;
    var arrowMaxWidth = 1420;
    var magnitudeInitialLeft = 410;
    var magnitudeMaxWidth = 1410;
    var momentInitialLeft = 395;
    var momentMaxWidth = 1390;
    function updateElementsPosition() {
        var position = parseFloat(positionInput.value);
        var newPosition = Math.min(position, BLength);
        var arrowNewLeft = arrowInitialLeft + (newPosition / BLength) * (arrowMaxWidth - arrowInitialLeft);
        arrowPointLoad.style.left = arrowNewLeft + 'px';
        var magnitudeNewLeft = magnitudeInitialLeft + (newPosition / BLength) * (magnitudeMaxWidth - magnitudeInitialLeft);
        magnitudeElement.style.left = magnitudeNewLeft + 'px';
        var newPosition2 = Math.min(position2, BLength);
        var magnitudeMomentNewLeft = magnitudeInitialLeft + (newPosition2 / BLength) * (magnitudeMaxWidth - magnitudeInitialLeft);
        magnitudeMomentElement.style.left = magnitudeMomentNewLeft + 'px';
        var momentNewLeft = momentInitialLeft + (newPosition2 / BLength) * (momentMaxWidth - momentInitialLeft);
        momentElement.style.left = momentNewLeft + 'px';
    }
    inputElement.addEventListener('change', function () {
        BLength = parseInt(this.value);
        updateElementsPosition();
        console.log("BLength updated to: " + BLength);
    });
    positionInput.addEventListener('input', function () {
        updateElementsPosition();
    });
    positionInput2.addEventListener('input', function () {
        updateElementsPosition();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var positionInput = document.querySelector('.position-input');
    var forceInput = document.querySelector('.force-input');
    var magnitudeElement = document.querySelector('.Magnitude');
    positionInput.addEventListener('input', updateMagnitudeDisplay);
    forceInput.addEventListener('input', updateMagnitudeDisplay);
    function updateMagnitudeDisplay() {
        if (positionInput.value && forceInput.value && forceInput.value > 0) {
            magnitudeElement.style.display = 'block';
            magnitudeElement.textContent = forceInput.value;
        } else {
            magnitudeElement.style.display = 'none';
        }
    }
    updateMagnitudeDisplay();
});
document.addEventListener("DOMContentLoaded", function () {
    var arrowPointLoad = document.querySelector('.arrowPointLoad');
    var angleInput = document.querySelector('.angle');
    var upButton = document.querySelector('.up');
    var downButton = document.querySelector('.down');
    upButton.addEventListener('click', function () {
        angleInput.value = 90;
        arrowPointLoad.classList.add('mirrored');
        updateRotation();
    });
    downButton.addEventListener('click', function () {
        angleInput.value = 90;
        arrowPointLoad.classList.remove('mirrored');
        updateRotation();
    });
    angleInput.addEventListener('input', function () {
        updateRotation();
    });
    function updateRotation() {
        var angle = parseInt(angleInput.value);
        angle = Math.max(0, Math.min(180, angle));
        var isMirrored = arrowPointLoad.classList.contains('mirrored');
        var rotation = isMirrored ? angle : -angle;

        arrowPointLoad.style.transform = `rotate(${rotation}deg) scaleX(1)`;
    }
    updateRotation();
});
document.addEventListener("DOMContentLoaded", function () {
    var positionInput = document.querySelector('.position-input');
    var forceInput = document.querySelector('.force-input');
    var arrowPointLoad = document.querySelector('.arrowPointLoad img');
    var magnitudeElement = document.querySelector('.Magnitude');
    var magnitudeMomentDiv = document.querySelector('.Magnitude-Moment');
    var momentInput = document.querySelector('.Moment-input');
    var positionInput2 = document.querySelector('.position-input2');
    var momentImageDiv = document.querySelector('.Moment img');
    var cancelButton = document.querySelector('.cancle-btn');
    function updateArrow() {
        if (positionInput.value && forceInput.value) {
            arrowPointLoad.src = '/asset/arrow.png';
        } else {
            arrowPointLoad.src = '';
        }
    }
    function clearInputValues() {
        positionInput.value = '';
        forceInput.value = '';
        magnitudeElement.style.display = 'none';
        arrowPointLoad.src = ''; 
        momentInput.value = '';
        positionInput2.value = '';
        magnitudeMomentDiv.style.display = 'none';
        momentImageDiv.src = '';
    }
    function updateMagnitudeDisplay() {
        if (positionInput.value && forceInput.value && forceInput.value > 0) {
            magnitudeElement.style.display = 'block';
            magnitudeElement.textContent = forceInput.value;
        } else {
            magnitudeElement.style.display = 'none';
        }
    }
    positionInput.addEventListener('input', function () {
        updateArrow();
        updateMagnitudeDisplay();
    });

    forceInput.addEventListener('input', function () {
        updateArrow();
        updateMagnitudeDisplay();
    });
    cancelButton.addEventListener('click', function () {
        clearInputValues();
    });
    updateArrow();
    updateMagnitudeDisplay();
});
document.addEventListener("DOMContentLoaded", function () {
    var momentInput = document.querySelector('.Moment-input');
    var magnitudeMomentDiv = document.querySelector('.Magnitude-Moment');
    momentInput.addEventListener('input', function () {
        var momentValue = momentInput.value;
        magnitudeMomentDiv.textContent = momentValue;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var momentInput = document.querySelector('.Moment-input');
    var positionInput2 = document.querySelector('.position-input2');
    var momentImageDiv = document.querySelector('.Moment img');
    var magnitudeMomentDiv = document.querySelector('.Magnitude-Moment');
    momentInput.addEventListener('input', updateMomentImage);
    positionInput2.addEventListener('input', updateMomentImage);
    function updateMomentImage() {
        var momentValue = momentInput.value;
        var positionValue = positionInput2.value;
        if (momentValue !== "" && positionValue !== "") {
            momentImageDiv.src = "/asset/moment.png";
            magnitudeMomentDiv.style.display = "block";
        } else {
            momentImageDiv.src = "";
            magnitudeMomentDiv.style.display = "none";
        }
    }
    updateMomentImage();
});

document.addEventListener("DOMContentLoaded", function () {
    var cwButton = document.querySelector('.cw');
    var ccwButton = document.querySelector('.ccw');
    var momentImage = document.querySelector('.Moment img');
    cwButton.addEventListener('click', function () {
        momentImage.classList.remove('mirror');
    });
    ccwButton.addEventListener('click', function () {
        momentImage.classList.add('mirror');
    });
});