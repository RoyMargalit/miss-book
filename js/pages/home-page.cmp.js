export default {
    template: `
    <section class="home-page container"  @click="showRef">
        <h1 ref="theTitle">Welcome to Barnes and Toggle!</h1>
        <h2> We are very passionate about our books here</h2>
        <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Minima voluptatum, veritatis impedit quaerat qui voluptas dicta neque magnam hic nihil eligendi exercitationem repellat 
            eaque at animi adipisci ut suscipit voluptates.</p>
        <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Minima voluptatum, veritatis impedit quaerat qui voluptas dicta neque magnam hic nihil eligendi exercitationem repellat 
            eaque at animi adipisci ut suscipit voluptates.</p>
            <hr>
        <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Minima voluptatum, veritatis impedit quaerat qui voluptas dicta neque magnam hic nihil eligendi exercitationem repellat 
            eaque at animi adipisci ut suscipit voluptates.</p>
    </section>
    `,
    methods: {
        showRef() {
            console.log(this.$refs, 'ze2');
        }
    },
    mounted() {
        console.log(this.$refs.theTitle, 'IN MOUNTED');
    },
    created() {
        console.log(this.$refs.theTitle, 'IN CREATED');
    },

}