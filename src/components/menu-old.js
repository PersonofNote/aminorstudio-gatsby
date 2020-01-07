export default function() {
    document.addEventListener('DOMContentLoaded',function(){
    
        //Collapsing logic
        const menu = document.getElementsByClassName('custom-menu')[0];
        var scrollDistance = window.pageYOffset;
        const toggle = document.getElementsByClassName('menu-toggle-wrap')[0];
        const list = document.getElementsByClassName('menu-main-menu-container')[0];
         //Highlight page you're on
         var url = window.location;
         var baseUrl = url.pathname.split('/');
         //remove empty strings from base url
         var filteredUrl = baseUrl.filter(function(el) {
             return el != '';
         });
         
        var wWidth = document.documentElement.clientWidth;
        var isMobile = wWidth < 800;
        if (isMobile)  menu.classList.add('scrolling'); 
        //Check if window is not at the top on load
            if (scrollDistance >= 50 && !isMobile) {
                if (!menu.classList.contains('scrolling')) {
                    menu.classList.add('scrolling');
                    //Prevent infinite flickering
                    window.moveTo(0, scrollDistance);
                }
            }
            else if (scrollDistance < 50 && !isMobile) {
                if (menu.classList.contains('scrolling')) {
                    menu.classList.remove('scrolling');
                }
            }
            scrollDistance = window.pageYOffset;
            
        toggle.addEventListener('click', function(){
            //Possibly not best practice, try making it a bit more robust
            if (list.style.top != '40%'){
            list.style.top = '40%'; 
            } else {
                list.style.top ="-999px";
            }
        });
        window.addEventListener('scroll', function() {
            if (scrollDistance >= 50 && !isMobile) {
                if (!menu.classList.contains('scrolling')) {
                    menu.classList.add('scrolling');
                    //Prevent infinite flickering
                    window.moveTo(0, scrollDistance);
                }
            }
            else if (scrollDistance < 50 && !isMobile) {
                if (menu.classList.contains('scrolling')) {
                    menu.classList.remove('scrolling');
                }
            }
            scrollDistance = window.pageYOffset;
        });
        window.addEventListener('resize', function(){
            wWidth = document.documentElement.clientWidth;
            isMobile = wWidth < 800;
            if (isMobile) {
                menu.classList.add('scrolling');
            };
        });
    });

}
