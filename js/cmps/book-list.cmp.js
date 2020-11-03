
import bookPreview from './book-preview.cmp.js'

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <h2>Books List</h2>
            <ul class="card-container">
                <li v-for="currBook in books" :key="currBook.id" >
                   <book-preview v-bind:book="currBook" @click.native="[selectBook(currBook.id),bookDetails(currBook.id)]" />
                </li>
            </ul>
        </section>
    `,
    methods: {
        selectBook(bookId) {
            this.$emit('selected',bookId)
        },
        bookDetails(bookId) {
            this.$emit('details',bookId)
        },
        
    },
    components:{
        bookPreview
    }
}