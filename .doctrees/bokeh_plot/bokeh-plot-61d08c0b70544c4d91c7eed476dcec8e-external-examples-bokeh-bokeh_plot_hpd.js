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
      };var element = document.getElementById("b10331ab-971b-4086-ba82-8a09409bedfa");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b10331ab-971b-4086-ba82-8a09409bedfa' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;9413ad71-0b22-4180-9fb2-1e710a5345af&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58356&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58368&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58374&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;58377&quot;}},&quot;id&quot;:&quot;58372&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58404&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;58392&quot;}},&quot;id&quot;:&quot;58396&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;58402&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;58361&quot;}},&quot;id&quot;:&quot;58360&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;58392&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;58393&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;58394&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;58396&quot;}},&quot;id&quot;:&quot;58395&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;58400&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;58365&quot;}},&quot;id&quot;:&quot;58364&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;58403&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;58404&quot;}},&quot;id&quot;:&quot;58387&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58352&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58371&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58393&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58358&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58402&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;58397&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58354&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58400&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;58377&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;29ItoiPBAsCjaodtGB3/v4JVGK1VMP6/jYkH+MCY/b87GOgxDBD5v26Y3NDuC/m/SgRHHmhb+L9U/6YE0Vz3v/zntGLIQPe/Z6/nWMXy9b9uQKWhMOT0vyHs018HS/S/z8m16HY99L+P9LPYQHLzv4g0GkmySvK/v0lX4JYe8r84RF/1RSnxvw4pJGUMVPC/3aMarxkd8L9pxM63D87tvwhaclOuQey/BFFwys8l7L+7+8n4yQDrv4tfzlieueO/c/XWeFKb479EzmnPgq/hv0rmBFblQuG/I3FAY48n4L8yXvGjGfnfv1SDkqll/96/DtNvPd2g3r9qj9WURynev+aDmdKv0ty/MabJI+JU2r/KwHgE7BLavwWycWxIfdm/N/fS+zJx2L8U5g4hxp3XvymG/Jp4BtS/WoLqtO0H0b/cZersiCnQv8DhsrNKENC/85s+CoikyL9jyJKryzfGv3ZKSL96VMW/bxholpd8wr+9+I94xsXAvw8D0IblncC/ujYlIrHFv7/n7bnCY36+vzjG1hcQR7W/E9WOvMEVqL/qSSVjsVOhvzQ1W0e1t1U/8oXy3Zkckz/9BlJ5lsWvP8PQRSh91LA/5AgoQYZLsz+p6/NMKpO2PyxN6QHPKcw/zwOnS6iczD9d7gpKUgrOPxjqW929etA/QKEbqm+/0D9/SrK+CTXTP3Ff5I4kitk/Gl/hoLrH2T/dM/OXy8zbP3rHpFm879s/q7rjSFVg3T8dk5cRTJPePzsMM1PwqeA/bXNyG56t4D+0TeRC9hzhP0WZq8o4CuM//bEvM4Av4z9ivMs4gxblP4ivEe++c+c/FuV+h+mF5z/EtuB3N4XpP48gU4lWQ+w/6Ndrzl2Q7D8fevnXVJvvPwnYlSUOGfA/liKuKLk48D+aWiI/4HrxP38j6kQZMvM/o8mZDwZ08z9FbpiziAj0PyYAtfbQK/g/ddaA/iI4+D95YGpj5jb6P6lvTaYr4Ps/292pTPfW/D+naaQB19/8P+zx4VszB/0/H5aFUplrAECG6tfGaagBQE8elChbIQZA3fQu6NYhCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;Slqku7h96j+uSjzJc3HwPz/VcynV5/A/Ojv8g58z8T/i8wvn+XfzP8mzkZcIevM/233c8EvS8z9WgKx9l1H0PwKMpc6bX/Q/TCiMU50G9T/JXy2v5431P/AJFlB82vU/GBuli0Th9T+4BaaT30b2P7zlctum2vY/IFvUj7Tw9j/kXVAFXWv3P3nrbc351fc/Eq5yKHPx9z/mTgwSfIz4P35pI2uU7/g/v+tjDYz2+D8Rgc2BzT/5Px1ozGmYEfs/o0LKYSsZ+z9vjCVMH5T7P27GfqpGr/s/t+MvJxz2+z861IHL3AD8P5avzUoTIPw/ngVSWOQr/D8TTmUN1zr8P4PPrAWqZfw/OsuGu2O1/D/n53B/or38P7/JcfJW0Pw/GaGFoNnx/D8+I947Rwz9PztvoOwwf/0/ta9iSQLf/T9Es2Lizvr9P8ijian2/f0/QRZcf7d1/j9600ZFg5z+P1l7C1S4qv4/eX6ZhjbY/j90AHeYo/P+P8//kqch9v4/StbudtIB/z+RMOrhDAz/P85JQX/HVf8/rMQN+aif/z/YanM6sbr/P7N1VHtbAQBAhvLdmRwTAEAOpPIsiz8AQEMXofRRQwBAJKAEGS5NAECvzzOpTFoAQGlKD3hO4QBAHjhdQuXkAEBzV1CSUvAAQKK+1d2rBwFAFLqh+vYLAUCoJOubUDMBQPdF7kiimAFA8hUOqnucAUA+M3+5zLwBQHhMmsX7vgFAqzuOVAXWAUAyeRnBNOkBQIdhZgo+FQJAbk5uw7MVAkC2iVzIniMCQClzVRlHYQJAQPZlBvBlAkCMdxln0KICQPE14t137gJAo9zvML3wAkDYFvzupjADQBJkKtFqiANA/XrNuQuSA0BEL/+aavMDQAJ2ZYlDBgRApogrSi4OBECmlsgPuF4EQOCIOlGGzARAaXLmgwHdBECRG+YsIgIFQApArT30CgZAnTWgvwgOBkAemNqYuY0GQOpbk+kK+AZAd3cq0701B0BqGmnA9TcHQHt8+NbMQQdAEMtCqcw1CEBD9WvjNNQIQCgPSpStEAtAbnoXdOuQDEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;58405&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;58406&quot;}},&quot;id&quot;:&quot;58392&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;58360&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;58363&quot;},{&quot;id&quot;:&quot;58367&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;58364&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;58390&quot;},{&quot;id&quot;:&quot;58395&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;58397&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;58378&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;58352&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;58356&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;58354&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;58358&quot;}},&quot;id&quot;:&quot;58351&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58389&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;58376&quot;}},&quot;id&quot;:&quot;58370&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58361&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58403&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58405&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;58360&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;58363&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58394&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58373&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;58387&quot;}},&quot;id&quot;:&quot;58391&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;58368&quot;},{&quot;id&quot;:&quot;58369&quot;},{&quot;id&quot;:&quot;58370&quot;},{&quot;id&quot;:&quot;58371&quot;},{&quot;id&quot;:&quot;58372&quot;},{&quot;id&quot;:&quot;58373&quot;},{&quot;id&quot;:&quot;58374&quot;},{&quot;id&quot;:&quot;58375&quot;}]},&quot;id&quot;:&quot;58378&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;58364&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;58367&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;58387&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;58388&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;58389&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;58391&quot;}},&quot;id&quot;:&quot;58390&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58365&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58406&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;58369&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;red&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;58388&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;58376&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;58375&quot;,&quot;type&quot;:&quot;HoverTool&quot;}],&quot;root_ids&quot;:[&quot;58351&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"9413ad71-0b22-4180-9fb2-1e710a5345af","root_ids":["58351"],"roots":{"58351":"b10331ab-971b-4086-ba82-8a09409bedfa"}}];
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