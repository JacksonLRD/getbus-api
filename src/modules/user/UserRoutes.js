// class UserRoutes {
//   static #prefix = "/users";
//   static #router;
//   static #controller;

//   constructor(router, controller) {
//     UserRoutes.#router = router;
//     UserRoutes.#controller = controller;
//   }

//   static loadRoutes() {
//     this.#create();

//     return this.#router;
//   }

//   static #create() {
//     this.#router.post(this.#prefix, this.#controller.create);
//   }
// }

const usersRouter = (router, controller) => {
  const prefix = "/users";

  router.post(prefix, (req, res) => controller.create(req, res));
};

// module.exports = { UserRoutes };
module.exports = { usersRouter };
