/**
 * @file
 * JS for Radix Starter.
 */
(function ($) {

  Drupal.behaviors.unary_bootstrap_select = {
    attach: function(context) {
      $( document ).ready(function() {
      	$("select[multiple='multiple']").selectpicker();
      }); //endoff document ready
    }
  };

  Drupal.behaviors.unary_scrollfollow = {
    attach: function () {
      var settings = {
      	// element: jQuery('.burr-flipped-sidebar-inner')
        element: jQuery('.pane-node-form-buttons')
      };

      if (settings.element.length) {
        this.scrollFollowSidebar(settings);
      }
    },

    scrollFollowSidebar: function (settings) {
      /**
       * Namespace and class settings.
       */
      var _this = {};
      _this.settings = settings;

      /**
       * Starts initial and global object
       */
      function init() {
        _this.sidebar = _this.settings.element;
        _this.pageWrap = jQuery('#main-wrapper');
        _this.window = jQuery(window);
        _this.offset = _this.sidebar.offset();
        events()
      };


      /**
       * General events.
       */
      function events () {
        _this.window.scroll(function (ev) {
          scrollFollow();
        });
      };


      /**
       * The math and animation for sidebar position.
       * + 100 = magic margin :)
       */
      function scrollFollow () {
      	if (_this.window.scrollTop()+60 > _this.offset.top) {
	  var w = _this.sidebar.width();
          _this.sidebar.addClass('sticky-header');
      	  _this.sidebar.width(w);
        } else {
          _this.sidebar.removeClass('sticky-header');
          _this.sidebar.width('auto')
        }      
      };
      init();
    }
  };
})(jQuery);
