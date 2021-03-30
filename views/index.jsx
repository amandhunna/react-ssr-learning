const React = require('react');



function DefaultLayout(props) {
  console.log("props Data:::",props);
  
  return (
    <html  lang="en">
      <head><title>{props.name}</title></head>
      <meta name="viewport" content="width=device-width, initial-1"></meta>
      <meta name="description" content="trying ssr"></meta>
      <body>{props.children || "No Children yet"}</body>
    </html>
  );
}

module.exports = DefaultLayout;