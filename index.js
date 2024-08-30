// slider start
$('.gallerySlider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
       slidesToShow: 2,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
      },
    },
    
  ],
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});
// slider start
$('.floorySlider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
       slidesToShow: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
      },
    },
    
  ],
  prevArrow: $('.prev1'),
  nextArrow: $('.next2'),
});

// accordion 

 document.addEventListener('DOMContentLoaded', function () {
    // Automatically open the first accordion item
    const firstAccordionButton = document.querySelector('#accordionExample .accordion-item:first-child button');
    const firstAccordionContent = document.querySelector(firstAccordionButton.getAttribute('data-accordion-target'));
    const firstAccordionIcon = firstAccordionButton.querySelector('.icon');
    const firstAccordionTitle = firstAccordionButton.querySelector('.accordion-title');
    const firstImgSrc = firstAccordionButton.getAttribute('data-img');
    const imgElement = document.querySelector('#accrodionImg img');

    // Open the first item by default
    firstAccordionContent.classList.remove('hidden');
    firstAccordionIcon.textContent = '-';
    firstAccordionIcon.classList.add('text-[#2c4e74]');
    firstAccordionTitle.classList.add('text-[#2c4e74]');
    imgElement.src = `./img/specifications/${firstImgSrc}`;

    // Add click event listeners to all accordion buttons
    document.querySelectorAll('#accordionExample .accordion-item button').forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('.icon');
            const title = this.querySelector('.accordion-title');
            const content = document.querySelector(this.getAttribute('data-accordion-target'));
            const imgSrc = this.getAttribute('data-img');

            if (content.classList.contains('hidden')) {
                // Open the accordion
                content.classList.remove('hidden');
                icon.textContent = '-';
                icon.classList.add('text-[#2c4e74]');
                title.classList.add('text-[#2c4e74]');
            } else {
                // Close the accordion
                content.classList.add('hidden');
                icon.textContent = '+';
                icon.classList.remove('text-[#2c4e74]');
                title.classList.remove('text-[#2c4e74]');
            }

            // Change the image
            imgElement.src = `./img/specifications/${imgSrc}`;

            // Close other accordions and reset their titles and icons if needed
            document.querySelectorAll('#accordionExample .accordion-item div').forEach(div => {
                if (div !== content) {
                    div.classList.add('hidden');
                }
            });
            document.querySelectorAll('#accordionExample .accordion-item button .icon').forEach(i => {
                if (i !== icon) {
                    i.textContent = '+';
                    i.classList.remove('text-[#2c4e74]');
                }
            });
            document.querySelectorAll('#accordionExample .accordion-item button .accordion-title').forEach(t => {
                if (t !== title) {
                    t.classList.remove('text-[#2c4e74]');
                }
            });
        });
    });
});


// menu 
  document.addEventListener('DOMContentLoaded', function () {
        const menuItems = document.querySelectorAll('.collapse-trigger');
        const collapseMenu = document.getElementById('navbar-sticky');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove the classes that keep the menu visible
                collapseMenu.classList.add('hidden'); // Hides the menu
                collapseMenu.classList.remove('block'); // Removes the block class if present
            });
        });
    });