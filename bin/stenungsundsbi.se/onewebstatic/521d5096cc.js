!function($){var isMobile=!1,initializeShinyBox=function(el,noTitleCaptionBox){0!==el.length&&el.shinybox({verticalSwipeDisable:!0,beforeOpen:function(){isMobile?$(".shinybox-overlay").addClass("mobile-view"):$(".shinybox-overlay").removeClass("mobile-view")},noTitleCaptionBox:noTitleCaptionBox,sort:function(a,b){if($(a).length){var isInstagramKind=$(a).parents('div[data-kind="INSTAGRAM_GALLERY"]').length>0,ap=$(a).offset(),bp=$(b).offset();return ap.top-bp.top==0||isInstagramKind?ap.left-bp.left==0||isInstagramKind?$(a).data("dom-index")-$(b).data("dom-index"):ap.left-bp.left:ap.top-bp.top}return 1}})},tagCaptionEnabledLightbox=function(){var $this=$(this);initializeShinyBox($this.find(".shinybox"),0===$this.find("div[data-captionenabled='true']").length)};$(".shinybox").each((function(index){$(this).attr("data-dom-index",index)})),$('div[data-kind="IMAGE"] > div > div > .shinybox').each((function(){var $this=$(this);initializeShinyBox($this,!$this.attr("title"))})),$('div[data-kind="GALLERY"]').each(tagCaptionEnabledLightbox),$('div[data-kind="INSTAGRAM_GALLERY"]').each(tagCaptionEnabledLightbox),$(window).one("changed-to-mobile-view",(function(){isMobile=!0}))}(oneJQuery);