
// Expand test
$(document).ready(function(){


    // SERVICE START - filter expand link
    $("a#toggle").click(function(){
        $("div#expand").toggle();
        $(this).text($(this).text() == '- Hide search options' ? '+ Show more search options' : '- Hide search options');
    });

    // FILTERS - Location radius
    $("button.filter-radius-button").click(function(){
        $("div.filter-radius-container").toggleClass("js-closed");
        $("div.filter-radius").toggleClass("js-closed");
        // $("button.filter-radius-button").toggleClass("js-closed"); // add black line for when on grey bg
    });

    // FILTERS - Subject
    $("button.filter-subject-button").click(function(){
        $("div.filter-subject-container").toggleClass("js-closed");
        $("div.filter-subject").toggleClass("js-closed");
        $("div.app-c-option-select__filter").toggleClass("js-closed"); // filter search box
        // $("button.filter-subject-button").toggleClass("js-closed"); // add black line for when on grey bg
    });

    // FILTERS - Job title
    $("button.filter-jobtitle-button").click(function(){
        $("div.filter-jobtitle-container").toggleClass("js-closed");
        $("div.filter-jobtitle").toggleClass("js-closed");
        // $("button.filter-jobtitle-button").toggleClass("js-closed"); // add black line for when on grey bg
    });

    // FILTERS - Working pattern
    $("button.filter-pattern-button").click(function(){
        $("div.filter-pattern-container").toggleClass("js-closed");
        $("div.filter-pattern").toggleClass("js-closed");
        // $("button.filter-pattern-button").toggleClass("js-closed"); // add black line for when on grey bg
    });

    // FILTERS - Education phase
    $("button.filter-phase-button").click(function(){
        $("div.filter-phase-container").toggleClass("js-closed");
        $("div.filter-phase").toggleClass("js-closed");
        // $("button.filter-pattern-button").toggleClass("js-closed"); // add black line for when on grey bg
    });

    // FILTERS - Minimum salary
    $("button.filter-salary-button").click(function(){
        $("div.filter-salary-container").toggleClass("js-closed");
        $("div.filter-salary").toggleClass("js-closed");
        // $("button.filter-pattern-button").toggleClass("js-closed"); // add black line for when on grey bg
    });


});
