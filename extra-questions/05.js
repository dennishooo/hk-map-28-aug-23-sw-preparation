const data = {
  routes: [
    {
      overnightRoute: 0,
      routeId: "2",
      routeName_c: "大澳 > 梅窩碼頭",
      routeName_e: "Tai O > Mui Wo Ferry Pier",
      routeName_s: "大澳 > 梅窝码头",
      routeNo: "1",
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: "1",
      routeName_c: "梅窩碼頭 > 大澳",
      routeName_e: "Mui Wo Ferry Pier > Tai O",
      routeName_s: "梅窝码头 > 大澳",
      routeNo: "1",
      specialRoute: 0,
    },
    {
      overnightRoute: 0,
      routeId: "3",
      routeName_c: "紅磡 (紅鸞道)  > 昂坪",
      routeName_e: "Hung Hom (Hung Luen Road)  > Ngong Ping",
      routeName_s: "红磡 (红鸾道)  > 昂坪",
      routeNo: "1R",
      specialRoute: 0,
    },
  ],
};

const routes = data.routes;
console.log(Array.isArray(routes));
console.log(routes.length);

function findRoute(routes, routeId) {
  return routes.find((route) => route.routeId === routeId);
}

function simplifyRoutesData(routes, keys) {
  // return the whole list of simplified routes
  return routes.map((route) => {
    let simplifiedRoute = {};
    for (let key of keys) {
      simplifiedRoute[key] = route[key];
    }
    // returning to the map function to create a new array
    return simplifiedRoute;
  });
}
let route = findRoute(routes, "3");
let simplifiedRoutes = simplifyRoutesData(routes, ["routeId", "routeName_c"]);
console.log(route);
console.log(simplifiedRoutes);
