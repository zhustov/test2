 jQuery('#owl-products').owlCarousel({
            loop:true,
            items:1,
            autoplay:true,
            autoplayHoverPause:true,
            nav:true,
            dot:true,
            navText: ["<img src='images/arrow-left.png'>", "<img src='images/arrow-right.png'>"],  
            margin:0,        
            responsive: {
                0: {
                    items: 2,
                    nav:true,
                    margin:8
                },
                600: {
                    items: 1,
                    nav:true
                },
                1000: {
                    items: 1,
                    nav:true
                }
            }
        }); 