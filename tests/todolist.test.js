const app = require("../app");
const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;

beforeAll((done) => {
  queryInterface
    .bulkInsert(
      "todolist",
      [
        {
          title: "Check Email",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Check Git",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Debug Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pair Program",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Push Code",
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
    .then((_) => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });

  console.log(">>>>>>>> BEFORE ALL <<<<<<<<<<");
});

afterAll((done) => {
  queryInterface
    .bulkDelete("todolist", null, {})
    .then((_) => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });
});

describe("testing todolist", () => {
  it("find all todolist", (done) => {
    request(app)
      .get("/todolists")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body, status } = response;

        expect(status).toEqual(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("find todolist by id", (done) => {
    request(app)
      .get("/todolists/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { status } = response;

        expect(status).toEqual(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("create todolist", (done) => {
    request(app)
      .post("/todolists")
      .send({
        title: "Meeting",
        status: false,
      })
      .set("Accept", "application/json")
      .expect(201)
      .then((response) => {
        const { body } = response;

        expect(body.message).toEqual("Todolist created successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("update todolist", (done) => {
    request(app)
      .put("/todolists/1")
      .send({
        title: "Check Email",
        status: true,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const { body } = response;

        expect(body.message).toEqual("Todolist Upadated successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("delete todolist", (done) => {
    request(app)
      .delete("/todolists/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        const body = response;
        expect(body.message).toEqual("Todolist deleted successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });
});
