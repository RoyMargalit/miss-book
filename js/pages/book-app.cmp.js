import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookDetails from '../pages/book-details.cmp.js';
// import { utilService } from '../services/util-service.js'
import { eventBus } from '../services/event-bus-service.js'



export default {
    template: `
        <section class="book-app">
            <h1>Books app!</h1>
            <book-filter v-show="!isBookSelected" @filter="setFilter"></book-filter>
            <book-list v-show="!isBookSelected" v-bind:books="booksToShow" v-on:selected="selectBook"></book-list>
            <book-details v-if="isBookSelected"  v-bind:book="selectedBook"></book-details>
        </section>
    `,
    data() {
        return {
            filterBy: null,
            books: null,
            selectedId: '',
            isBookSelected: false,
        }
    },
    methods: {
        showDetails: function (bookId) {
            console.log(bookId)
        },
        selectBook(bookId) {
            this.selectedId = bookId;
            this.isBookSelected = true;
        },
        showBooks() {
            this.isBookSelected = false;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const txt = this.filterBy.byName.toLowerCase();
            return this.books.filter(book => book.title.toLowerCase().includes(txt) &&
                (
                    book.listPrice.amount < this.filterBy.fromPrice ||
                    book.listPrice.amount > this.filterBy.toPrice
                )
            )
        },

        selectedBook() {
            const book = this.books.find(book => book.id === this.selectedId)
            return book;
        }
    },
    created() {
        bookService.getBooks()
            .then(books => this.books = books)
    },
    components: {
        bookList,
        bookFilter,
        bookDetails,
    },   
}