

export default {
    props: ['book'],
    template: `
        <section class="book-preview" >
        <router-link :to=" '/book/' +book.id">
            <div class= "card">
                <h4>{{book.title}}</h4>
                <img :src="imgUrl" />
                <h5>price: {{localePrice}}</h5>
            </div>
            </router-link>
        </section>
    `,
    computed: {
        imgUrl() {
            return this.book.thumbnail
        },
        localePrice() {
            var price = parseInt(this.book.listPrice.amount)
            // console.log(price)
            var locale = ''
            if (this.book.listPrice.currencyCode === 'EUR') {
                locale = 'de-DE'
            } else if (this.book.listPrice.currencyCode === 'USD') {
                locale = 'en-US'
            } else if (this.book.listPrice.currencyCode === 'ILS') {
                locale = 'he-IL'
            }
            return new Intl.NumberFormat(locale,
                { style: 'currency', currency: this.book.listPrice.currencyCode }
            ).format(price)
        }
    }
}