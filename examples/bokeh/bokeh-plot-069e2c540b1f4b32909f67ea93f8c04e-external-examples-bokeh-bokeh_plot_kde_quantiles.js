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
      };var element = document.getElementById("eac7d644-e18c-4868-824e-d197b4b8d05f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'eac7d644-e18c-4868-824e-d197b4b8d05f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;8686cc30-0a28-4d6d-b971-061bbdcb9508&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59461&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59395&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59418&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;59419&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;59409&quot;},{&quot;id&quot;:&quot;59410&quot;},{&quot;id&quot;:&quot;59411&quot;},{&quot;id&quot;:&quot;59412&quot;},{&quot;id&quot;:&quot;59413&quot;},{&quot;id&quot;:&quot;59414&quot;},{&quot;id&quot;:&quot;59415&quot;},{&quot;id&quot;:&quot;59416&quot;}]},&quot;id&quot;:&quot;59466&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59401&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59404&quot;},{&quot;id&quot;:&quot;59408&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59405&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59431&quot;},{&quot;id&quot;:&quot;59436&quot;},{&quot;id&quot;:&quot;59441&quot;},{&quot;id&quot;:&quot;59446&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59448&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59419&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;59393&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59397&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59395&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59399&quot;}},&quot;id&quot;:&quot;59392&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59457&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;59416&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59409&quot;},{&quot;id&quot;:&quot;59410&quot;},{&quot;id&quot;:&quot;59411&quot;},{&quot;id&quot;:&quot;59412&quot;},{&quot;id&quot;:&quot;59413&quot;},{&quot;id&quot;:&quot;59414&quot;},{&quot;id&quot;:&quot;59415&quot;},{&quot;id&quot;:&quot;59416&quot;}]},&quot;id&quot;:&quot;59419&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59412&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59435&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59458&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59415&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59443&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59444&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59445&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59447&quot;}},&quot;id&quot;:&quot;59446&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;ZDBwXIJBwj8xe4IfO7bCP//FlOLzKsM/zRCnpayfwz+aW7loZRTEP2imyyseicQ/NfHd7tb9xD8DPPCxj3LFP9CGAnVI58U/ntEUOAFcxj9rHCf7udDGPzlnOb5yRcc/BrJLgSu6xz/U/F1E5C7IP6JHcAedo8g/b5KCylUYyT893ZSNDo3JPwoop1DHAco/2HK5E4B2yj+lvcvWOOvKP3MI3pnxX8s/QFPwXKrUyz8OngIgY0nMP9voFOMbvsw/qTMnptQyzT93fjlpjafNP0TJSyxGHM4/EhRe7/6Qzj/fXnCytwXPP62pgnVwes8/evSUOCnvzz+kn9P98DHQPwvFXF9NbNA/C8VcX01s0D8LxVxfTWzQP6Sf0/3wMdA/evSUOCnvzz+tqYJ1cHrPP99ecLK3Bc8/EhRe7/6Qzj9EyUssRhzOP3d+OWmNp80/qTMnptQyzT/b6BTjG77MPw6eAiBjScw/QFPwXKrUyz9zCN6Z8V/LP6W9y9Y468o/2HK5E4B2yj8KKKdQxwHKPz3dlI0Ojck/b5KCylUYyT+iR3AHnaPIP9T8XUTkLsg/BrJLgSu6xz85Zzm+ckXHP2scJ/u50MY/ntEUOAFcxj/QhgJ1SOfFPwM88LGPcsU/NfHd7tb9xD9opssrHonEP5pbuWhlFMQ/zRCnpayfwz//xZTi8yrDPzF7gh87tsI/ZDBwXIJBwj9kMHBcgkHCPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[68]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqFr7Imiz+z+oWvsiaLP7P10rF4BKE/w/En28o5Fy/D+FrYOl39T8Px0oA9SuN/0/JiKBvxGa/T8n4Qdf9f79P0HrgKYcaP4/YrfFtnLU/j9ZziGk40P/P4G9ppQYtv8/UurKR3YVAECluU3wuVEAQIj+fCpqjwBAbwXxNuDNAEDAa8xLpgsBQJwoVWV4SQFAXA1rmTuHAUBNxrKtOsUBQMXnwDG7AgJAgft5emk8AkDvUne/b3QCQGGnclH4qgJA+uGa/M7fAkBTWykO3BIDQK7srMYaQwNAz6RscktyA0AbHJjF1aQDQO6pArp81gNAebmBNEQHBEDI+pbWDzkEQNoaNp9ZbgRAd4ykAo6kBEAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[68]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59458&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59459&quot;}},&quot;id&quot;:&quot;59438&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59451&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;59466&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;59467&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59443&quot;}},&quot;id&quot;:&quot;59447&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59456&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59444&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59453&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59448&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59401&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59404&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59438&quot;}},&quot;id&quot;:&quot;59442&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59453&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59402&quot;}},&quot;id&quot;:&quot;59401&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59445&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59467&quot;},{&quot;id&quot;:&quot;59465&quot;}]},&quot;id&quot;:&quot;59468&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59438&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59439&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59440&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59442&quot;}},&quot;id&quot;:&quot;59441&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59405&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59408&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[256]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABolC83+au4P2iULzf5q7g/cbsuJMyMuD+Y44hkPk+4P3m/B2XV9Lc/HO66m6t/tz+m11cAQfK2P+8HO2WpSbY/231/1B2etT/W8VGMJt20PyOAvMkvD7Q/Mywf5iE/sz9Z5e8+ylyyPzzW3ztefbE/kDSIDoyjsD81vO3dMH+vPzgNkQQFz60/orKM4ws+rD94ieF2MsuqP0HYBy5Zdqk/mQl79+ZUqD/+oA/F02unP3lfNpfUxKY/xmW3qr1tpj+Ka066Ym2mP0LhDxJW2aY/Z9XssfeOpz+SgFJXdK6oP9+1L+2WOqo/kdT5WyVXrD9DVhmJTqyuPxXlu1E3vLA/L5CV+gVEsj94Jpw5Zv+zPwJkc2Ub5rU/aPMixQzxtz9XIDueWRm6P3UlVnL7g7w/Zd+5wtwhvz8vgu5t9PDAP+3BOcBHeMI/qtS4gqwjxD/fetQWqPLFPzGs5CFa3sc/IS4LOc3oyT9ZLhnwSRrMPx0JjQsgaM4/p3qLhWtm0D/1c9Ank57RP98PHEal3dI///6VxjoY1D/XbQ3XGkzVP5QcVbOHeNY/IJ9gooaS1z9h7ZRiJpnYP2cqLDt9idk/CB8Doo9h2j9JToEwTSfbP9JijpMm1ds/hRI0EyNp3D9RmzZuVubcP3Uc1L9fWN0/qWlB8BC83T8qhCl6LA/eP0WNfy60Wt4/Di+OCIih3j/dpyzdwuHePzR/9bE5H98/ScuxG6pj3z9UXeQwRrXfP2JgcczICOA/aw6w+xo64D9RTf4FR3LgP3130DCAteA/ZhzjShcA4T/ZfKpG7FjhP49RJU9YwOE/Kbytrmkx4j/R4zPC/a7iP8uAuaK7POM/xFV5DI/X4z+K31lhuH7kPx9xyKpUMOU/PHQ0+1Lp5T/5jKAsianmPxCcdMcxb+c/oyk4/4sx6D/7xKUmlPDoP3YXwrZIruk/aZbWiIFf6j9/qFosCgLrPwWpujCflus/9Rse1PEa7D9EJAIpm43sP8svCgc47+w/NWnKu4BB7T/yZ6UT6oTtP9Q365vsve0/+hM6eBPu7T9AVGGjSB7uP47G3BAEVO4/g9+8jEaO7j9i9crbadLuPxwiKr0xKu8/7xB+IbeW7z8j0jll/QzwP0lvOR1vWvA/oIGOT1S08D/JsKm6dx3xP2VNEGJqlPE/o1inHzcW8j8yz30X/KHyPyodH/pNN/M/7d7LeUTV8z+1wG/so3X0P07TfVi6F/U/XZcfVc279T+QGv2pWFv2P185dHlg9/Y/wwfdmA2N9z/BkITR2h74P3WTnB3jp/g/aRwt8BUo+T+5ijK9S6X5P+RGeX3CF/o/38XujfGD+j9buekYXu76P3wZqNp/Ufs/AAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[256]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59460&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59461&quot;}},&quot;id&quot;:&quot;59443&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59406&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59454&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59393&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59428&quot;}},&quot;id&quot;:&quot;59432&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59459&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;59392&quot;},0,0]]},&quot;id&quot;:&quot;59465&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59439&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59410&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59417&quot;}},&quot;id&quot;:&quot;59411&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;xhYBUoaPIj/PxLIpKVduPxm8Iveswn0/5Qq2rOIshj++t9rdbniNP0yyf4f9YZI/uAgSoMMHlj8lX6S4ia2ZP5G1NtFPU50//4Xk9Ip8oD81sS0Bbk+iP2vcdg1RIqQ/oQfAGTT1pT/XMgkmF8inPw5eUjL6mqk/RImbPt1tqz96tORKwECtP3q05ErAQK0/erTkSsBArT9EiZs+3W2rPw5eUjL6mqk/1zIJJhfIpz+hB8AZNPWlP2vcdg1RIqQ/NbEtAW5Poj//heT0inygP5G1NtFPU50/JV+kuImtmT+4CBKgwweWP0yyf4f9YZI/vrfa3W54jT/lCras4iyGPxm8Iveswn0/z8SyKSlXbj/GFgFSho8iP8YWAVKGjyI/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[36]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEH/ggQWTA5AQf+CBBZMDkD/RBOsacsOQM+RvLnsQQ9AcxkKpCOwD0AUO+PynQkQQMM1fiqvNBBAW45nRQlZEECPzYFBYncQQNs0PI/bjxBAsrwnm1CjEECVRbX57LAQQC7dPZmJuRBACr4Mqf++EEBaVRB1esQQQBHvpeUgxhBAOioHz6jGEEC53D9PY8cQQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[36]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59454&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59455&quot;}},&quot;id&quot;:&quot;59428&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59455&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59433&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59434&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59435&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59437&quot;}},&quot;id&quot;:&quot;59436&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59397&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59434&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59451&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59406&quot;}},&quot;id&quot;:&quot;59405&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59399&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59417&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59418&quot;}},&quot;id&quot;:&quot;59413&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59428&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59429&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59430&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59432&quot;}},&quot;id&quot;:&quot;59431&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59460&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59433&quot;}},&quot;id&quot;:&quot;59437&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59440&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59414&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59430&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59409&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59429&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59402&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;sN8tV6MTrz9zhbsxQ3OwPw4b4Le0XLE/qbAEPiZGsj9ERinEly+zP9/bTUoJGbQ/enFy0HoCtT8VB5dW7Ou1P7Ccu9xd1bY/SzLgYs++tz/nxwTpQKi4P4JdKW+ykbk/HfNN9SN7uj+4iHJ7lWS7P1MelwEHTrw/7rO7h3g3vT+JSeAN6iC+PyTfBJRbCr8/v3QpGs3zvz8uBSdQn27AP/tPORNY48A/yZpL1hBYwT+W5V2ZyczBP5blXZnJzME/luVdmcnMwT/JmkvWEFjBP/tPORNY48A/LgUnUJ9uwD+/dCkazfO/PyTfBJRbCr8/iUngDeogvj/us7uHeDe9P1MelwEHTrw/uIhye5Vkuz8d8031I3u6P4JdKW+ykbk/58cE6UCouD9LMuBiz763P7Ccu9xd1bY/FQeXVuzrtT96cXLQegK1P9/bTUoJGbQ/REYpxJcvsz+psAQ+JkayPw4b4Le0XLE/c4W7MUNzsD+w3y1XoxOvP7DfLVejE68/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[48]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcQaB2/3ARARxBoHb/cBEA9bR7NUxUFQOA7x4bdUQVAr3/5JiORBUD8bRCP0NIFQBmy2wcAGAZAdVdtc4hgBkBdW8mierAGQIEhi9TcAgdAxeM333BdB0BY5kst/roHQKdPgdrWHQhAwEGnVP6KCEDDE3Jk9P0IQFeLAniIdglAIoAQjSD2CUCNsFJFf3oKQBUhF/WaAwtAmNEO8D2RC0AoSCz2NR4MQDkSWRovqwxAiOWlN506DUDncEWxmsQNQAAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[48]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59456&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59457&quot;}},&quot;id&quot;:&quot;59433&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;}],&quot;root_ids&quot;:[&quot;59468&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"8686cc30-0a28-4d6d-b971-061bbdcb9508","root_ids":["59468"],"roots":{"59468":"eac7d644-e18c-4868-824e-d197b4b8d05f"}}];
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