import { configureStore, createSlice } from "@reduxjs/toolkit";
// Products Slice
const productsSlice = createSlice({
    name: 'products',
    
    initialState: {
        veg: [
            { name: "Tomato", price: 50.45, image: "/vegimages/tomato.jpg", description: "Fresh, juicy red tomatoes perfect for salads, cooking, and garnishing." },
            { name: "Radish", price: 75.45, image: "/vegimages/radish.jpg", description: "Crisp and peppery radishes that add a spicy kick to your dishes." },
            { name: "Onion", price: 100, image: "/vegimages/onion.jpg", description: "Versatile onions that bring flavor and depth to any meal." },
            { name: "Curry Leaves", price: 11.45, image: "/vegimages/curryleaves.jpg", description: "Fragrant curry leaves used in Indian cooking for a distinctive flavor." },
            { name: "Cucumber", price: 65.45, image: "/vegimages/cucumber.jpg", description: "Fresh and cool cucumbers, ideal for salads or a healthy snack." },
            { name: "Chilli", price: 50.45, image: "/vegimages/chilli.jpg", description: "Spicy red chillies to add heat and flavor to your dishes." },
            { name: "Cauliflower", price: 75.95, image: "/vegimages/cauliflower.jpg", description: "A versatile vegetable perfect for soups, curries, or as a side dish." },
            { name: "Bottle Gourd", price: 30, image: "/vegimages/bottlegourd.jpg", description: "A mild-flavored vegetable commonly used in Indian dishes." },
            { name: "Bitter Gourd", price: 60, image: "/vegimages/bittergourd.jpg", description: "A unique bitter-tasting vegetable known for its health benefits." },
            { name: "Ladies Finger", price: 55.65, image: "/vegimages/ladiesfinger.jpg", description: "Tender and nutritious ladyfinger (okra) for your curries and stir-fries." },
            { name: "Pumpkin", price: 85, image: "/vegimages/pumpkin.jpg", description: "Sweet and creamy pumpkin, perfect for soups, pies, or roasting." },
            { name: "Cabbage", price: 60.65, image: "/vegimages/cabbage.jpg", description: "Crunchy and refreshing cabbage for salads, slaws, or stir-fries." },
            { name: "Broccoli", price: 550.65, image: "/vegimages/broccoli.jpg", description: "Rich in nutrients, broccoli is great for steaming or adding to stir-fries." },
            { name: "Beans", price: 66.45, image: "/vegimages/beans.jpg", description: "Fresh beans that are perfect for a healthy side dish or main course." },
            { name: "Mint Leaves", price: 46.45, image: "/vegimages/mint.jpg",description: "Fresh mint leaves with a cool, refreshing aroma, perfect for chutneys, teas, and garnishing."},
            { name: "Red Chilli", price: 80, image: "/vegimages/redchilli.jpg",description: "Spicy red chillies to add heat and flavor to your dishes. Ideal for curries and pickles."},
            { name: "Coriander Leaves", price: 40.40, image: "/vegimages/cori.jpg",description: "Aromatic coriander leaves, widely used for garnishing and enhancing the taste of various cuisines."},
            { name: "Fenugreek Leaves", price: 40, image: "/vegimages/fenu.jpg",description: "Fresh fenugreek (methi) leaves known for their slightly bitter taste, great for parathas and curries."},
            { name: "Drumstick", price: 50, image: "/vegimages/drumstick.jpg",description: "Nutritious drumsticks, a key ingredient in South Indian sambar and curries, rich in vitamins."},
            { name: "Beetroot", price: 150, image: "/vegimages/beetroot.jpg",description: "Fresh and vibrant beetroot, known for its earthy flavor and rich in antioxidants. Ideal for salads and juices."},
            { name: "Yellow Capsicum", price: 350, image: "/vegimages/capsicum.jpg",description: "Sweet and crunchy yellow capsicum (bell pepper), perfect for stir-fries, salads, and as a garnish."},
            { name: "Ginger", price: 190, image: "/vegimages/ginger.jpg",description: "Fresh ginger, a versatile spice that adds a sharp, aromatic flavor to teas, curries, and stir-fries."},
            { name: "Spring Onion", price: 150, image: "/vegimages/springonion.jpg",description: "Crisp and fresh spring onions with a mild onion flavor, great for garnishing, salads, and soups."},
        ],
        nonVeg: [
            { name: "Chicken65", price: 280.86, image: "/nonVegimages/chicken65.jpg", description: "Spicy and crispy deep-fried chicken, a popular Indian snack." },
            { name: "Mutton", price: 400.45, image: "/nonVegimages/mutton.jpg", description: "Tender mutton cuts perfect for curries and slow-cooked stews." },
            { name: "Boti", price: 250.65, image: "/nonVegimages/boti.jpg", description: "Succulent and flavorful boti kebabs for grilling or stewing." },
            { name: "Chicken Lollipop", price: 320.86, image: "/nonVegimages/chickenlollipop.jpg", description: "Crispy fried chicken wings with a tangy coating, served as a snack or appetizer." },
            { name: "Chicken Manchurian", price: 100, image: "/nonVegimages/chickenmanchurian.jpg", description: "A spicy, tangy Chinese-inspired chicken dish that's a favorite." },
            { name: "Crab", price: 380.86, image: "/nonVegimages/crab.jpg", description: "Fresh, juicy crabs that are perfect for curries or a seafood feast." },
            { name: "Chicken Pakodi", price: 120.86, image: "/nonVegimages/chicken pakodi.jpg", description: "Crispy, fried chicken pieces with a deliciously spiced coating." },
            { name: "Chicken Biryani", price: 1200.86, image: "/nonVegimages/chickenbiryani.jpg", description: "Aromatic rice and chicken cooked with spices in the traditional style." },
            { name: "Chicken Tikka", price: 1200.86, image: "/nonVegimages/chickentikka.jpg", description: "Marinated and grilled chicken, tender and smoky with bold flavors." },
            { name: "Fish Curry", price: 280.86, image: "/nonVegimages/fishcurry.jpg", description: "Delicious, spiced fish curry perfect with steamed rice." },
            { name: "Fish Fry", price: 430, image: "/nonVegimages/fishfry.jpg", description: "Crispy and flavorful fish fillets, lightly spiced and fried." },
            { name: "Mixed", price: 1200.86, image: "/nonVegimages/mixed.jpg", description: "A combination of various meats like chicken, mutton, and seafood, cooked together." },
            { name: "Prawns", price: 520.86, image: "/nonVegimages/prawns.jpg", description: "Fresh prawns, perfect for a curry, fried dish, or grilled." },
            { name: "Chilli Chicken", price: 550, image: "/nonVegimages/chillichicken.jpg", description: "Spicy and crispy chicken tossed in a tangy, spicy sauce." }
        ],
        milk: [
            { name: "Badam Milk", price: 28, image: "/milk/badammilk.jpg", description: "A sweet, creamy milk drink made with almonds, perfect for dessert." },
            { name: "Butter", price: 400.45, image: "/milk/butter.jpg", description: "Rich and creamy butter, ideal for spreading on bread or cooking." },
            { name: "Butter Milk", price: 35.45, image: "/milk/buttermilk.jpg", description: "A refreshing drink made from yogurt and spices, great for digestion." },
            { name: "Cheese", price: 200.45, image: "/milk/cheese.jpg", description: "Delicious, creamy cheese perfect for sandwiches or cooking." },
            { name: "Cova", price: 450.45, image: "/milk/cova.jpg", description: "A refreshing, rich milk drink that's creamy and satisfying." },
            { name: "Curd", price: 48, image: "/milk/curd.jpg", description: "Smooth, creamy curd made from fresh milk, ideal for a variety of dishes." },
            { name: "Ghee", price: 600, image: "/milk/ghee.jpg", description: "Pure clarified butter used in cooking for a rich, aromatic flavor." },
            { name: "Ice Cream", price: 325.45, image: "/milk/icecream.jpg", description: "Creamy and indulgent ice cream, available in various flavors." },
            { name: "Milk", price: 40.45, image: "/milk/milk.jpg", description: "Fresh, whole milk from cows, ideal for drinking or cooking." },
            { name: "Milk Powder", price: 260.85, image: "/milk/milkpowder.jpg", description: "Convenient and rich milk powder, perfect for making milk anytime." },
            { name: "Paneer", price: 450, image: "/milk/paneer.jpg", description: "Fresh paneer (Indian cottage cheese), ideal for curries and dishes." }
        ],
        chocolate: [
            { name: "5Star", price: 20, image: "/chocolate/5star.jpg", description: "A classic chocolate bar with a chewy caramel filling." },
            { name: "Dairy Milk", price: 180, image: "/chocolate/dairymilk.jpg", description: "Smooth, rich milk chocolate loved by all." },
            { name: "Febelle", price: 280, image: "/chocolate/fabelle.jpg", description: "A premium chocolate bar with a variety of fillings." },
            { name: "Fuse", price: 48, image: "/chocolate/fuse.jpg", description: "Chocolate with crunchy caramel and peanuts in every bite." },
            { name: "Kitkat", price: 120, image: "/chocolate/kitkat.jpg", description: "Crispy wafers coated with delicious milk chocolate." },
            { name: "Ferrero", price: 1730, image: "/chocolate/ferrero.jpg", description: "Luxury chocolate with a hazelnut filling, wrapped in gold foil." },
            { name: "Hazelnut", price: 580, image: "/chocolate/hazelnut.jpg", description: "Chocolate with crunchy hazelnuts for a satisfying snack." },
            { name: "Nutties", price: 80, image: "/chocolate/nutties.jpg", description: "Chocolate-coated nuts for a perfect crunchy treat." },
            { name: "Dark", price: 378.46, image: "/chocolate/dark.jpg", description: "Intense dark chocolate for those who love rich, bittersweet flavors." },
            { name: "Snicker", price: 172, image: "/chocolate/snicker.jpg", description: "Chocolate, caramel, peanuts, and nougat in every bite." },
            { name: "American", price: 252, image: "/chocolate/american.jpg", description: "Smooth milk chocolate with a delicious filling." },
            { name: "Cuadro", price: 335, image: "/chocolate/cuadro.jpg",description: "A rich blend of dark and milk chocolate with crunchy roasted almonds for a bold flavor."},
            { name: "Mindymint", price: 678, image: "/chocolate/mindymint.jpg",description: "Cool mint-infused dark chocolate that offers a refreshing and smooth taste experience."},
            { name: "Fantastical", price: 243, image: "/chocolate/fantastical.jpg",description: "Silky milk chocolate with caramel swirls and crispy rice for a delightful crunch."},
            { name: "Mandolin", price: 356, image: "/chocolate/mandolin.jpg",description: "Creamy hazelnut chocolate wrapped in a smooth, melt-in-your-mouth texture."},
            { name: "Lilac", price: 465, image: "/chocolate/lilac.jpg",description: "Premium dark chocolate infused with lavender essence, perfect for a floral twist."}
        ]
    },
    reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        IncCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        DecCart: (state, action) => {
            const index = state.findIndex(item => item.name === action.payload.name);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                } else {
                    state.splice(index, 1);
                }
            }
        },
        RemoveFromCart: (state, action) => {
            const index = state.findIndex(item => item.name === action.payload.name);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        ClearCart: () => []
    }
});

export const { AddToCart, IncCart, DecCart, RemoveFromCart, ClearCart } = cartSlice.actions;

// Orders Slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState: [], // Initialize as an empty array
  reducers: {
    OrderDetails: (state, action) => {
      const orderDetails = action.payload;
      state.push(orderDetails); // Push new order details to the array
    },
  },
});

export const { OrderDetails } = ordersSlice.actions;

// Configure Store
const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
       orders: ordersSlice.reducer
    }
});

export default store;
