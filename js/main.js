// console.log('hey')
// import './pages/book-app.cmp.js';
// import './pages/book-app.cmp.js';
import { myRouter } from './routes.js'
import appHeader from './cmps/app-header.cmp.js'
import { eventBus } from './services/event-bus-service.js'



const options = {
    el: '#app',
    router:myRouter,
    template: `
        <section>
            <nav class="main-nav">
                <app-header ></app-header>

            </nav>
            <main>
                <router-view></router-view>
            </main>
            <!-- <book-app>  </book-app> -->
        </section>
    `,
    components:{
        appHeader
    }

}



const app = new Vue(options);