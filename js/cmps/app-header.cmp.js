export default{
    template:`
    <section class="app-header container">
        <h2>Barnes & Toggle</h2>
        <router-link to="/" exact>Home</router-link>|
                <router-link to="/book" exact>book App</router-link>|
                <router-link to="/about">About Us</router-link>|
                <router-link to="/book/:bookId">Book</router-link>
    </section>
    `
}