document.addEventListener("DOMContentLoaded",(function(){var nodes,node,i,getAncestorOrSelfWithDataSpecificKind=function(el){for(;el;){if(el.getAttribute&&el.getAttribute("data-specific-kind"))return el;el=el.parentNode}return el};for(nodes=document.querySelectorAll("div[data-link='we-link']"),i=0;i<nodes.length;i++){var classNames=(node=nodes[i]).getAttribute("class"),href=node.firstChild.getAttribute("href");if(classNames&&classNames.indexOf("shinybox")>-1)node.setAttribute("href",href);else{var target=node.getAttribute("target");!function(node,href,target){node.addEventListener("click",(function(event){getAncestorOrSelfWithDataSpecificKind(event.target)==getAncestorOrSelfWithDataSpecificKind(event.currentTarget)&&window.open(href,target||"_self")}))}(node,href,target)}}}));