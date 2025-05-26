 // NAILCARE 
//  // Simple function to show/hide solutions
        function showHideSolution(solutionId) {
            var solution = document.getElementById(solutionId);
            if (solution.style.display === "block") {
                solution.style.display = "none";
            } else {
                solution.style.display = "block";
            }
        }

        // Simple function to go back to top
        function goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        // Simple function to show scroll button
        function checkScroll() {
            var scrollButton = document.getElementById("scrollButton");
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollButton.style.display = "flex";
            } else {
                scrollButton.style.display = "none";
            }
        }

        // Check scroll when page scrolls
        window.onscroll = function() {
            checkScroll();
        };
        // FAQ WEBPAGE
        $(document).ready(function(){
            $(".label").click(function(){
                $(this).next(".content").toggle()
            })
        })