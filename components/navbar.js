function navbar() {
  return `
    return <h2> News App</h2>
    <input type = "text" id = "search_input">
      `;
}

function sidebar() {
  return `<h2>Countries</h2>
    <h3 id = "in"> India</h3>
    <h3 id = "ch"> Usa</h3>
    <h3 id = "us">  China</h3>
    <h3 id = "uk"> UK</h3>
    <h3 id = "nz"> New Zealand</h3>`;
}

export { navbar, sidebar };
