$().ready(function() {
  // don't show me trending topics
  $("<style type='text/css'>.trends-inner{ display: none }</style>").appendTo("head");

  // don't show me promoted tweets
  $("<style type='text/css'>p.promo{ display: none }</style>").appendTo("head");

  // don't recommend that I follow anybody
  $("<style type='text/css'>.user-rec-component{ display: none }</style>").appendTo("head");

  // don't show me extraneous HRs either
  $("<style type='text/css'>.component-spacer{ display: none }</style>").appendTo("head");
});

