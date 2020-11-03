import  { bookService } from '../services/book-service.js'
// import { eventBus } from '../services/event-bus-service.js'

export default {
    props: ['bookId'],
    template: `
        <section class="review-add" v-if="review">
                <form @submit.prevent="addReview">
                    <h3>Add a review</h3>
                    <label>
                        Full Name:
                        <input type="text" name="fullname" ref="nameInput" v-model:value="review.fullName">
                    </label>
                    <label class="rating">
                        Rate: 
                        <select name="rating" v-model:value="review.rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </label>
                    <label>
                        Read At:
                        <input type="date" name="readAt" v-model:value="review.readAt">
                    </label>
                    <label for="moreInfo">
                        Anything to add?
                    </label>
                    <textarea name="moreInfo" cols="50" rows="10" v-model:value="review.moreInfo"></textarea>
                    <div class="btns">
                        <input type="submit" value="Add Review">
                        <button type="button" @click="cancelAdd">Cancel</button>
                    </div>
                </form>
        </section>
    `,
    data() {
        return {
            review: null,
        }
    },
    methods: {
        addReview() {
            bookService.addReview(this.review, this.bookId)
            this.$emit('added', this.bookId);
            this.review = null;
            // eventBus.$emit('show-msg', {txt:'Review has been added', type:'Success'})
        },
        cancelAdd(){
            this.$emit('canceled')
            this.review = null;
        }
    },
    mounted() {
        this.$refs.nameInput.focus();
    },
    created() {
        this.review = bookService.getNewReview()
    }
}

