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
    
      
      
    
      const element = document.getElementById("4de797dd-e068-401e-b57d-d124e73d1665");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4de797dd-e068-401e-b57d-d124e73d1665' but no matching script tag was found.")
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
                    
                  const docs_json = '{"62e146aa-ebea-4667-856e-8b663cb7df20":{"defs":[],"roots":{"references":[{"attributes":{"data":{"xs":[[-32.05285582175997,-29.32225950872766],[-32.23767500713157,-29.383411127464235]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18204"},"selection_policy":{"id":"18203"}},"id":"18177","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18161","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18179","type":"MultiLine"},{"attributes":{},"id":"18199","type":"UnionRenderers"},{"attributes":{},"id":"18144","type":"SaveTool"},{"attributes":{"callback":null},"id":"18145","type":"HoverTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18167","type":"MultiLine"},{"attributes":{"children":[{"id":"18212"},{"id":"18210"}]},"id":"18213","type":"Column"},{"attributes":{"end":0.5,"start":-1.5},"id":"18124","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18174","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18165"},"glyph":{"id":"18166"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18168"},"nonselection_glyph":{"id":"18167"},"view":{"id":"18170"}},"id":"18169","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18206"},"selection_policy":{"id":"18205"}},"id":"18183","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"18183"},"glyph":{"id":"18184"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18186"},"nonselection_glyph":{"id":"18185"},"view":{"id":"18188"}},"id":"18187","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18130"},"coordinates":null,"group":null,"ticker":null},"id":"18133","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18173","type":"Circle"},{"attributes":{"below":[{"id":"18130"}],"center":[{"id":"18133"},{"id":"18137"}],"height":500,"left":[{"id":"18134"}],"output_backend":"webgl","renderers":[{"id":"18163"},{"id":"18169"},{"id":"18175"},{"id":"18181"},{"id":"18187"},{"id":"18189"}],"title":{"id":"18190"},"toolbar":{"id":"18148"},"toolbar_location":null,"width":500,"x_range":{"id":"18122"},"x_scale":{"id":"18126"},"y_range":{"id":"18124"},"y_scale":{"id":"18128"}},"id":"18121","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18205","type":"UnionRenderers"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18157","type":"FixedTicker"},{"attributes":{"data":{"xs":[[-30.89650239461682,-30.724583739978986]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18200"},"selection_policy":{"id":"18199"}},"id":"18165","type":"ColumnDataSource"},{"attributes":{},"id":"18138","type":"ResetTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18171"},"glyph":{"id":"18172"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18174"},"nonselection_glyph":{"id":"18173"},"view":{"id":"18176"}},"id":"18175","type":"GlyphRenderer"},{"attributes":{},"id":"18196","type":"AllLabels"},{"attributes":{},"id":"18139","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"RQsewH/PPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18198"},"selection_policy":{"id":"18197"}},"id":"18159","type":"ColumnDataSource"},{"attributes":{},"id":"18197","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"18159"},"glyph":{"id":"18160"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18162"},"nonselection_glyph":{"id":"18161"},"view":{"id":"18164"}},"id":"18163","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18165"}},"id":"18170","type":"CDSView"},{"attributes":{"overlay":{"id":"18146"}},"id":"18140","type":"BoxZoomTool"},{"attributes":{"source":{"id":"18171"}},"id":"18176","type":"CDSView"},{"attributes":{"source":{"id":"18177"}},"id":"18182","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"18192"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18193"},"ticker":{"id":"18157"}},"id":"18134","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18185","type":"Circle"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18147","type":"PolyAnnotation"},{"attributes":{},"id":"18201","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"18138"},{"id":"18139"},{"id":"18140"},{"id":"18141"},{"id":"18142"},{"id":"18143"},{"id":"18144"},{"id":"18145"}]},"id":"18148","type":"Toolbar"},{"attributes":{},"id":"18202","type":"Selection"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18160","type":"Scatter"},{"attributes":{"children":[[{"id":"18121"},0,0]]},"id":"18210","type":"GridBox"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18146","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"18147"}},"id":"18142","type":"LassoSelectTool"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18168","type":"MultiLine"},{"attributes":{"source":{"id":"18159"}},"id":"18164","type":"CDSView"},{"attributes":{},"id":"18128","type":"LinearScale"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18178","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"GFZ2xwOwPsBFCx7Af88+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18202"},"selection_policy":{"id":"18201"}},"id":"18171","type":"ColumnDataSource"},{"attributes":{},"id":"18126","type":"LinearScale"},{"attributes":{},"id":"18141","type":"WheelZoomTool"},{"attributes":{"toolbar":{"id":"18211"},"toolbar_location":"above"},"id":"18212","type":"ToolbarBox"},{"attributes":{},"id":"18198","type":"Selection"},{"attributes":{},"id":"18195","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"18148"}],"tools":[{"id":"18138"},{"id":"18139"},{"id":"18140"},{"id":"18141"},{"id":"18142"},{"id":"18143"},{"id":"18144"},{"id":"18145"}]},"id":"18211","type":"ProxyToolbar"},{"attributes":{"source":{"id":"18183"}},"id":"18188","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18172","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18186","type":"Circle"},{"attributes":{},"id":"18204","type":"Selection"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18195"},"group":null,"major_label_policy":{"id":"18196"},"ticker":{"id":"18131"}},"id":"18130","type":"LinearAxis"},{"attributes":{},"id":"18206","type":"Selection"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687557665243816},"id":"18189","type":"Span"},{"attributes":{},"id":"18203","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null},"id":"18190","type":"Title"},{"attributes":{},"id":"18131","type":"BasicTicker"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18166","type":"MultiLine"},{"attributes":{"axis":{"id":"18134"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18137","type":"Grid"},{"attributes":{},"id":"18200","type":"Selection"},{"attributes":{},"id":"18143","type":"UndoTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18184","type":"Circle"},{"attributes":{},"id":"18122","type":"DataRange1d"},{"attributes":{},"id":"18192","type":"BasicTickFormatter"},{"attributes":{},"id":"18193","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"18177"},"glyph":{"id":"18178"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18180"},"nonselection_glyph":{"id":"18179"},"view":{"id":"18182"}},"id":"18181","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18162","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18180","type":"MultiLine"}],"root_ids":["18213"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"62e146aa-ebea-4667-856e-8b663cb7df20","root_ids":["18213"],"roots":{"18213":"4de797dd-e068-401e-b57d-d124e73d1665"}}];
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