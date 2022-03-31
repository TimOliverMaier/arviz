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
    
      
      
    
      const element = document.getElementById("0ddda2c6-34da-43df-87d6-ccb59fba1280");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0ddda2c6-34da-43df-87d6-ccb59fba1280' but no matching script tag was found.")
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
                    
                  const docs_json = '{"0d8f55db-485e-4e83-bbcc-66687daed5c0":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"41789","type":"HoverTool"},{"attributes":{},"id":"41788","type":"SaveTool"},{"attributes":{},"id":"41787","type":"UndoTool"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41883"},"group":null,"major_label_policy":{"id":"41884"},"ticker":{"id":"41815"}},"id":"41814","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41790","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"41774"}],"center":[{"id":"41777"},{"id":"41781"}],"height":500,"left":[{"id":"41778"}],"output_backend":"webgl","renderers":[{"id":"41841"},{"id":"41843"},{"id":"41844"},{"id":"41845"},{"id":"41848"}],"title":{"id":"41850"},"toolbar":{"id":"41792"},"toolbar_location":null,"width":500,"x_range":{"id":"41766"},"x_scale":{"id":"41770"},"y_range":{"id":"41768"},"y_scale":{"id":"41772"}},"id":"41765","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41826","type":"BoxAnnotation"},{"attributes":{"source":{"id":"41847"}},"id":"41849","type":"CDSView"},{"attributes":{},"id":"41869","type":"BasicTickFormatter"},{"attributes":{},"id":"41870","type":"AllLabels"},{"attributes":{},"id":"41872","type":"BasicTickFormatter"},{"attributes":{},"id":"41890","type":"UnionRenderers"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41791","type":"PolyAnnotation"},{"attributes":{},"id":"41891","type":"Selection"},{"attributes":{},"id":"41873","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41837"},"glyph":{"id":"41838"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41840"},"nonselection_glyph":{"id":"41839"},"view":{"id":"41842"}},"id":"41841","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41875"},"selection_policy":{"id":"41874"}},"id":"41837","type":"ColumnDataSource"},{"attributes":{},"id":"41806","type":"LinearScale"},{"attributes":{"tools":[{"id":"41818"},{"id":"41819"},{"id":"41820"},{"id":"41821"},{"id":"41822"},{"id":"41823"},{"id":"41824"},{"id":"41825"}]},"id":"41828","type":"Toolbar"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41877"},"selection_policy":{"id":"41876"}},"id":"41847","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41844","type":"Span"},{"attributes":{"callback":null},"id":"41825","type":"HoverTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41827","type":"PolyAnnotation"},{"attributes":{},"id":"41874","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41858","type":"Span"},{"attributes":{"end":1,"start":-0.05},"id":"41804","type":"DataRange1d"},{"attributes":{},"id":"41875","type":"Selection"},{"attributes":{"tools":[{"id":"41782"},{"id":"41783"},{"id":"41784"},{"id":"41785"},{"id":"41786"},{"id":"41787"},{"id":"41788"},{"id":"41789"}]},"id":"41792","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41889"},"selection_policy":{"id":"41888"}},"id":"41852","type":"ColumnDataSource"},{"attributes":{"source":{"id":"41837"}},"id":"41842","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41840","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41839","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41845","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41846","type":"Scatter"},{"attributes":{"source":{"id":"41862"}},"id":"41864","type":"CDSView"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41886"},"group":null,"major_label_policy":{"id":"41887"},"ticker":{"id":"41811"}},"id":"41810","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"41847"},"glyph":{"id":"41846"},"group":null,"hover_glyph":null,"view":{"id":"41849"}},"id":"41848","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41850","type":"Title"},{"attributes":{"toolbars":[{"id":"41792"},{"id":"41828"}],"tools":[{"id":"41782"},{"id":"41783"},{"id":"41784"},{"id":"41785"},{"id":"41786"},{"id":"41787"},{"id":"41788"},{"id":"41789"},{"id":"41818"},{"id":"41819"},{"id":"41820"},{"id":"41821"},{"id":"41822"},{"id":"41823"},{"id":"41824"},{"id":"41825"}]},"id":"41896","type":"ProxyToolbar"},{"attributes":{},"id":"41766","type":"DataRange1d"},{"attributes":{},"id":"41808","type":"LinearScale"},{"attributes":{},"id":"41811","type":"BasicTicker"},{"attributes":{"axis":{"id":"41810"},"coordinates":null,"group":null,"ticker":null},"id":"41813","type":"Grid"},{"attributes":{},"id":"41876","type":"UnionRenderers"},{"attributes":{},"id":"41770","type":"LinearScale"},{"attributes":{},"id":"41877","type":"Selection"},{"attributes":{"toolbar":{"id":"41896"},"toolbar_location":"above"},"id":"41897","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"41765"},0,0],[{"id":"41801"},0,1]]},"id":"41895","type":"GridBox"},{"attributes":{"end":1,"start":-0.05},"id":"41768","type":"DataRange1d"},{"attributes":{"axis":{"id":"41814"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41817","type":"Grid"},{"attributes":{},"id":"41883","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41843","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41865","type":"Title"},{"attributes":{},"id":"41884","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41862"},"glyph":{"id":"41861"},"group":null,"hover_glyph":null,"view":{"id":"41864"}},"id":"41863","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"41810"}],"center":[{"id":"41813"},{"id":"41817"}],"height":500,"left":[{"id":"41814"}],"output_backend":"webgl","renderers":[{"id":"41856"},{"id":"41858"},{"id":"41859"},{"id":"41860"},{"id":"41863"}],"title":{"id":"41865"},"toolbar":{"id":"41828"},"toolbar_location":null,"width":500,"x_range":{"id":"41802"},"x_scale":{"id":"41806"},"y_range":{"id":"41804"},"y_scale":{"id":"41808"}},"id":"41801","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41785","type":"WheelZoomTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41861","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41838","type":"Circle"},{"attributes":{},"id":"41886","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41860","type":"Span"},{"attributes":{"overlay":{"id":"41790"}},"id":"41784","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41854","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41891"},"selection_policy":{"id":"41890"}},"id":"41862","type":"ColumnDataSource"},{"attributes":{},"id":"41782","type":"ResetTool"},{"attributes":{},"id":"41772","type":"LinearScale"},{"attributes":{},"id":"41887","type":"AllLabels"},{"attributes":{},"id":"41823","type":"UndoTool"},{"attributes":{"overlay":{"id":"41827"}},"id":"41822","type":"LassoSelectTool"},{"attributes":{},"id":"41775","type":"BasicTicker"},{"attributes":{"children":[{"id":"41897"},{"id":"41895"}]},"id":"41898","type":"Column"},{"attributes":{},"id":"41821","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41853","type":"Circle"},{"attributes":{},"id":"41824","type":"SaveTool"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41872"},"group":null,"major_label_policy":{"id":"41873"},"ticker":{"id":"41775"}},"id":"41774","type":"LinearAxis"},{"attributes":{},"id":"41818","type":"ResetTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41859","type":"Span"},{"attributes":{},"id":"41819","type":"PanTool"},{"attributes":{"overlay":{"id":"41791"}},"id":"41786","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41852"},"glyph":{"id":"41853"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41855"},"nonselection_glyph":{"id":"41854"},"view":{"id":"41857"}},"id":"41856","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"41774"},"coordinates":null,"group":null,"ticker":null},"id":"41777","type":"Grid"},{"attributes":{"source":{"id":"41852"}},"id":"41857","type":"CDSView"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41869"},"group":null,"major_label_policy":{"id":"41870"},"ticker":{"id":"41779"}},"id":"41778","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41855","type":"Circle"},{"attributes":{},"id":"41779","type":"BasicTicker"},{"attributes":{"overlay":{"id":"41826"}},"id":"41820","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"41778"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41781","type":"Grid"},{"attributes":{},"id":"41888","type":"UnionRenderers"},{"attributes":{},"id":"41802","type":"DataRange1d"},{"attributes":{},"id":"41889","type":"Selection"},{"attributes":{},"id":"41815","type":"BasicTicker"},{"attributes":{},"id":"41783","type":"PanTool"}],"root_ids":["41898"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"0d8f55db-485e-4e83-bbcc-66687daed5c0","root_ids":["41898"],"roots":{"41898":"0ddda2c6-34da-43df-87d6-ccb59fba1280"}}];
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