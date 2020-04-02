(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js": "JpP8FXbgAZLkfur7LiK3j9AGBhHNIvF742meBJrjO2ShJDhCG2I1uVvW+0DUtrmc", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js": "xZlADit0Q04ISQEdKg2k3L4W9AwQBAuDs9nJL9fM/WwzL1tEU9VPNezOFX0nLEAz", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js": "4BuPRZkdMKSnj3zoxiNrQ86XgNw0rYmBOxe7nshquXwwcauupgBF2DHLVG1WuZlV", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js": "Dv1SQ87hmDqK6S5OhBf0bCuwAEvL5QYL0PuR/F1SPVhCS/r/abjkbpKDYL2zeM19"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("6de0bc66-6676-4b42-8711-b8ef52baab5f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6de0bc66-6676-4b42-8711-b8ef52baab5f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;b6cc1ffc-4cca-453a-8a84-e826edc70f97&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56894&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;56897&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;56918&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;56877&quot;}},&quot;id&quot;:&quot;56873&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;56877&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56867&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;56870&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56930&quot;}},&quot;id&quot;:&quot;56934&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56905&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56857&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;56919&quot;}]},&quot;id&quot;:&quot;56929&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56902&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;56929&quot;}]},&quot;id&quot;:&quot;56928&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;56938&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56906&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56930&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56931&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56932&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56934&quot;}},&quot;id&quot;:&quot;56933&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;56916&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;56917&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;56918&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;56920&quot;}},&quot;id&quot;:&quot;56919&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;56902&quot;},{&quot;id&quot;:&quot;56903&quot;},{&quot;id&quot;:&quot;56904&quot;},{&quot;id&quot;:&quot;56905&quot;},{&quot;id&quot;:&quot;56906&quot;},{&quot;id&quot;:&quot;56907&quot;}]},&quot;id&quot;:&quot;56909&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;56908&quot;}},&quot;id&quot;:&quot;56904&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56926&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56926&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56864&quot;}},&quot;id&quot;:&quot;56863&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56949&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56948&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;56854&quot;},{&quot;id&quot;:&quot;56885&quot;}]},&quot;id&quot;:&quot;56935&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56863&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;56866&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;56894&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;56897&quot;},{&quot;id&quot;:&quot;56901&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;56898&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;56933&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;56938&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;56909&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;56886&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;56890&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;56888&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;56892&quot;}},&quot;id&quot;:&quot;56885&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56899&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56872&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56876&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;2c73U+Olmz/sUbgeheuxP39qvHSTGMQ/5dAi2/l+yj/+1HjpJjHIP/hT46WbxMA/AiuHFtnOtz/sUbgeheuxP+xRuB6F66E//Knx0k1ikD/8qfHSTWJgP/yp8dJNYlA//Knx0k1iYD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[13]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56948&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56949&quot;}},&quot;id&quot;:&quot;56916&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56947&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56945&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56945&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56899&quot;}},&quot;id&quot;:&quot;56898&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56864&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56892&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56924&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56868&quot;}},&quot;id&quot;:&quot;56867&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;56947&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;56895&quot;}},&quot;id&quot;:&quot;56894&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56952&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;56898&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;56901&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56874&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;56916&quot;}},&quot;id&quot;:&quot;56920&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56903&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56871&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56895&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56931&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56868&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56924&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56886&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;56951&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;56952&quot;}},&quot;id&quot;:&quot;56930&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;56908&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;56917&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;56863&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;56866&quot;},{&quot;id&quot;:&quot;56870&quot;},{&quot;id&quot;:&quot;56928&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;56867&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;56919&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;56921&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;56878&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;56855&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;56859&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;56857&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;56861&quot;}},&quot;id&quot;:&quot;56854&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56861&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56859&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56907&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;56932&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;56921&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;56871&quot;},{&quot;id&quot;:&quot;56872&quot;},{&quot;id&quot;:&quot;56873&quot;},{&quot;id&quot;:&quot;56874&quot;},{&quot;id&quot;:&quot;56875&quot;},{&quot;id&quot;:&quot;56876&quot;}]},&quot;id&quot;:&quot;56878&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56890&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56875&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56951&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56888&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;56855&quot;,&quot;type&quot;:&quot;DataRange1d&quot;}],&quot;root_ids&quot;:[&quot;56935&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"b6cc1ffc-4cca-453a-8a84-e826edc70f97","root_ids":["56935"],"roots":{"56935":"6de0bc66-6676-4b42-8711-b8ef52baab5f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();