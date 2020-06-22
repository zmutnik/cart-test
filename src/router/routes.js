import Pricing from "../views/Pricing.vue";

const routes = [
  {
    path: "/",
    name: "Pricing",
    component: Pricing
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  }
];

export default routes;
