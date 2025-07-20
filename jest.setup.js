// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import { TextEncoder } from 'util'; // Or from 'text-encoding' if 'util' doesn't work with your Node.js version
    global.TextEncoder = TextEncoder;