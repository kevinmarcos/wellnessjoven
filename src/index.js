import app from './app.js';
import { PORT } from './config.js';

app.listen(PORT)

console.log('Server running at ' + new Date().toLocaleString());
console.log(`Server running on port ${PORT}`);
