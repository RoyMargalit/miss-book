export default {
    props:['review'],
    template:`
        <section class="review-preview">
            <h3>{{review.fullName}}</h3>
                <p>Rating: {{review.rating}}</p>
                <p>Read At: {{dateToShow}}</p>
            <p class="review-info">{{review.moreInfo}}</p>
            <button class="delete-review" @click="emitDelete(review.id)">x</button>
        </section>
    `,
    computed:{
        dateToShow(){
            return this.review.readAt.split('').reverse().join('')
        }
    },
    methods:{
        emitDelete(id){
            this.$emit('delete', id)
        }
    },
}