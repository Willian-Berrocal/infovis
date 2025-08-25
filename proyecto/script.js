function loadVisualization(tool) {
  const content = document.getElementById("content");

  let html = "";

  switch (tool) {
    case "rawgraphs":
      html = `
        <div class="visualization">
          <h2>¿Cómo fluye el gasto desde las tiendas hacia las categorías y productos?</h2>
          <object type="image/svg+xml" data="rawgraphs.svg"></object>
        </div>
      `;
      break;

    case "flourish":
      html = `
        <div class="visualization">
          <h2>¿En qué categorías y productos se concentra mayormente el gasto?</h2>
          <div class="flourish-embed flourish-hierarchy" data-src="visualisation/24816622">
            <script src="https://public.flourish.studio/resources/embed.js"></script>
            <noscript>
              <img src="https://public.flourish.studio/visualisation/24816622/thumbnail" width="100%" alt="hierarchy visualization" />
            </noscript>
          </div>
        </div>
      `;
      break;

    case "datawrapper":
      html = `
        <div class="visualization">
          <h2>¿Qué otras tendencias podemos observar en los datos usando Datawrapper?</h2>
          <p>[Aquí insertar código de Datawrapper]</p>
        </div>
      `;
      break;

    case "tableau":
      html = `
        <div class="visualization">
          <h2>¿Qué insights interactivos revela Tableau sobre nuestros datos?</h2>
          <p>[Aquí insertar código de Tableau]</p>
        </div>
      `;
      break;

    case "powerbi":
      html = `
        <div class="visualization">
          <h2>¿Cómo podemos profundizar en los patrones de gasto con Power BI?</h2>
          <p>[Aquí insertar código de Power BI]</p>
        </div>
      `;
      break;
  }

  // Cargar contenido asincrónicamente
  content.innerHTML = html;
}
