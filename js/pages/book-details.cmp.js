import { bookService } from '../services/book-service.js'
import reviewAdd from '../cmps/review-add.cmp.js'
import reviewPreview from '../cmps/book-preview.cmp.js'
// import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
        <section class="book-detail" v-if="book" >
            <div class="details">
                <h1 class="priceClass">{{book.title}}</h1>
                <img :src ="imgUrl" class="img-detail" />
                <p>Subtitle: {{book.subtitle}}</p>
                <p>Author: {{book.authors[0]}}</p>
                <p>Published Date: {{publishedAt}}</p>
                <p>Pages: {{numPage}}</p>
                <p>Price:<span :class="priceClass">{{price}}</span></p>
                <p v-show="bookIsOnSale" v-bind:book="onSale">{{onSale}}</p>
                <review-add :bookId="book.id" v-if="addingReview" @added="addReview" @canceled="closeReview" @delete="deleteReview(id)"/>
                <button @click="addingReview = true">Add Review</button>
                <div class="reviews" v-if="book.reviews.length">
                    <li v-for="review in book.reviews" :key="review.id">
                        <review-preview @delete="deleteReview" :review="review" />
                    </li>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            bookIsOnSale: false,
            book: null,
            addingReview: false
        }
    },
    methods: {
        emitReturn(bookId) {//use later to return
            this.$emit('return')
        },
        bookClicked() {
        },
        addReview(bookId) {
            bookService.getById(bookId)
                .then(book => {
                    this.book = book
                    this.closeReview();
                })
        },
        closeReview() {
            this.addingReview = false;
        },
        deleteReview(reviewId) {
            console.log(this.book.reviews);
            const idx = this.book.reviews.findIndex(review => review.id === reviewId)
            this.book.reviews.splice(idx, 1)
            bookService.saveBooks();
            // eventBus.$emit('show-msg', { txt: 'Review has been deleted', type: 'Success' })
        }
    },
    computed: {
        price() {
            const currency = this.book.listPrice.currencyCode;
            // console.log(currency);
            var txtCurrency = "";
            switch (currency) {
                case "ILS":
                    txtCurrency = "₪";
                    break;
                case "EUR":
                    txtCurrency = "€";
                    break;
                case "USD":
                    txtCurrency = "$";
                    break;
            }
            return this.book.listPrice.amount + " " + txtCurrency;
        },
        imgUrl() {
            return this.book.thumbnail
        },
        numPage() {
            if (this.book.pageCount > 500) {
                return 'Long Reading'
            } else if (this.book.pageCount > 10) {
                return 'Decent Reading'
            } else {
                return 'Light Reading'
            }
        },
        publishedAt() {
            var date = new Date();
            var year = date.getFullYear();
            if (this.book.publishedDate >= year - 1) {
                return 'New!'
            } else if (this.book.publishedDate - 10 < year) {
                return 'Veteren Book!'

            }
        },
        onSale() {
            // console.log('in on sale');
            // console.log(this.book);

            if (this.book.listPrice.isOnSale) {
                this.bookIsOnSale = true
                return 'SALE!'
            }
        },
        priceClass() {
            const priceBook = this.book.listPrice.amount;
            return { red: priceBook > 150, green: priceBook < 120 };
        },

    },
    created() {
        // const id = this.$route.params.bookId
        // console.log('in created',this.$route.params.bookId)
        // bookService.getById(id)
        //     .then(book => this.book = book)
        //     .then(console.log(this.book,'this BOOK'))
        //     .then(console.log(this.book.reviews,'book reviews'))
        const bookId = this.$route.params.bookId;
        bookService.getById(bookId)
            .then(book => this.book = book)
    },
    components: {
        reviewAdd,
        reviewPreview,
    }
}