const context = require.context('../scss', true, /\.scss$/);

function importAll(r) {
  r.keys().forEach(r);
}

importAll(context);