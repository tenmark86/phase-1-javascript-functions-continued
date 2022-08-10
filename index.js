// code your solution here

/*  defines saturdayFun function expression as specified */

function saturdayFun(activity="roller-skate") {

    return `This Saturday, I want to ${activity}!`;

  }
  
  /*  defines mondayWork function expression as specified */

  let mondayWork = function(activity="go to the office") {

    return `This Monday, I will ${activity}.`;
  }
  /*defines wrapAdjective function according to the specification` */

  
  let wrapAdjective = function(style="*") {

    return function(adjective="special") {

      return `You are ${style}${adjective}${style}!`;

    }
    
  }