
export default {
    template: `
        <section class="book-filter">
            <h2>Filter books</h2>
            <form v-on:submit.prevent="emitFilter">
                <input type="text" v-model="filterBy.byName" placeholder="Search here"  />
                <label>
                    <input type="range" name="price" min="0" max="999" v-model.number="filterBy.fromPrice" /> 
                    Price
                </label>
                    <button v-on:click="emitFilter">Filter</button>
            </form>
            <hr />
            <!-- {{filterBy}} -->
        </section>
    `,
    data() {
        return {
            filterBy : {byName : '', fromPrice : 0, toPrice: 999}
        }
    },
    methods: {
        emitFilter() {
            // this.$emit('filter', this.filterBy);//bad practice 
            // this.$emit('filter', ...this.filterBy);//shallow copy
            this.$emit('filter', JSON.parse(JSON.stringify( this.filterBy)))//our way to make a deep copy
        },
        onSubmit(){
            // console.log('submitting');
        }
    }
}