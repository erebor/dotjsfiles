$("#pagelet_home_stream").css("width", "600px");
$("groupSideNavWrapper").hide();
$("#pagelet_apps_nav").hide();
$(".fbDock").hide();
$("<style type='text/css'>.fbDock{ display: none }</style>").appendTo("head");
$("<style type='text/css'>#rightCol{ display: none }</style>").appendTo("head");

$("#pagelet_sidebar").remove()

