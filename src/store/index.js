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
                productimg: require("../assets/images/dogfood.jpg"),
                infoimg: require("../assets/images/dogfood-info.jpg"),
                infoimg2: require("../assets/images/dogfood-info2.jpg"),
                detailimg2: require("../assets/images/dogfood-detail.jpg"),
                inventory: 10,
                selled: 2,
            },
            {
                id: 1,
                title: "고양이 사료",
                description: "수제 고양이 사료입니다.",
                price: 20000,
                productimg: require("../assets/images/dogfood.jpg"),
                infoimg: require("../assets/images/dogfood-info.jpg"),
                inventory: 8,
            },
            {
                id: 2,
                title: "새 사료",
                description: "수제 새 사료입니다.",
                price: 5000,
                productimg: require("../assets/images/dogfood.jpg"),
                infoimg: require("../assets/images/dogfood-info.jpg"),
                inventory: 1,
            },
            {
                id: 3,
                title: "미어캣 사료",
                description: "수제 미어캣 사료입니다.",
                price: 25000,
                productimg: require("../assets/images/dogfood.jpg"),
                infoimg: require("../assets/images/dogfood-info.jpg"),
                inventory: 2,
            },
            {
                id: 4,
                title: "햄스터 사료",
                description: "수제 햄스터 사료입니다.",
                price: 10000,
                productimg: require("../assets/images/dogfood.jpg"),
                infoimg: require("../assets/images/dogfood-info.jpg"),
                inventory: 30,
            },
            {
                id: 5,
                title: "거북이 사료",
                description: "수제 거북이 사료입니다.",
                price: 2000,
                productimg: require("../assets/images/dogfood.jpg"),
                infoimg: require("../assets/images/dogfood-info.jpg"),
                inventory: 0,
            },
        ],
        cart: [],
        reviews: [
            {
                productId: 0,
                reviewId : 0,
                reviewtitle: "견왈 : 좋아요!",
                reviewer: "조",
                reviewedate: "21.07.19",
            },
            {
                productId: 0,
                reviewId : 1,
                reviewtitle: "개가 싫어해요.",
                reviewer: "김",
                reviewedate: "21.07.19",
            },
            {
                productId: 1,
                reviewId : 2,
                reviewtitle: "고양이가 잘 먹네요!",
                reviewer: "이",
                reviewedate: "21.07.20",
            },
            {
                productId: 2,
                reviewId : 3,
                reviewtitle: "새가 좋아해요.",
                reviewer: "박",
                reviewedate: "21.07.21",
            }
        ],
        ordersheet: {
            addr: '',
            orderProduct: '',
        }
    },
    actions: {
        //'+'버튼 클릭 시
        addOrder({state, commit}, product) {
        	//제품의 남은 수량이 있을 경우
            if ( product.inventory > 0 ) { 
                const productItem = state.products.find(item => item.id === product.id);
                const cartItem = state.cart.find(item => item.productId === product.id);
                if (!cartItem) {
                    commit('pushProductToCart', productItem); //추가할 제품이 쇼핑 카트의 제품과 일치하지 않을 경우, 장바구니에 새로 추가
                } else {
                    if( product.inventory > 0 ) {
                    commit('incrementItemQuantity', cartItem); //일치할 경우, 쇼핑 카트의 제품 수량을 증가}
                    }
                }
                commit('decrementProductInventory', productItem); //남은 수량 -1
                commit('incrementItemTotalPrice', cartItem); //가격변경
            }
            else {
                alert("남은수량 없음");
            }
        },
        //'-'버튼 클릭 시
        subOrder({state, commit}, product) {
        	//쇼핑 카트에 담긴 아이템이 있을 경우
            const cartItem = state.cart.find(item => item.productId === product.id);
            if (cartItem.quantity > 0) {
                commit('decrementItemQuantity', cartItem); //쇼핑 카트의 제품 수량 -1
                commit('incrementProductInventory', product); //남은 수량 +1
                commit('decrementItemTotalPrice', cartItem); //가격변경
            }
            else {
                alert("장바구니에 담은 수량 없음");
            }
        },
        //'주문하기'버튼 클릭 시
        order({commit}) {
            commit('saveOrderAddress');
        },
        setAddress({commit},addr) {
            commit("setAddress", addr);
        }

    },
    mutations: {
        //쇼핑 카트에 제품을 추가
        pushProductToCart(state, product) { 
            state.cart.push({
                productId: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
                inventory: product.inventory,
                itemtotalprice: product.price,
            });
        },
        //쇼핑 카트의 아이템 수량 증가
        incrementItemQuantity(state, cartItem) { 
            cartItem.quantity++;
        },
        //쇼핑 카트의 아이템 수량 감소
        decrementItemQuantity(state, cartItem) { 
            cartItem.quantity--;
        },
        // 아이템의 남은 수량 증가
        incrementProductInventory(state, product) { 
            product.inventory++;
        },
        // 아이템의 남은 수량 감소
        decrementProductInventory(state, product) { 
            product.inventory--;
        },
        //가격변경
        incrementItemTotalPrice(state, cartItem) {
            cartItem.itemtotalprice += cartItem.price;
        },
        //가격변경
        decrementItemTotalPrice(state, cartItem) {
            cartItem.itemtotalprice -= cartItem.price;
        },
        setAddress(state, addr) {
            console.log("setAddress");
            console.log("addr ", addr);
            state.ordersheet.addr = addr;
        },
        //주문서에 주소,장바구니 제품 추가
        saveOrderAddress(state) { 
            state.ordersheet.orderProduct = state.cart;
        },
    },
    getters: {
        getcartProducts(state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.productId);
                if(product === undefined) {
                    return {
                        quantity: 0,
                        itemtotalprice: 0,
                    }
                } else return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    inventory: product.inventory,
                    quantity: cartItem.quantity,
                    itemtotalprice: cartItem.itemtotalprice,
                };
            });
        },
        getcartProductsthis:(state) => (productItem) => {
            const cartItem = state.cart.find(item => item.productId === productItem.id);
            const product = state.products.find(product => product.id === productItem.id);
            if(cartItem === undefined) {
                return {
                    quantity: 0,
                    itemtotalprice: 0,
                }
            }
            return {
                product : product.title,
                quantity: cartItem.quantity,
                itemtotalprice: cartItem.itemtotalprice,
            };
        },
        getproductReview:(state) => (productItem) => {
            return state.reviews.filter(reviewItem => reviewItem.productId === productItem.id);
        },
        cartTotal(state) {
            let total = 0;
            state.cart.forEach(cartItem => {
                total += cartItem.itemtotalprice;
            });
            return total;
        },
    },
})