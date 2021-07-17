import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // 스토어 객체 옵션 설정
    state: {
        products: [
            {
                id: 0,
                title: "강아지 사료",
                description: "수제 강아지 사료입니다.",
                price: 15000,
                img: "../assets/images/dogfood.jpg"
            },
            {
                id: 1,
                title: "고양이 사료",
                description: "수제 고양이 사료입니다.",
                price: 20000,
                img: "../assets/images/dogfood.jpg"
            },
            {
                id: 2,
                title: "새 사료",
                description: "수제 새 사료입니다.",
                price: 5000,
                img: "../assets/images/dogfood.jpg"
            },
            {
                id: 3,
                title: "미어캣 사료",
                description: "수제 미어캣 사료입니다.",
                price: 25000,
                img: "../assets/images/dogfood.jpg"
            },
            {
                id: 4,
                title: "햄스터 사료",
                description: "수제 햄스터 사료입니다.",
                price: 10000,
                img: "../assets/images/dogfood.jpg"
            },
            {
                id: 5,
                title: "거북이 사료",
                description: "수제 거북이 사료입니다.",
                price: 2000,
                img: "../assets/images/dogfood.jpg"
            },
        ],
        cart: []
    },
    actions: {
        //추가할 도서가 쇼핑 카트의 도서와 일치하지 않을 경우, 쇼핑 카트에 도서를 새롭게 추가합니다.
        //추가할 도서가 쇼핑 카트의 도서와 일치할 경우, 쇼핑 카트의 도서 수량을 증가합니다.
        addProductToCart({state, commit}, product) {
            if ( product.inventory > 0 ) { 
            const cartItem = state.cart.find(item => item.id === product.id);
            if (!cartItem) {
                commit('pushProductToCart', product.id); 
            } else {
                commit('incrementItemQuantity', cartItem); 
            }
            commit('decrementProductInventory', product); 
            }
        }
    },
    mutations: {
        pushProductToCart(state, productId) { // [1]
            state.cart.push({
                id: productId,
                quantity: 1
            });
        },
        incrementItemQuantity(state, cartItem) { // [2]
            cartItem.quantity++;
        },
        decrementProductInventory(state, product) { // [3]
            product.inventory--;
        }
    }
})