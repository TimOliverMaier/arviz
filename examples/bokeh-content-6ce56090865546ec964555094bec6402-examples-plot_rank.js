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
    
      
      
    
      const element = document.getElementById("63f9159b-be76-4e55-aeb8-1fe936a3b71d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '63f9159b-be76-4e55-aeb8-1fe936a3b71d' but no matching script tag was found.")
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
                    
                  const docs_json = '{"a508e3c4-c2b4-43f6-965d-0608d67f3627":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"48361","type":"HoverTool"},{"attributes":{},"id":"48438","type":"BasicTickFormatter"},{"attributes":{},"id":"48439","type":"AllLabels"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48455"},"group":null,"major_label_policy":{"id":"48456"},"ticker":{"id":"48433"}},"id":"48350","type":"LinearAxis"},{"attributes":{},"id":"48441","type":"BasicTickFormatter"},{"attributes":{},"id":"48326","type":"SaveTool"},{"attributes":{"axis":{"id":"48350"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48353","type":"Grid"},{"attributes":{},"id":"48442","type":"AllLabels"},{"attributes":{},"id":"48321","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48435","type":"Title"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48444"},"selection_policy":{"id":"48443"}},"id":"48373","type":"ColumnDataSource"},{"attributes":{},"id":"48449","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"48362"}},"id":"48356","type":"BoxZoomTool"},{"attributes":{},"id":"48355","type":"PanTool"},{"attributes":{},"id":"48450","type":"Selection"},{"attributes":{},"id":"48354","type":"ResetTool"},{"attributes":{},"id":"48360","type":"SaveTool"},{"attributes":{},"id":"48357","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48363"}},"id":"48358","type":"LassoSelectTool"},{"attributes":{},"id":"48359","type":"UndoTool"},{"attributes":{"axis":{"id":"48316"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48319","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"48373"},"glyph":{"id":"48374"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48376"},"nonselection_glyph":{"id":"48375"},"view":{"id":"48378"}},"id":"48377","type":"GlyphRenderer"},{"attributes":{},"id":"48325","type":"UndoTool"},{"attributes":{"overlay":{"id":"48329"}},"id":"48324","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48362","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48374","type":"VBar"},{"attributes":{"source":{"id":"48380"}},"id":"48385","type":"CDSView"},{"attributes":{"source":{"id":"48373"}},"id":"48378","type":"CDSView"},{"attributes":{},"id":"48455","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"48327","type":"HoverTool"},{"attributes":{},"id":"48456","type":"AllLabels"},{"attributes":{},"id":"48443","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"48328"}},"id":"48322","type":"BoxZoomTool"},{"attributes":{},"id":"48458","type":"BasicTickFormatter"},{"attributes":{},"id":"48444","type":"Selection"},{"attributes":{},"id":"48320","type":"ResetTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48383","type":"VBar"},{"attributes":{"below":[{"id":"48346"}],"center":[{"id":"48349"},{"id":"48353"},{"id":"48411"},{"id":"48418"},{"id":"48425"},{"id":"48432"}],"height":331,"left":[{"id":"48350"}],"output_backend":"webgl","renderers":[{"id":"48409"},{"id":"48416"},{"id":"48423"},{"id":"48430"}],"title":{"id":"48435"},"toolbar":{"id":"48364"},"toolbar_location":null,"width":496,"x_range":{"id":"48304"},"x_scale":{"id":"48342"},"y_range":{"id":"48306"},"y_scale":{"id":"48344"}},"id":"48339","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48459","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48375","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48379","type":"Span"},{"attributes":{"children":[[{"id":"48303"},0,0],[{"id":"48339"},0,1]]},"id":"48471","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48448"},"selection_policy":{"id":"48447"}},"id":"48387","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48446"},"selection_policy":{"id":"48445"}},"id":"48380","type":"ColumnDataSource"},{"attributes":{},"id":"48323","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48386","type":"Span"},{"attributes":{"tools":[{"id":"48320"},{"id":"48321"},{"id":"48322"},{"id":"48323"},{"id":"48324"},{"id":"48325"},{"id":"48326"},{"id":"48327"}]},"id":"48330","type":"Toolbar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48382","type":"VBar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48328","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"48380"},"glyph":{"id":"48381"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48383"},"nonselection_glyph":{"id":"48382"},"view":{"id":"48385"}},"id":"48384","type":"GlyphRenderer"},{"attributes":{},"id":"48445","type":"UnionRenderers"},{"attributes":{},"id":"48446","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48458"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48459"},"ticker":{"id":"48347"}},"id":"48346","type":"LinearAxis"},{"attributes":{"tools":[{"id":"48354"},{"id":"48355"},{"id":"48356"},{"id":"48357"},{"id":"48358"},{"id":"48359"},{"id":"48360"},{"id":"48361"}]},"id":"48364","type":"Toolbar"},{"attributes":{},"id":"48460","type":"UnionRenderers"},{"attributes":{"axis":{"id":"48346"},"coordinates":null,"group":null,"ticker":null},"id":"48349","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48381","type":"VBar"},{"attributes":{},"id":"48461","type":"Selection"},{"attributes":{},"id":"48344","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48363","type":"PolyAnnotation"},{"attributes":{},"id":"48347","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48329","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48388","type":"VBar"},{"attributes":{},"id":"48447","type":"UnionRenderers"},{"attributes":{},"id":"48448","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48376","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48389","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48390","type":"VBar"},{"attributes":{},"id":"48462","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48397","type":"VBar"},{"attributes":{},"id":"48463","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48395","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48393","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48387"},"glyph":{"id":"48388"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48390"},"nonselection_glyph":{"id":"48389"},"view":{"id":"48392"}},"id":"48391","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"48394"},"glyph":{"id":"48395"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48397"},"nonselection_glyph":{"id":"48396"},"view":{"id":"48399"}},"id":"48398","type":"GlyphRenderer"},{"attributes":{"source":{"id":"48387"}},"id":"48392","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48450"},"selection_policy":{"id":"48449"}},"id":"48394","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"48433","type":"FixedTicker"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48400","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48413","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48396","type":"VBar"},{"attributes":{"source":{"id":"48394"}},"id":"48399","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48441"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48442"},"ticker":{"id":"48313"}},"id":"48312","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48461"},"selection_policy":{"id":"48460"}},"id":"48405","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48412"},"glyph":{"id":"48413"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48415"},"nonselection_glyph":{"id":"48414"},"view":{"id":"48417"}},"id":"48416","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48408","type":"VBar"},{"attributes":{},"id":"48464","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48406","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48405"},"glyph":{"id":"48406"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48408"},"nonselection_glyph":{"id":"48407"},"view":{"id":"48410"}},"id":"48409","type":"GlyphRenderer"},{"attributes":{},"id":"48465","type":"Selection"},{"attributes":{},"id":"48308","type":"LinearScale"},{"attributes":{"source":{"id":"48405"}},"id":"48410","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48407","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48415","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48411","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48419"},"glyph":{"id":"48420"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48422"},"nonselection_glyph":{"id":"48421"},"view":{"id":"48424"}},"id":"48423","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48463"},"selection_policy":{"id":"48462"}},"id":"48412","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"48473"},{"id":"48471"}]},"id":"48474","type":"Column"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48422","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48418","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48420","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48414","type":"VBar"},{"attributes":{"source":{"id":"48412"}},"id":"48417","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48426"},"glyph":{"id":"48427"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48429"},"nonselection_glyph":{"id":"48428"},"view":{"id":"48431"}},"id":"48430","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48465"},"selection_policy":{"id":"48464"}},"id":"48419","type":"ColumnDataSource"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48438"},"group":null,"major_label_policy":{"id":"48439"},"ticker":{"id":"48401"}},"id":"48316","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48429","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48425","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48427","type":"VBar"},{"attributes":{},"id":"48466","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48421","type":"VBar"},{"attributes":{"source":{"id":"48419"}},"id":"48424","type":"CDSView"},{"attributes":{},"id":"48467","type":"Selection"},{"attributes":{},"id":"48313","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48467"},"selection_policy":{"id":"48466"}},"id":"48426","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"48330"},{"id":"48364"}],"tools":[{"id":"48320"},{"id":"48321"},{"id":"48322"},{"id":"48323"},{"id":"48324"},{"id":"48325"},{"id":"48326"},{"id":"48327"},{"id":"48354"},{"id":"48355"},{"id":"48356"},{"id":"48357"},{"id":"48358"},{"id":"48359"},{"id":"48360"},{"id":"48361"}]},"id":"48472","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48403","type":"Title"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48432","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48428","type":"VBar"},{"attributes":{"axis":{"id":"48312"},"coordinates":null,"group":null,"ticker":null},"id":"48315","type":"Grid"},{"attributes":{"source":{"id":"48426"}},"id":"48431","type":"CDSView"},{"attributes":{"toolbar":{"id":"48472"},"toolbar_location":"above"},"id":"48473","type":"ToolbarBox"},{"attributes":{"ticks":[0,1,2,3]},"id":"48401","type":"FixedTicker"},{"attributes":{"below":[{"id":"48312"}],"center":[{"id":"48315"},{"id":"48319"},{"id":"48379"},{"id":"48386"},{"id":"48393"},{"id":"48400"}],"height":331,"left":[{"id":"48316"}],"output_backend":"webgl","renderers":[{"id":"48377"},{"id":"48384"},{"id":"48391"},{"id":"48398"}],"title":{"id":"48403"},"toolbar":{"id":"48330"},"toolbar_location":null,"width":496,"x_range":{"id":"48304"},"x_scale":{"id":"48308"},"y_range":{"id":"48306"},"y_scale":{"id":"48310"}},"id":"48303","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48342","type":"LinearScale"},{"attributes":{},"id":"48304","type":"DataRange1d"},{"attributes":{},"id":"48306","type":"DataRange1d"},{"attributes":{},"id":"48310","type":"LinearScale"}],"root_ids":["48474"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"a508e3c4-c2b4-43f6-965d-0608d67f3627","root_ids":["48474"],"roots":{"48474":"63f9159b-be76-4e55-aeb8-1fe936a3b71d"}}];
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