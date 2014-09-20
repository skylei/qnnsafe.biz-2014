$(function () {
    $(".itemfilter").hide();
    setTimeout('$("#finder").isotope({itemSelector: ".showroom-item"});$(".itemfilter").show("fast");',1500);

    var filters = {};
    $(".itemfilter a[data-filter]").click(function(e) {
        e.preventDefault();

        var $this = $(this)
        var $buttonGroup = $this.parents('.filter-group');

        $buttonGroup.find('a').removeClass("active");
        var b = $(this).data("filter");
        $this.addClass("active");

        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[ filterGroup ] = $this.attr('data-filter');
        // combine filters
        var filterValue = '';
        for ( var prop in filters ) {
            filterValue += filters[ prop ];
        }
        $("#finder").isotope({filter: filterValue})
    });

    $(".showmore").click(function(a) {
        a.preventDefault();
        var b = $(this).parents(".itemfilter-item").find(".collapsible");
        b.hasClass("collapsed") ? ($(this).text("隐藏"), b.removeClass("collapsed")) : ($(this).text("更多"), b.addClass("collapsed"))
    })
})