// Laadt de Spline Viewer module dynamisch in
const script = document.createElement("script");
script.type = "module";
script.src = "https://unpkg.com/@splinetool/viewer@1.9.62/build/spline-viewer.js";
document.body.appendChild(script);