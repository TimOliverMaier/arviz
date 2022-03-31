(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("b22cb27d-c883-47dd-bc4a-9ea1fdc0eb80");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b22cb27d-c883-47dd-bc4a-9ea1fdc0eb80' but no matching script tag was found.")
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
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"b54d869e-7546-4190-a3a4-5ebe6f4b62cf":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20670","type":"AllLabels"},{"attributes":{"children":[{"id":"20678"},{"id":"20676"}]},"id":"20679","type":"Column"},{"attributes":{"coordinates":null,"formatter":{"id":"20669"},"group":null,"major_label_policy":{"id":"20670"},"ticker":{"id":"20632"}},"id":"20631","type":"LinearAxis"},{"attributes":{},"id":"20629","type":"LinearScale"},{"attributes":{"overlay":{"id":"20647"}},"id":"20641","type":"BoxZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20672"},"selection_policy":{"id":"20671"}},"id":"20659","type":"ColumnDataSource"},{"attributes":{},"id":"20636","type":"BasicTicker"},{"attributes":{"axis":{"id":"20635"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20638","type":"Grid"},{"attributes":{},"id":"20669","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"20631"},"coordinates":null,"group":null,"ticker":null},"id":"20634","type":"Grid"},{"attributes":{"tools":[{"id":"20639"},{"id":"20640"},{"id":"20641"},{"id":"20642"},{"id":"20643"},{"id":"20644"},{"id":"20645"},{"id":"20646"}]},"id":"20649","type":"Toolbar"},{"attributes":{},"id":"20640","type":"PanTool"},{"attributes":{},"id":"20666","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"20659"},"glyph":{"id":"20658"},"group":null,"hover_glyph":null,"view":{"id":"20661"}},"id":"20660","type":"GlyphRenderer"},{"attributes":{},"id":"20625","type":"DataRange1d"},{"attributes":{},"id":"20671","type":"UnionRenderers"},{"attributes":{},"id":"20639","type":"ResetTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20658","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20662","type":"Title"},{"attributes":{},"id":"20642","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"20631"}],"center":[{"id":"20634"},{"id":"20638"}],"height":288,"left":[{"id":"20635"}],"output_backend":"webgl","renderers":[{"id":"20660"}],"title":{"id":"20662"},"toolbar":{"id":"20649"},"toolbar_location":null,"width":432,"x_range":{"id":"20623"},"x_scale":{"id":"20627"},"y_range":{"id":"20625"},"y_scale":{"id":"20629"}},"id":"20622","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20644","type":"UndoTool"},{"attributes":{"callback":null},"id":"20646","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"20649"}],"tools":[{"id":"20639"},{"id":"20640"},{"id":"20641"},{"id":"20642"},{"id":"20643"},{"id":"20644"},{"id":"20645"},{"id":"20646"}]},"id":"20677","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"20648"}},"id":"20643","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20647","type":"BoxAnnotation"},{"attributes":{"source":{"id":"20659"}},"id":"20661","type":"CDSView"},{"attributes":{},"id":"20632","type":"BasicTicker"},{"attributes":{},"id":"20623","type":"DataRange1d"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20666"},"group":null,"major_label_policy":{"id":"20667"},"ticker":{"id":"20636"}},"id":"20635","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20648","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"20677"},"toolbar_location":"above"},"id":"20678","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"20622"},0,0]]},"id":"20676","type":"GridBox"},{"attributes":{},"id":"20627","type":"LinearScale"},{"attributes":{},"id":"20672","type":"Selection"},{"attributes":{},"id":"20667","type":"AllLabels"},{"attributes":{},"id":"20645","type":"SaveTool"}],"root_ids":["20679"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"b54d869e-7546-4190-a3a4-5ebe6f4b62cf","root_ids":["20679"],"roots":{"20679":"b22cb27d-c883-47dd-bc4a-9ea1fdc0eb80"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
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
        
        for (let i = 0; i < inline_js.length; i++) {
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