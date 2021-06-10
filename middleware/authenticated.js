export default ({ store, redirect, route }) => {
  console.log(route)
    // retrieving keys via object destructuring
    const isAuth = store.getters.isAuth
    const routes = ['/login', '/register']
    console.info("Identificado:", isAuth)
    if (!isAuth && !routes.find((item) => item === route.path)) {
      return redirect('/login')
    }
  }
