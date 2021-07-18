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
                img: "../assets/images/dogfood.jpg",
                inventory: 10,
            },
            {
                id: 1,
                title: "고양이 사료",
                description: "수제 고양이 사료입니다.",
                price: 20000,
                img: "../assets/images/dogfood.jpg",
                inventory: 10,
            },
            {
                id: 2,
                title: "새 사료",
                description: "수제 새 사료입니다.",
                price: 5000,
                img: "../assets/images/dogfood.jpg",
                inventory: 1,
            },
            {
                id: 3,
                title: "미어캣 사료",
                description: "수제 미어캣 사료입니다.",
                price: 25000,
                img: "../assets/images/dogfood.jpg",
                inventory: 2,
            },
            {
                id: 4,
                title: "햄스터 사료",
                description: "수제 햄스터 사료입니다.",
                price: 10000,
                img: "../assets/images/dogfood.jpg",
                inventory: 30,
            },
            {
                id: 5,
                title: "거북이 사료",
                description: "수제 거북이 사료입니다.",
                price: 2000,
                img: "../assets/images/dogfood.jpg",
                inventory: 0,
            },
        ],
        counter: 0,
        cart: []
    },
    actions: {
        addProductToCart({state, commit}, product) {
        	//제품의 남은 수량이 있을 경우
            if ( product.inventory > 0 ) { 
                const cartItem = state.cart.find(item => item.id === product.id);
                if (!cartItem) {
                    commit('pushProductToCart', product.id); //추가할 제품이 쇼핑 카트의 제품과 일치하지 않을 경우, 장바구니에 새로 추가
                } else {
                    commit('incrementItemQuantity', cartItem); //일치할 경우, 쇼핑 카트의 제품 수량을 증가
                }
                commit('decrementProductInventory', product); //남은 수량 -1
            }
        }
    },
    mutations: {
        //쇼핑 카트에 제품을 추가
        pushProductToCart(state, productId) { 
            state.cart.push({
                id: productId,
                quantity: 1
            });
        },
        //쇼핑 카트의 아이템 수량 증가
        incrementItemQuantity(state, cartItem) { 
            cartItem.quantity++;
        },
        //쇼핑 카트의 아이템 수량 감소
        decrementProductInventory(state, product) { 
            product.inventory--;
        }
    },
    getters: {
        cartProducts(state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id);
                return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: cartItem.quantity,
                img: product.img,
                };
            });
        },
        cartTotal(state, getters) {
            let total = 0;
            getters.cartProducts.forEach(cartItem => {
                total += cartItem.price * cartItem.quantity;
            });
            return total;
        }
    },
})