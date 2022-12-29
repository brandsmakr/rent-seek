import {
  HomePage,
  AboutPage,
  ShopPage,
  ContactPage,
  CategoriesPage,
  ShopAchieverPage,
  WishlistPage,
  LoginAuth,
  RegisterAuth,
  VerificationAuth,
} from "../pages";
import {
  MainDashboard,
  Products,
  Categories,
  CategoryForm,
  ProductForm,
  Users,
  UserQueries,
} from "../pages/dashboard";
import { WebsiteLayout, HomepageLayout, AdminLayout } from "../layouts";

export const AppRoutes = [
  {
    Component: HomepageLayout,
    children: [
      { path: "", Component: HomePage },
      { path: "/home", Component: HomePage },
    ],
  },
  {
    Component: WebsiteLayout,
    children: [
      { path: "/shop", Component: ShopPage },
      { path: "/product/:product_id", Component: ShopAchieverPage },
      { path: "/about", Component: AboutPage },
      { path: "/contact", Component: ContactPage },
      { path: "/categories", Component: CategoriesPage },
      { path: "/wishlist", Component: WishlistPage },
      { path: "/login", Component: LoginAuth },
      { path: "/register", Component: RegisterAuth },
      { path: "/verify-account", Component: VerificationAuth },
    ],
  },
  {
    Component: AdminLayout,
    children: [
      { path: "/admin", Component: MainDashboard },
      { path: "/admin/categories", Component: Categories },
      { path: "/admin/category-form", Component: CategoryForm },
      { path: "/admin/category-form/:id", Component: CategoryForm },
      { path: "/admin/products", Component: Products },
      { path: "/admin/product-form", Component: ProductForm },
      { path: "/admin/product-form/:id", Component: ProductForm },
      { path: "/admin/users", Component: Users },
      { path: "/admin/user-queries", Component: UserQueries },
    ],
  },
];

export default AppRoutes;
