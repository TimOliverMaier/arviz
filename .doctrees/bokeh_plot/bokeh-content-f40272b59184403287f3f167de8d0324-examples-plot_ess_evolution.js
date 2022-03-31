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
    
      
      
    
      const element = document.getElementById("5a676992-4c4d-450c-bf43-1e043d5c0f73");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '5a676992-4c4d-450c-bf43-1e043d5c0f73' but no matching script tag was found.")
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
                    
                  const docs_json = '{"b3ad0a75-cf1e-49b5-acae-c93eec9ac01b":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"21007"},{"id":"21005"}]},"id":"21008","type":"Column"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20979"},{"id":"20973"}]},"id":"20984","type":"LegendItem"},{"attributes":{},"id":"20944","type":"SaveTool"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20983"},{"id":"20984"}],"location":"center_right","orientation":"horizontal"},"id":"20982","type":"Legend"},{"attributes":{"above":[{"id":"20982"}],"below":[{"id":"20930"}],"center":[{"id":"20933"},{"id":"20937"}],"height":500,"left":[{"id":"20934"}],"output_backend":"webgl","renderers":[{"id":"20961"},{"id":"20967"},{"id":"20973"},{"id":"20979"},{"id":"20981"}],"title":{"id":"20985"},"toolbar":{"id":"20948"},"toolbar_location":null,"width":500,"x_range":{"id":"20922"},"x_scale":{"id":"20926"},"y_range":{"id":"20924"},"y_scale":{"id":"20928"}},"id":"20921","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20977","type":"Circle"},{"attributes":{},"id":"20939","type":"PanTool"},{"attributes":{"source":{"id":"20969"}},"id":"20974","type":"CDSView"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20947","type":"PolyAnnotation"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20964","type":"Line"},{"attributes":{},"id":"20922","type":"DataRange1d"},{"attributes":{},"id":"20928","type":"LinearScale"},{"attributes":{},"id":"20999","type":"Selection"},{"attributes":{"tools":[{"id":"20938"},{"id":"20939"},{"id":"20940"},{"id":"20941"},{"id":"20942"},{"id":"20943"},{"id":"20944"},{"id":"20945"}]},"id":"20948","type":"Toolbar"},{"attributes":{},"id":"20998","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"20945","type":"HoverTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21001"},"selection_policy":{"id":"21000"}},"id":"20975","type":"ColumnDataSource"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20961"},{"id":"20967"}]},"id":"20983","type":"LegendItem"},{"attributes":{},"id":"20992","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20972","type":"Line"},{"attributes":{},"id":"20943","type":"UndoTool"},{"attributes":{"source":{"id":"20975"}},"id":"20980","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20969"},"glyph":{"id":"20970"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20972"},"nonselection_glyph":{"id":"20971"},"view":{"id":"20974"}},"id":"20973","type":"GlyphRenderer"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20992"},"group":null,"major_label_policy":{"id":"20993"},"ticker":{"id":"20931"}},"id":"20930","type":"LinearAxis"},{"attributes":{},"id":"20993","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20985","type":"Title"},{"attributes":{},"id":"20990","type":"AllLabels"},{"attributes":{"toolbars":[{"id":"20948"}],"tools":[{"id":"20938"},{"id":"20939"},{"id":"20940"},{"id":"20941"},{"id":"20942"},{"id":"20943"},{"id":"20944"},{"id":"20945"}]},"id":"21006","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"20963"},"glyph":{"id":"20964"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20966"},"nonselection_glyph":{"id":"20965"},"view":{"id":"20968"}},"id":"20967","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"21006"},"toolbar_location":"above"},"id":"21007","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20958","type":"Circle"},{"attributes":{},"id":"20989","type":"BasicTickFormatter"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20989"},"group":null,"major_label_policy":{"id":"20990"},"ticker":{"id":"20935"}},"id":"20934","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20981","type":"Span"},{"attributes":{"overlay":{"id":"20946"}},"id":"20940","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20965","type":"Line"},{"attributes":{"overlay":{"id":"20947"}},"id":"20942","type":"LassoSelectTool"},{"attributes":{"source":{"id":"20957"}},"id":"20962","type":"CDSView"},{"attributes":{"source":{"id":"20963"}},"id":"20968","type":"CDSView"},{"attributes":{},"id":"20996","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20995"},"selection_policy":{"id":"20994"}},"id":"20957","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20966","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20978","type":"Circle"},{"attributes":{},"id":"20997","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20960","type":"Circle"},{"attributes":{"axis":{"id":"20934"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20937","type":"Grid"},{"attributes":{},"id":"20926","type":"LinearScale"},{"attributes":{"children":[[{"id":"20921"},0,0]]},"id":"21005","type":"GridBox"},{"attributes":{},"id":"20935","type":"BasicTicker"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20970","type":"Line"},{"attributes":{},"id":"21000","type":"UnionRenderers"},{"attributes":{},"id":"20941","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20997"},"selection_policy":{"id":"20996"}},"id":"20963","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20999"},"selection_policy":{"id":"20998"}},"id":"20969","type":"ColumnDataSource"},{"attributes":{},"id":"20995","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20976","type":"Circle"},{"attributes":{"axis":{"id":"20930"},"coordinates":null,"group":null,"ticker":null},"id":"20933","type":"Grid"},{"attributes":{},"id":"21001","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20975"},"glyph":{"id":"20976"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20978"},"nonselection_glyph":{"id":"20977"},"view":{"id":"20980"}},"id":"20979","type":"GlyphRenderer"},{"attributes":{},"id":"20924","type":"DataRange1d"},{"attributes":{},"id":"20938","type":"ResetTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20971","type":"Line"},{"attributes":{},"id":"20994","type":"UnionRenderers"},{"attributes":{},"id":"20931","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20946","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"20957"},"glyph":{"id":"20958"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20960"},"nonselection_glyph":{"id":"20959"},"view":{"id":"20962"}},"id":"20961","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20959","type":"Circle"}],"root_ids":["21008"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"b3ad0a75-cf1e-49b5-acae-c93eec9ac01b","root_ids":["21008"],"roots":{"21008":"5a676992-4c4d-450c-bf43-1e043d5c0f73"}}];
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