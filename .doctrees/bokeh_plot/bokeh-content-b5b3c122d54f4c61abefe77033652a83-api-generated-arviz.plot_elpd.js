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
    
      
      
    
      const element = document.getElementById("65c1cdcb-abad-4eb3-b91c-dce16658ae12");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '65c1cdcb-abad-4eb3-b91c-dce16658ae12' but no matching script tag was found.")
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
                    
                  const docs_json = '{"6f8519ef-2637-4371-bd94-0d0c39c1d696":{"defs":[],"roots":{"references":[{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17351","type":"BoxAnnotation"},{"attributes":{},"id":"17371","type":"AllLabels"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17362","type":"Scatter"},{"attributes":{},"id":"17373","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17363"}},"id":"17365","type":"CDSView"},{"attributes":{},"id":"17336","type":"BasicTicker"},{"attributes":{"tools":[{"id":"17343"},{"id":"17344"},{"id":"17345"},{"id":"17346"},{"id":"17347"},{"id":"17348"},{"id":"17349"},{"id":"17350"}]},"id":"17353","type":"Toolbar"},{"attributes":{},"id":"17374","type":"AllLabels"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17376"},"selection_policy":{"id":"17375"}},"id":"17363","type":"ColumnDataSource"},{"attributes":{},"id":"17327","type":"DataRange1d"},{"attributes":{"axis":{"id":"17339"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17342","type":"Grid"},{"attributes":{"axis":{"id":"17335"},"coordinates":null,"group":null,"ticker":null},"id":"17338","type":"Grid"},{"attributes":{},"id":"17340","type":"BasicTicker"},{"attributes":{},"id":"17348","type":"UndoTool"},{"attributes":{},"id":"17349","type":"SaveTool"},{"attributes":{},"id":"17331","type":"LinearScale"},{"attributes":{},"id":"17375","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17351"}},"id":"17345","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"17382"},{"id":"17380"}]},"id":"17383","type":"Column"},{"attributes":{"children":[[{"id":"17326"},0,0]]},"id":"17380","type":"GridBox"},{"attributes":{},"id":"17376","type":"Selection"},{"attributes":{},"id":"17329","type":"DataRange1d"},{"attributes":{},"id":"17343","type":"ResetTool"},{"attributes":{"callback":null},"id":"17350","type":"HoverTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17352","type":"PolyAnnotation"},{"attributes":{},"id":"17370","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"17335"}],"center":[{"id":"17338"},{"id":"17342"}],"height":288,"left":[{"id":"17339"}],"output_backend":"webgl","renderers":[{"id":"17364"}],"title":{"id":"17366"},"toolbar":{"id":"17353"},"toolbar_location":null,"width":432,"x_range":{"id":"17327"},"x_scale":{"id":"17331"},"y_range":{"id":"17329"},"y_scale":{"id":"17333"}},"id":"17326","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"17381"},"toolbar_location":"above"},"id":"17382","type":"ToolbarBox"},{"attributes":{},"id":"17346","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"17352"}},"id":"17347","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"17363"},"glyph":{"id":"17362"},"group":null,"hover_glyph":null,"view":{"id":"17365"}},"id":"17364","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"17373"},"group":null,"major_label_policy":{"id":"17374"},"ticker":{"id":"17336"}},"id":"17335","type":"LinearAxis"},{"attributes":{},"id":"17333","type":"LinearScale"},{"attributes":{},"id":"17344","type":"PanTool"},{"attributes":{"toolbars":[{"id":"17353"}],"tools":[{"id":"17343"},{"id":"17344"},{"id":"17345"},{"id":"17346"},{"id":"17347"},{"id":"17348"},{"id":"17349"},{"id":"17350"}]},"id":"17381","type":"ProxyToolbar"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17370"},"group":null,"major_label_policy":{"id":"17371"},"ticker":{"id":"17340"}},"id":"17339","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17366","type":"Title"}],"root_ids":["17383"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"6f8519ef-2637-4371-bd94-0d0c39c1d696","root_ids":["17383"],"roots":{"17383":"65c1cdcb-abad-4eb3-b91c-dce16658ae12"}}];
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